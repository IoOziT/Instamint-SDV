import BaseModel from "./baseModel"
import Mention from "./mention"
import Minter from "./minter"
import Report from "./report"

export default class Comment extends BaseModel {
  static tableName = "comments"
  static relationMappings = {
    parent: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Comment,
      join: {
        from: "comments.parent_id",
        to: "comments.id",
      },
    },
    directReplies: {
      relation: BaseModel.HasManyRelation,
      modelClass: Comment,
      join: {
        from: "comments.id",
        to: "comments.parent_id",
      },
    },
    threadOrigin: {
      relation: BaseModel.HasOneRelation,
      modelClass: Comment,
      join: {
        from: "comments.thread_id",
        to: "comments.id",
      },
    },
    sameThread: {
      relation: BaseModel.HasManyRelation,
      modelClass: Comment,
      join: {
        from: "comments.thread_id",
        to: "comments.thread_id",
      },
    },
    mentions: {
      relation: BaseModel.HasMany,
      modelClass: Mention,
      join: {
        from: "comments.id",
        to: "mentions.comment_id",
      },
    },
    commenter: {
      relation: BaseModel.BelongsToRelation,
      modelClass: Minter,
      join: {
        from: "comments.minter_id",
        to: "minters.id",
      },
    },
    receivedReports: {
      relation: BaseModel.HasManyRelation,
      modelClass: Report,
      join: {
        from: "comments.id",
        to: "reports.object_id",
        filter: (queryBuilder) => queryBuilder.where("type", "comment"),
      },
    },
  }

  async $afterInsert(context) {
    await super.$afterInsert(context)
    await this.$query(context.transaction).update({
      threadId: this.parentId ?? this.id,
    })
  }
}
