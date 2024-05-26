import { checkResetPasswordToken } from "@/api/auth";
import ResetPasswordForm, {
	InvalidResetPasswordToken,
} from "@/components/form/resetPasswordForm";

export default async function ResetPassword({ params: { token } }) {
	const isResetPasswordValid = await checkResetPasswordToken(token);

	if (!isResetPasswordValid) {
		return <InvalidResetPasswordToken />;
	}

	return <ResetPasswordForm />;
}
