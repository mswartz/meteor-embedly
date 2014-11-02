//This returns a JSON object with all sorts of goodies about the URL
//EXTRACT Docs: http://embed.ly/docs/api/extract/endpoints/1/extract
//EMBED Docs: http://embed.ly/docs/api/embed/endpoints/1/oembed

//Currently only supports Extract and Embed, no more params yet.
//Thanks to Jeff Vlahos (@jvlahos), Andrew Pellett (@anrope) and Embedly

Embedly = {
	extract: function(url) {
		var eSuccess = false;

		if(Meteor.settings.public.embedlyApiKey){
			var embedlyKey = Meteor.settings.public.embedlyApiKey;
		} else {
			var embedlyKey = Meteor.settings.embedlyApiKey;
		}

		var embedlyURL = "http://api.embed.ly/1/extract?key=" + embedlyKey + "&url=" + encodeURIComponent(url);
		$.ajax({
			type: 'GET',
			url: embedlyURL,
			dataType: 'json',
			data: {},
			async: false,
			error: function(xhr) {
				console.log('Embed.ly failed to return useful data about this particular URL.', xhr);
				eSuccess = false;
			},
			success: function(data) {
				embedly = data;
				console.log('Embed.ly got the goods!', embedly);
				eSuccess = true;
			}
		});
		if (eSuccess) {
			return embedly;
		} else {
			return false;
		}
	},
	embed: function(url) {
		var eSuccess = false;

		if(Meteor.settings.public.embedlyApiKey){
			var embedlyKey = Meteor.settings.public.embedlyApiKey;
		} else {
			var embedlyKey = Meteor.settings.embedlyApiKey;
		}

		var embedlyURL = "http://api.embed.ly/1/oembed?key=" + embedlyKey + "&url=" + encodeURIComponent(url);
		$.ajax({
			type: 'GET',
			url: embedlyURL,
			dataType: 'json',
			data: {},
			async: false,
			error: function(xhr) {
				console.log('Embed.ly failed to return useful data about this particular URL.', xhr);
				eSuccess = false;
			},
			success: function(data) {
				embedly = data;
				console.log('Embed.ly got the goods!', embedly);
				eSuccess = true;
			}
		});
		if (eSuccess) {
			return embedly;
		} else {
			return false;
		}
	}
}
