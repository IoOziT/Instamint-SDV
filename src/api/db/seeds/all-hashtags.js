exports.seed = function (knex) {
    return knex("hashtags")
        .del()
        .then(function () {
            return knex("hashtags").insert([
                {
                    name: "Nature",
                },
                {
                    name: "Art",
                },

            ]);
        });
};
