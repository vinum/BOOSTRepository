var SlideShareSearch = {
	search: function(q, page, callback){
		var query = "use 'https://dl.dropboxusercontent.com/u/2827729/slideshare.search.xml' as mytable; select * from mytable where q='" + q +"' and page='" + page + "' and api_key='KHyDu2OL' and shared_secret='EfxBfoCM' and items_per_page='25';";
		query = encodeURIComponent(query);
		$.get( "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json").done(function( data ) {
			callback(data.query.results);
		});
	},

	getSlideshowDetails: function(id, callback){
		var query = "use 'https://dl.dropboxusercontent.com/u/2827729/slideshare.getSlideshow.xml' as mytable; select * from mytable where slideshow_id='" + id +"' and api_key='KHyDu2OL' and shared_secret='EfxBfoCM';";
		$.get( "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json").done(function( data ) {
			callback(data.query.results);
		});
	}
}