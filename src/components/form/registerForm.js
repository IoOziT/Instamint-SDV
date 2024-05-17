"use client";
import { useState } from "react";

import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const RegisterForm = ({
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPublic, setIsPublic] = useState(false);

  const { t } = useTranslation();

  return (
    <form className="flex flex-col gap-2">
      <Input
        placeholder={t("email")}
        type="email"
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
      <div className="relative">
        <Input
          placeholder={t("confirm-password")}
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {showConfirmPassword ? (
          <FaEyeSlash
            className="absolute top-3 right-4 text-gray-400 cursor-pointer"
            onClick={() => setShowConfirmPassword(false)}
          />
        ) : (
          <FaEye
            className="absolute top-3 right-4 text-gray-400 cursor-pointer"
            onClick={() => setShowConfirmPassword(true)}
          />
        )}
      </div>
      <Input
        placeholder={t("phone-number")}
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <label className="flex items-center">
        <Checkbox
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="border rounded-md border-black"
        />
        <span className="ml-2">Public</span>
      </label>

      <Button className="bg-vibrantGreen"> {t("register-button")}</Button>
    </form>
  );
};

export default RegisterForm;
