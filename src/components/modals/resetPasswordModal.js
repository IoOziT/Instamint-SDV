"use client";

import { askForResetPassword } from "@/api/auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function ResetPasswordModal() {
	const { t } = useTranslation();

	const [email, setEmail] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [isSuccess, setSuccess] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setLoading(true);
		askForResetPassword(email).then(() => {
			setLoading(false);
			setSuccess(true);
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<p className="text-right cursor-pointer py-1">{t("reset-password")}</p>
			</DialogTrigger>
			<DialogContent className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
				<div className="space-y-4">
					<div className="text-center">
						<h2 className="text-2xl font-bold">Reset Password</h2>
						<p className="text-gray-500 dark:text-gray-400">
							Enter your email to reset your password.
						</p>
					</div>
					{isLoading ? (
						<p className="text-center">Loading...</p>
					) : isSuccess ? (
						<p className="text-green-500">
							An email has been sent to {email}. Check your inbox to reset your
							password.
						</p>
					) : (
						<form
							className="space-y-4"
							onSubmit={handleSubmit}
							id="resetPasswordForm"
						>
							<div>
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									placeholder="m@example.com"
									required
									type="email"
									onChange={e => setEmail(e.target.value)}
									form="resetPasswordForm"
								/>
							</div>
							<Button className="w-full" type="submit" form="resetPasswordForm">
								{t("reset-password")}
							</Button>
						</form>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}
