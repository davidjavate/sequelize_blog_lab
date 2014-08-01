var express = require('express'),
	ejs =	require('ejs'),
	bodyParser =require('body-parser'),
	db = require('./models/index.js'),
	app = express();

	app.set('view engine', 'ejs');
	app.set('views', __dirname + '/views');

	app.use(bodyParser.urlencoded());

	app.get('/blogs', function(req,res) {

		db.post.findAll().success(function(posts){
			res.render('index',{posts:posts})
		})
	})

	app.get('/newblog',function(req,res){
			res.render('index');
	})

	// app.get('blogs/:authorid/newblog/:id', (req,res) {
	// 	// db.post.findAll(req.params.authorid)
	// 	// need to find in DB, all blogs with author id of req.params.authorid
	// 	// SELECT * FROM blogs WHERE authorid = req.params.authorid
	// 	// find a way to make this work in Sequelize
	// 	// db.post.findAll...add a where authorId : req.params.authorid
	// 	// because node drives us crazy, we need a .success(data) after
	// 	// render a page with data
	// })


	app.listen(3000, function(){
  console.log("get this party started on port 3000");  
});
