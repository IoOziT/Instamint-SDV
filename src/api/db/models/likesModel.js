import BaseModel from "@/api/db/models/BaseModel.js";

class Likes extends BaseModel {
	static tableName = "likes";
}

export default Likes;
