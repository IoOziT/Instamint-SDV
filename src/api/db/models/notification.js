import BaseModel from "./baseModel"
import Comment from "./comment"
import Minter from "./minter"
import Follow from "./follow"
import Like from "./like"

export default class Notification extends BaseModel {
  static tableName = "notifications"
  static relationMappings = {
    minter: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Minter,
      join: {
        from: "notifications.minter_id",
        to: "minters.id",
      },
    },
    follow: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Follow,
      join: {
        from: "notifications.object_id",
        to: "followers.id",
        filter: (queryBuilder) => queryBuilder.whereIn("type", ["follow", "follow_request", "follow_request_accepted"]),
      },
    },
    comment: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Comment,
      join: {
        from: "notifications.object_id",
        to: "comments.id",
        filter: (queryBuilder) => queryBuilder.wherIn("type", ["reply", "comment", "mention"]),
      },
    },
    like: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Like,
      join: {
        from: "notifications.object_id",
        to: "likes.id",
      },
    },
  }
}
