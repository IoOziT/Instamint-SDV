"use client";

import { resetPassword } from "@/api/auth";
import { ErrorCode } from "@/api/errors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { registerMintersSchema } from "@/schema/minters.schema";
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
					<h2 className="text-2xl font-bold">Reset Password</h2>
					<p className="text-gray-500 dark:text-gray-400">
						Enter your new password.
					</p>
				</div>
				{isLoading ? (
					<p className="text-center">Loading...</p>
				) : isSuccess ? (
					<p className="text-green-500">
						Password reset successfully. Redirecting to login page...
					</p>
				) : (
					<form
						className="space-y-4"
						onSubmit={handleSubmit}
						id="resetPasswordForm"
					>
						<div>
							<Label htmlFor="password">Password</Label>
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
