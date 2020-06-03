var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clouds_Rest_arete.jpg/1200px-Clouds_Rest_arete.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		name: "Desert Mesa",
		image: "https://i.pinimg.com/originals/fa/17/82/fa1782af0ecc34b7849c8a24f8385c8f.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		name: "Canyon Floor",
		image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Canyon_de_Chelly_from_the_canyon_floor.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
]

function seedDB() {
	//Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("Removed campgrounds!");
		Comment.remove({}, function(err){
			// if(err){
			// 	console.log(err);
			// }
			// console.log("Removed comments!");
			// //Add a few campgrounds
			// data.forEach(function(seed){
			// 	Campground.create(seed, function(err, campground){
			// 		if(err){
			// 			console.log(err);
			// 		}
			// 		else{
			// 			console.log("Added campground");
			// 			//Create a comment
			// 			Comment.create(
			// 			{
			// 				text: "This place is great, but I wish there was internet",
			// 				author: "Homer"
			// 			}, function(err, comment){
			// 				if(err){
			// 					console.log(err);
			// 				}
			// 				else{
			// 					campground.comments.push(comment);
			// 					campground.save();
			// 					console.log("Created new comment");
			// 				}
			// 			});
			// 		}
			// 	});
			// });
		});
	});
	//add a few comments
}

module.exports = seedDB;