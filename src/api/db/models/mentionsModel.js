import BaseModel from "@/api/db/models/baseModel.js";

class Mentions extends BaseModel {
	static tableName = "mentions";
}

export default Mentions;
