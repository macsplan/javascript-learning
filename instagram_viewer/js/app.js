$(document).ready(function(){
	//enable listeners
  loadImages();

	$('#tag-search').submit(function(event){
		event.preventDefault();
		instagram_api($(this));
	})
	//load default page
	/*PLACE FUNCTION HERE THAT LOADS PICTURES ON PAGE LOAD */
	function loadImages() {
    ajax_default();
	}
});

//global variable
var animation ='';

function instagram_api(frm){
	var search = frm.find('input[name="tag_search"]').val();
	console.log(search);
	ajax_call(search);
}

var scroll_images = function(){
	$('#image-container').animate({'top':'-=1'},100,function(){
	});
}


function images_response(data){
	console.log(data);
	images = data.data;
	$('#instagram-pics').html('');
	for(image in images){
		var url = images[image].images.standard_resolution.url;
    var li = $("<li>").addClass("blur");
    li.css({ "background-size": "cover", "background-image": "url("+url+")", "background-position" : "center center" });
		$('#instagram-pics').append(li);
	}
	$('#image-container').css('top','0px');
	clearInterval(animation);
	animation=setInterval(scroll_images, 100);
}



function ajax_default(data) {
	$.ajax({
		url: "https://api.instagram.com/v1/tags/nofilter/media/recent?client_id=61f8b631abd34732a3bcd8c73d0d73a9",
		type:'GET',
		dataType:'jsonp',
		success:function(data){
			console.log("success");
			images_response(data);
		},
		error:function(data){
			console.log("fail");
			console.log(data);
		}
	});

}


function ajax_call(tag){
	$.ajax({
		url: "https://api.instagram.com/v1/tags/"+encodeURI(tag)+"/media/recent?client_id=61f8b631abd34732a3bcd8c73d0d73a9",
		type:'GET',
		dataType:'jsonp',
		success:function(data){
			/* PLACE FUNCTION HERE */
			console.log("success");
			// console.log(data);
			images_response(data);
			// var items = data.data;
			// for (item in items) {
			// 	console.log(items[item].images.standard_resolution.url);
			// }
			//data.data[0..20].images.standard_resolution.url

		},
		error:function(data){
			console.log("fail");
			console.log(data);
		}
	});

}
