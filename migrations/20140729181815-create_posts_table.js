module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable('posts',{
    	id: {
    		type: DataTypes.INTEGER,
    		primaryKey: true,
    		autoIncrement: true
    	},
    	createdAt: DataTypes.DATE,
    	updatedAt: DataTypes.DATE,
    	title: DataTypes.STRING,
    	body: DataTypes.TEXT
    })
    	.complete(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable('posts')
    .complete(done);
  }
}
