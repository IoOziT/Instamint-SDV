import BaseModel from "./baseModel"
import Minter from "./minter"
import Nft from "./nft"

export default class Like extends BaseModel {
  static idColumn = ["minter_id", "nft_id"]
  static tableName = "likes"
  static relationMappings = {
    minter: {
      relation: BaseModel.BelongsToRelation,
      modelClass: Minter,
      join: {
        from: "likes.minter_id",
        to: "minters.id",
      },
    },
    nft: {
      relation: BaseModel.BelongsToRelation,
      modelClass: Nft,
      join: {
        from: "likes.nft_id",
        to: "nfts.id",
      },
    },
  }
}
