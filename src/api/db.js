"use server";

import knex from "knex";
import config from "../../knexfile";
import BaseModel from "./db/models/BaseModel";

let cached = global.pg;
if (!cached) cached = global.pg = {};

export async function getKnex() {
	if (!cached.instance) cached.instance = knex(config);

	BaseModel.knex(cached.instance);

	return cached.instance;
}
