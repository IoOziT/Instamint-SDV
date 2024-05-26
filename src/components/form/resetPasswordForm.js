"use client";

import { resetPassword } from "@/api/auth";
import { ErrorCode } from "@/api/errors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerMintersSchema } from "@/schema/minters.schema";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ResetPasswordForm() {
	const { t } = useTranslation();
	const { token } = useParams();
	const [password, setPassword] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [isSuccess, setSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState(undefined);

	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
		setErrorMessage(undefined);
		const parsed = registerMintersSchema
			.pick({ password: true })
			.safeParse({ password });
		if (!parsed.success) {
			setErrorMessage(t(ErrorCode.InvalidPasswordFormat));
			setLoading(false);
			return;
		}
		resetPassword(password, token)
			.then(() => {
				setLoading(false);
				setSuccess(true);
				setTimeout(() => {
					router.push("/login");
				}, 2000);
			})
			.catch(err => {
				setLoading(false);
				setErrorMessage(err.message);
			});
	};

	return (
		<div className="w-full rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
			<div className="space-y-4">
				<div className="text-center">
					<h2 className="text-2xl font-bold">{t("reset-password")}</h2>
					<p className="text-gray-500 dark:text-gray-400">
						{t("enter-new-password")}
					</p>
				</div>
				{isLoading ? (
					<p className="text-center">{t("loading")}</p>
				) : isSuccess ? (
					<p className="text-green-500">{t("password-reset-success")}</p>
				) : (
					<form
						className="space-y-4"
						onSubmit={handleSubmit}
						id="resetPasswordForm"
					>
						<div>
							<Label htmlFor="password">{t("password")}</Label>
							<Input
								id="password"
								placeholder="********"
								required
								type="password"
								onChange={e => setPassword(e.target.value)}
								form="resetPasswordForm"
							/>
						</div>
						{errorMessage && (
							<p className="text-red-500 text-sm">
								{t(`error-message.${errorMessage}`)}
							</p>
						)}
						<Button className="w-full" type="submit" form="resetPasswordForm">
							{t("reset-password")}
						</Button>
					</form>
				)}
			</div>
		</div>
	);
}

export function InvalidResetPasswordToken() {
	const { t } = useTranslation();
	return (
		<div className="mx-auto max-w-md space-y-6 py-12">
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold">
					{t("reset-password-token-invalid.title")}
				</h1>
				<p className="text-gray-500 dark:text-gray-400">
					{t("reset-password-token-invalid.description")}
				</p>
			</div>
			<div className="flex justify-center">
				<Link
					className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
					href="/login"
				>
					Return to Login
				</Link>
			</div>
		</div>
	);
}
