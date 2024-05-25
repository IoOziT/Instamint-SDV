"use client";
import { useState } from "react";

import { ErrorCode } from "@/api/errors";
import { registerMinters } from "@/api/minters";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { z } from "zod";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";

const registerMintersSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8),
	phoneNumber: z.string().min(10),
	isPublic: z.boolean(),
});

const RegisterForm = ({ showPassword, setShowPassword }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isPublic, setIsPublic] = useState(false);
	const [error, setError] = useState(null);

	const { t } = useTranslation();

	const handleSubmit = e => {
		e.preventDefault();

		const payload = { email, password, phoneNumber, isPublic };
		const result = registerMintersSchema.safeParse(payload);
		if (!result.success) {
			setError(t(`error-message.${ErrorCode.InvalidRegisterPayload}`));
			return;
		}

		registerMinters({ email, password, isPublic, phoneNumber }).catch(error => {
			setError(t(`error-message.${error.message}`));
		});
	};

	return (
		<form className="flex flex-col gap-2" onSubmit={handleSubmit}>
			<Input
				placeholder={t("email")}
				type="email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
			/>
			<div className="relative">
				<Input
					placeholder={t("password")}
					type={showPassword ? "text" : "password"}
					value={password}
					onChange={e => setPassword(e.target.value)}
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

			<Input
				placeholder={t("phone-number")}
				type="text"
				value={phoneNumber}
				onChange={e => setPhoneNumber(e.target.value)}
			/>

			<label className="flex items-center">
				<Checkbox
					checked={isPublic}
					onChange={e => setIsPublic(e.target.checked)}
					className="border rounded-md border-black"
				/>
				<span className="ml-2">Public</span>
			</label>

			{error && <p className="text-red-500">{error}</p>}
			<Button className="bg-vibrantGreen"> {t("register-button")}</Button>
		</form>
	);
};

export default RegisterForm;
