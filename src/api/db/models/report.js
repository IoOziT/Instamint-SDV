import BaseModel from "./baseModel"
import Minter from "./minter"

export default class Report extends BaseModel {
  static tableName = "nfts"
  static relationMappings = {
    minter: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Minter,
      join: {
        from: "reports.minter_id",
        to: "minters.id",
      },
    },
    nft: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Nft,
      join: {
        from: "reports.object_id",
        to: "nfts.id",
        filter: (queryBuilder) => queryBuilder.where("type", "nft"),
      },
    },
    comment: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Comment,
      join: {
        from: "reports.object_id",
        to: "comment.id",
        filter: (queryBuilder) => queryBuilder.where("type", "comment"),
      },
    },
    profile: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: Nft,
      join: {
        from: "reports.object_id",
        to: "profiles.id",
        filter: (queryBuilder) => queryBuilder.where("type", "profile"),
      },
    },
  }
}
