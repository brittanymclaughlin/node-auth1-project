
exports.up = async function(knex) {
  await knex.schema.createTable("users", (table)=>{
      table
        .integer("id")
        .notNull()
        .primary()
        .unique()
      table
        .text("username")
        .notNull()
        .unique()
      table
        .text("password")
        .notNull()
    
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
};
