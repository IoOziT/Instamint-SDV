"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import { signIn } from "@/api/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const LoginForm = ({ showPassword, setShowPassword }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState();
	const { t } = useTranslation();

	const handleSubmit = e => {
		setError(undefined);
		e.preventDefault();
		signIn({ email, password }).catch(error => {
			setError(t(`error-message.${error.message}`));
		});
	};
	return (
		<form
			className="flex flex-col gap-2"
			onSubmit={handleSubmit}
			id="loginForm"
		>
			<Input
				placeholder={t("email")}
				value={email}
				onChange={e => setEmail(e.target.value)}
				required
				form="loginForm"
			/>
			<div className="relative">
				<Input
					placeholder={t("password")}
					type={showPassword ? "text" : "password"}
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
					form="loginForm"
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

			{error && <p className="text-red-500 first-letter:capitalize">{error}</p>}
			<Button className="bg-vibrantGreen" form="loginForm">
				{" "}
				{t("login-button")}
			</Button>
		</form>
	);
};

export default LoginForm;
