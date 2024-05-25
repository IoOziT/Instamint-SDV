module.exports.up = async knex => {
	await knex.schema.createTable("comments", table => {
		table.increments("id").primary();
		table.integer("nft_id").references("id").inTable("nfts").notNullable();
		table
			.integer("minter_id")
			.notNullable()
			.references("id")
			.inTable("minters");
		table.string("content", 300).notNullable();
		table.integer("parent_id").references("id").inTable("comments");
		table.integer("thread_id").references("id").inTable("comments");
		table.timestamp("time").notNullable().defaultTo(knex.fn.now());
		table.timestamps(true, true);
	});
};

module.exports.down = async knex => {
	await knex.schema.dropTable("comments");
};
