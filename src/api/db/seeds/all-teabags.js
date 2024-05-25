exports.seed = function (knex) {
    return knex("teabags")
        .del()
        .then(function () {
            return knex("teabags").insert([
                {
                    type: "Thé vert",
                },
                {
                    type: "Thé noir",
                }

            ]);
        });
};
