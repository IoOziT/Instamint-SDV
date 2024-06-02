import BaseModel from "./baseModel"
import Nft from "./nft"

export default class Hashtag extends BaseModel {
  static tableName = "hashtags"
  static relationMappings = {
    nfts: {
      relation: BaseModel.ManyToManyRelation,
      modelClass: Nft,
      join: {
        from: "hashtags.id",
        through: {
          from: "nfts_hashtags.hashtag_id",
          to: "nfts_hashtags.nft_id",
        },
        to: "nfts.id",
      },
    },
  }
}
