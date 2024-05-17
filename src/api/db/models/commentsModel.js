import BaseModel from "@/api/db/models/BaseModel.js";

class Comments extends BaseModel {
	static tableName = "comments";
}

export default Comments;
