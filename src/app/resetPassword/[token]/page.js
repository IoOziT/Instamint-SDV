import { checkResetPasswordToken } from "@/api/auth";
import ResetPasswordForm from "@/components/form/resetPasswordForm";

export default async function ResetPassword({ params: { token } }) {
	const isResetPasswordValid = await checkResetPasswordToken(token);

	if (!isResetPasswordValid) {
		return <p>Invalid token</p>;
	}

	return <ResetPasswordForm />;
}
