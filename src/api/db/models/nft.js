import BaseModel from "./baseModel"
import Profile from "./profile"
import Comment from "./comment"

export default class Nft extends BaseModel {
  static tableName = "nfts"
  static relationMappings = {
    owner: {
      relation: BaseModel.BelongsToRelation,
      modelClass: Profile,
      join: {
        from: "nfts.owner_id",
        to: "profiles.id",
      },
    },
    comments: {
      relation: BaseModel.HasManyRelation,
      modelClass: Comment,
      join: {
        from: "nfts.id",
        to: "comments.nft_id",
      },
    },
    reactions: {
      relation: BaseModel.HasManyRelation,
      modelClass: Like,
      join: {
        from: "nfts.id",
        to: "likes.nft_id",
      },
    },
    hashtags: {
      relation: BaseModel,
      modelClass: Hashtag,
      join: {
        from: "nfts.id",
        through: {
          from: "nfts_hashtags.nft_id",
          to: "nfts_hashtags.hashtag_id",
        },
        to: "hashtags.id",
      },
    },
    receivedReports: {
      relation: BaseModel.HasManyRelation,
      modelClass: Report,
      join: {
        from: "nfts.id",
        to: "reports.object_id",
        filter: (queryBuilder) => queryBuilder.where("type", "nft"),
      },
    },
  }
}
