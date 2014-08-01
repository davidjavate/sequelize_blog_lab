module.exports = {
  up: function(migration, DataTypes, done) {
   	migration.createTable('authors', {
   		id: {
   			type: DataTypes.INTEGER,
   			primaryKey: true,
   			autoIncrement: true
   		},
   		createdAt: DataTypes.DATE,
   		updatedAt: DataTypes.DATE,
   		firstname: DataTypes.STRING,
   		lastname: DataTypes.STRING,
   	})
   	.complete(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('authors')
    .complete(done);
  }
}
