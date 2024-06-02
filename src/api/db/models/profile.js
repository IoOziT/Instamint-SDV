import { ErrorCode } from "@/api/errors"
import BaseModel from "./baseModel"
import Comment from "./comment"
import Nft from "./nft"
import Report from "./report"

export default class Profile extends BaseModel {
  static tableName = "profiles"
  static relationMappings = {
    followers: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Profile,
      join: {
        from: "profiles.id",
        through: {
          from: "followers.followed_id",
          to: "followers.follower_id",
          filter: (queryBuilder) => queryBuilder.where("status", "accepted"),
        },
        to: "profiles.id",
      },
    },
    pendingReceivedFollowRequests: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Profile,
      join: {
        from: "profiles.id",
        through: {
          from: "followers.followed_id",
          to: "followers.follower_id",
          filter: (queryBuilder) => queryBuilder.where("status", "=", "pending"),
        },
        to: "profiles.id",
      },
    },
    ignoredReceivedFollowRequests: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Profile,
      join: {
        from: "profiles.id",
        through: {
          from: "followers.followed_id",
          to: "followers.follower_id",
          filter: (queryBuilder) => queryBuilder.where("status", "=", "ignored"),
        },
        to: "profiles.id",
      },
    },
    following: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Profile,
      join: {
        from: "profiles.id",
        through: {
          from: "followers.follower_id",
          to: "followers.followed_id",
          filter: (queryBuilder) => queryBuilder.where("status", "accepted"),
        },
        to: "profiles.id",
      },
    },
    pendingSentFollowRequests: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Profile,
      join: {
        from: "profiles.id",
        through: {
          from: "followers.follower_id",
          to: "followers.followed_id",
          filter: (queryBuilder) => queryBuilder.where("status", "!=", "accepted"),
        },
        to: "profiles.id",
      },
    },
    mentions: {
      relation: BaseModel.HasManyRelation,
      modelClass: Comment,
      join: {
        from: "profiles.id",
        through: {
          from: "mentions.minter_id",
          to: "mentions.comment_id",
        },
        to: "comments.id",
      },
    },
    nfts: {
      relation: BaseModel,
      modelClass: Nft,
      join: {
        from: "profiles.id",
        to: "nfts.profile_id",
      },
    },
    receivedReports: {
      relation: BaseModel.HasManyRelation,
      modelClass: Report,
      join: {
        from: "profiles.id",
        to: "reports.object_id",
        filter: (queryBuilder) => queryBuilder.where("type", "profile"),
      },
    },
  }

  /**
   *
   * @param {import("objection").QueryContext} context
   */
  async $beforeInsert(context) {
    const usernameMatchesCount = await Profile.query(context.transaction).findOne({
      username: this.username,
    })

    if (usernameMatchesCount > 0) {
      throw new Error(ErrorCode.UsernameAlreadyExists)
    }
  }
}
