import BaseModel from "./baseModel"
import Teabag from "./teabag"
import Profile from "./profile"
import Comment from "./comment"
import Notification from "./notification"
import Report from "./report"
import Like from "./like"

import { hashPassword } from "@/api/hash"

export default class Minter extends Profile {
  static tableName = "minters"
  static relationMappings = {
    ...Profile.relationMappings,
    memberships: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Teabag,
      join: {
        from: "minters.id",
        through: {
          from: "teabag_memberships.minter_id",
          to: "teabag_memberships.teabag_id",
        },
        to: "teabags.id",
      },
    },
    comments: {
      relation: BaseModel.HasManyRelation,
      modelClass: Comment,
      join: {
        from: "minters.id",
        to: "comments.minter_id",
      },
    },
    notifications: {
      relation: BaseModel.HasManyRelation,
      modelClass: Notification,
      join: {
        from: "minters.id",
        to: "notifications.minter_id",
      },
    },
    madeReports: {
      relation: BaseModel.HasManyRelation,
      modelClass: Report,
      join: {
        from: "minters.id",
        to: "reports.minter_id",
      },
    },
    likes: {
      relation: BaseModel.HasManyRelation,
      modelClass: Like,
      join: {
        from: "minters.id",
        to: "likes.minter_id",
      },
    },
  }

  async setResetPasswordToken(token) {
    this["reset_password_token"] = token
    await this.$query().patch() // Use patch to update the record with the new token
  }

  async clearResetPasswordToken() {
    this["reset_password_token"] = null
    await this.$query().patch()
  }

  async sendResetPasswordEmail() {
    //TODO:  Send email with the token ( WHEN IMPLEMENTING EMAIL FUNCTIONALITY )
  }

  async resetPassword(newPassword, resetPasswordToken) {
    if (this["reset_password_token"] !== resetPasswordToken) {
      throw new Error("Invalid reset password token")
    }

    this.password = await hashPassword(newPassword)
    await this.clearResetPasswordToken()
    await this.$query().patch()
    return true
  }
}
