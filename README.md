Embedly API calls for Meteor
==============

A simple Embedly package for Meteor.js. This lets you use the Extract and Embed APIs from Embedly to retrieve metadata and other good stuff from a URL. Disclaimer: this is my first Meteor package, so there are undoubtedly many better ways of doing things. Open to suggestions and would love help!

### Setup
In order to use this, you'll need an Embedly API Key and set it in your Meteor.settings file.

#### 1. Install the package
Just run `meteor add mswartz:embedly` 

#### 2. Get an API Key:
here: http://embed.ly/api

#### 3. Fill in Meteor.settings
Create a `settings.json` file in your app with the following structure:

```
{
	"public": {
		"embedlyApiKey": "b4853d518e7847378a1fb018fba95878"
	}
}
```

Or like this if you don't want to use Embedly from the client:

```
{
	"public": {
		"embedlyApiKey": "b4853d518e7847378a1fb018fba95878"
	}
}
```

Then run your app and initialize the settings with this command: `meteor --settings settings.json` if that's what your json file is called and that's where it lives, in this example at the root. 

### Usage
Once the package is installed and you've entered your API key, you're ready to roll. Call the Extract function with `Embedly.extract(url)` and call the Embed function with `Embedly.embed(url)`.  This will return JSON with all kinds of data about the link you pass it. 

Docs are here:
- [Extract](http://embed.ly/docs/api/extract/endpoints/1/extract)   
- [Embed](http://embed.ly/docs/api/embed/endpoints/1/oembed)


### ToDos:
I'll explore adding more parameter granularity to the calls, and maybe implement the Display API. Or if anyone wants to help add that stuff, that'd be great!

### Testing:
I wasn't sure how to write tests for this without baking in an API key. Suggestions?

### Thanks
To Jeff Vlahos (@jvlahos) for writing the original Embedly API calls that I swiped form his Courier project. 





