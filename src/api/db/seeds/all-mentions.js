exports.seed = function (knex) {
    return knex("mentions")
        .del()
        .then(function () {
            return knex("mentions").insert([
                {
                    comment_id: 1,
                    minter_id: 1,
                },
                {
                    comment_id: 2,
                    minter_id: 1,
                },

            ]);
        });
};
