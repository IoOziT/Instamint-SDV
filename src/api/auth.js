"use server";

import jsonwebtoken from "jsonwebtoken";
import ms from "ms";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import authConfig from "./auth.config";
import { getKnex } from "./db";
import Minters from "./db/models/mintersModel";
import { ErrorCode } from "./errors";
import { compareHash, createResetPasswordToken } from "./hash";

export const signIn = async (credentials) => {
  await getKnex();
  const user = await Minters.query()
    .first()
    .where({ email: credentials.email });

  if (!user) {
    throw new Error(ErrorCode.IncorrectEmailPassword);
  }

  const passwordMatch = await compareHash(credentials.password, user.password);

  if (!passwordMatch) {
    throw new Error(ErrorCode.IncorrectEmailPassword);
  }

  const userSessionCookieToken = signToken(
    { payload: { user: { id: user.id, isAdmin: user.is_admin } } },
    "1h"
  );

  cookies().set(
    authConfig.security.userSession.cookie.name,
    userSessionCookieToken,
    {
      expires: Date.now() + ms("1h"),
    }
  );

  redirect("/");
};

export const signOut = async () => {
  cookies().set(authConfig.security.userSession.cookie.name, "", {
    expires: Date.now(),
  });

  redirect(authConfig.pages.signIn);
};

const signToken = (payload, expiresIn) =>
  jsonwebtoken.sign(payload, authConfig.security.userSession.token.secret, {
    expiresIn,
  });

export const askForResetPassword = async (email) => {
  await getKnex();
  const user = await Minters.query().first().where({ email });

  if (!user) {
    return true;
  }

  const resetPasswordToken = await createResetPasswordToken();

  await user.setResetPasswordToken(resetPasswordToken);

  await user.sendResetPasswordEmail();

  return true;
};

export const resetPassword = async (password, token) => {
  await getKnex();
  const user = await checkResetPasswordToken(token);

  return await user.resetPassword(password, token);
};

export const checkResetPasswordToken = async (token) => {
  await getKnex();
  const user = await Minters.query()
    .first()
    .where({ reset_password_token: token });

  if (!user) {
    return false;
  }

  return user;
};
