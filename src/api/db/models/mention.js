import BaseModel from "./baseModel"
import Comment from "./comment"
import Minter from "./minter"

export default class Mention extends BaseModel {
  static tableName = "mentions"
  static relationMappings = {
    minter: {
      relation: BaseModel.BelongsToRelation,
      modelClass: Minter,
      join: {
        from: "mentions.minter_id",
        to: "minters.id",
      },
    },
    comment: {
      relation: BaseModel.BelongsToRelation,
      modelClass: Comment,
      join: {
        from: "mentions.comment_id",
        to: "comments.id",
      },
    },
  }
}
