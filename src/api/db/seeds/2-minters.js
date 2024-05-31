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
          profile_id: 1,
          is_public: true,
        },
        {
          type: "Utilisateur",
          email: "test@gmail.com",
          phone: "111-222-3333",
          password: "motdepasse2",
          profile_id: 2,
          is_public: true,
        },
      ]);
    });
};
