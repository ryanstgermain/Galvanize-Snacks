exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', (review) => {
        review.increments();
        review.string('title');
        review.string('text');
        review.integer('rating');
        review.integer('snack_id');
        review.integer('user_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('reviews')
};
