import { Model, snakeCaseMappers } from "objection"

export default class BaseModel extends Model {
  static columnNameMappers = snakeCaseMappers()
  // Common properties
}
