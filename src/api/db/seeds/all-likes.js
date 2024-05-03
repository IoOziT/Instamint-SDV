exports.seed = function (knex) {
    return knex("likes")
        .del()
        .then(function () {
            return knex("likes").insert([
                {
                    type: "Like",
                    minter_id: 1,
                    time: new Date(),
                },
                {
                    type: "Like",
                    minter_id: 1,
                    time: new Date(),
                },

            ]);
        });
};
