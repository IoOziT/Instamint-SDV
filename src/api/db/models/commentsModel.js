import BaseModel from "@/api/db/models/baseModel.js";

class Comments extends BaseModel {
	static tableName = "comments";
}

export default Comments;
