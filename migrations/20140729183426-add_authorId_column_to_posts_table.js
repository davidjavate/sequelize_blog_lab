module.exports = {
  up: function(migration, DataTypes, done) {
    migration.addColumn(
    	'posts',
    	'authorId',
    	{
    		type: DataTypes.INTEGER,
    		foreignKey: true
    	})
    .complete(done)
  },
  down: function(migration, DataTypes, done) {
    migration.removeColumn('posts','authorId')
    .complete(done)
  }
}
