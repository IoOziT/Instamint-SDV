import BaseModel from "@/api/db/models/BaseModel.js";

class CommentsModel extends BaseModel {
    static tableName = "comments";
}

export default CommentsModel;
