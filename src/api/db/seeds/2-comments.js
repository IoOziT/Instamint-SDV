exports.seed = function (knex) {
	return knex("comments")
		.del()
		.then(function () {
			return knex("comments").insert([
				{
					minter_id: 1,
					content: "Mon premier commentaire",
					time: new Date(),
				},
				{
					minter_id: 1,
					content: "Mon deuxième commentaire",
					parent_id: 1,
					thread_id: 1,
					time: new Date(),
				},
			]);
		});
};
