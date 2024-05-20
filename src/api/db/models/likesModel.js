import BaseModel from "@/api/db/models/baseModel.js";

class Likes extends BaseModel {
	static tableName = "likes";
}

export default Likes;
