"use client";

import ImageForm from "@/components/form/imageForm";
import LoginForm from "@/components/form/loginForm";
import ResetPasswordModal from "@/components/modals/resetPasswordModal";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
	const [showPassword, setShowPassword] = useState(false);
	const { t } = useTranslation();

	return (
		<div className="flex justify-center items-center w-full flex-1">
			<div className="flex items-center gap-32 lg:w-auto sm:w-4/5">
				<ImageForm
					alt="Logo Instamint"
					src="/assets/logo-instamint.png"
					width={250}
					height={250}
				/>
				<div className="hidden lg:block border-l-2 border-black h-96 mx-8"></div>
				<div className="flex flex-col gap-2 w-full lg:w-80 relative">
					<h1 className="flex justify-center text-xl underline font-bold">
						{t("login")}
					</h1>
					<LoginForm
						showPassword={showPassword}
						setShowPassword={setShowPassword}
					/>
					<ResetPasswordModal />

					<Link href={"/register"}>{t("no-account-register")}</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
