import BaseModel from "./baseModel"
import Profile from "./profile"

export default class Follow extends BaseModel {
  static tableName = "followers"
  static relationMappings = {
    follower: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Profile,
      join: {
        from: "followers.follower_id",
        to: "profiles.id",
      }
    },
    followed: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Profile,
      join: {
        from: "followers.followed_id",
        to: "profiles.id",
      }
    },
  }
}
