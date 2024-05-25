exports.seed = function (knex) {
    return knex("reports")
        .del()
        .then(function () {
            return knex("reports").insert([
                {
                    minter_id: 1,
                    type: "Nouveau rapport",
                    object_id: 123,
                },
                {
                    minter_id: 1,
                    type: "Rapport important",
                    object_id: 456,
                },

            ]);
        });
};
