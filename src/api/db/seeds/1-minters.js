exports.seed = function (knex) {
    return knex("minters")
        .del()
        .then(function () {
            return knex("minters").insert([
                {
                    type: "Administrateur",
                    email: "admin@example.com",
                    phone: "123-456-7890",
                    password: "motdepasse",
                    is_public: true,
                },

            ]);
        });
};
