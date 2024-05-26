import BaseModel from "@/api/db/models/baseModel.js";
import { hashPassword } from "@/api/hash";

class Minters extends BaseModel {
	static tableName = "minters";

	async setResetPasswordToken(token) {
		this["reset_password_token"] = token;
		await this.$query().patch(); // Use patch to update the record with the new token
	}

	async clearResetPasswordToken() {
		this["reset_password_token"] = null;
		await this.$query().patch();
	}

	async sendResetPasswordEmail() {
		//TODO:  Send email with the token ( WHEN IMPLEMENTING EMAIL FUNCTIONALITY )
	}

	async resetPassword(newPassword, resetPasswordToken) {
		if (this["reset_password_token"] !== resetPasswordToken) {
			throw new Error("Invalid reset password token");
		}
		this.password = await hashPassword(newPassword);
		await this.clearResetPasswordToken();
		await this.$query().patch();
		return true;
	}
}

export default Minters;
