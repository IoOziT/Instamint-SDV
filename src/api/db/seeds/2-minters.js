const { mintersTypeEnum } = require("../enums/minters");

exports.seed = function (knex) {
  return knex("minters")
    .del()
    .then(function () {
      return knex("minters").insert([
        {
          type: mintersTypeEnum.MINTERS,
          email: "admin@example.com",
          phone: "123-456-7890",
          password: "motdepasse",

          is_public: true,
          is_admin: true,
        },
        {
          type: mintersTypeEnum.MINTERS,
          email: "test@example.com",
          phone: "123-456-0000",
          password: "motdepasse2",
          is_public: true,
          is_admin: false,
        },
      ]);
    });
};
