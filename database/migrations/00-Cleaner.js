const cleaner = require('knex-cleaner');

exports.up = function(knex, Promise) {
	return knex.raw(`
        DROP TABLE IF EXISTS
        responses,
        graphTable,
        clients,
        sessions,
        users,
        categories,
        workflows,
        settings CASCADE;`);
};
exports.down = function(knex, Promise) {};
