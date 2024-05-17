"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = ({ showPassword, setShowPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

  return (
    <form className="flex flex-col gap-2">
      <Input
        placeholder={t("email")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="relative">
        <Input
          placeholder={t("password")}
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {showPassword ? (
          <FaEyeSlash
            className="absolute top-3 right-4 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <FaEye
            className="absolute top-3 right-4 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>

      <Button className="bg-vibrantGreen"> {t("login-button")}</Button>
    </form>
  );
};

export default LoginForm;
