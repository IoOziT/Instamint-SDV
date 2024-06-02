import BaseModel from "./baseModel"
import Profile from "./profile"
import Minter from "./minter"

export default class Teabag extends Profile {
  static tableName = "teabags"
  static relationMappings = {
    ...Profile.relationMappings,
    members: {
      relation: BaseModel.HasManyRelation,
      modelClass: Minter,
      join: {
        from: "teabags.id",
        through: {
          from: "teabag_memberships.teabag_id",
          to: "teabag_memberships.minter_id",
        },
        to: "minters.id",
      },
    },
  }
}
