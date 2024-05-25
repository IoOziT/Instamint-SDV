exports.seed = function (knex) {
    return knex("notifications")
        .del()
        .then(function () {
            return knex("notifications").insert([
                {
                    minter_id: 1,
                    type: "Nouvelle notification",
                    object_id: 123,
                },
                {
                    minter_id: 1,
                    type: "Notification importante",
                    object_id: 456,
                },

            ]);
        });
};
