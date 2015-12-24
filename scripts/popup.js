(function(){
	var sites = [
	{
		"name" : "Aaj Tak",
		"siteUrl" : "http://aajtak.intoday.in/"
	},
	{
		"name" : "Amar Ujala",
		"siteUrl" : "http://www.amarujala.com/"
	},
	{
		"name" : "Anandabazar Patrika",
		"siteUrl" : "http://www.anandabazar.com/"
	},
	{
		"name" : "BBC",
		"siteUrl" : "http://www.bbc.com/"
	},
	{
		"name" : "BBC Hindi",
		"siteUrl" : "http://www.bbc.com/hindi"
	},
	{
		"name" : "BollyWood Hungama",
		"siteUrl" : "http://www.bollywoodhungama.com/"
	},
	{
		"name" : "Business Standard",
		"siteUrl" : "http://www.business-standard.com/"
	},
	{
		"name" : "Cricbuzz",
		"siteUrl" : "http://www.cricbuzz.com/"
	},
	{
		"name" : "Dainik Bhaskar",
		"siteUrl" : "http://www.bhaskar.com/"
	},
	{
		"name" : "Dainik Jagran",
		"siteUrl" : "http://www.jagran.com/"
	},
	{
		"name" : "Deccan Chronicle",
		"siteUrl" : "http://www.deccanchronicle.com/"
	},
	{
		"name" : "Deccan Herald",
		"siteUrl" : "http://www.deccanherald.com/"
	},
	{
		"name" : "First Post",
		"siteUrl" : "http://www.firstpost.com/"
	},
	{
		"name" : "Google News",
		"siteUrl" : "https://news.google.co.in/"
	},
	{
		"name" : "Hindustan Times",
		"siteUrl" : "http://www.hindustantimes.com/"
	},
	{
		"name" : "IBN",
		"siteUrl" : "http://www.ibnlive.com/"
	},
	{
		"name" : "India Today",
		"siteUrl" : "http://indiatoday.intoday.in/"
	},
	{
		"name" : "India TV News",
		"siteUrl" : "http://www.indiatvnews.com/"
	},
	{
		"name" : "Indian Express",
		"siteUrl" : "http://indianexpress.com/"
	},
	{
		"name" : "Mid Day",
		"siteUrl" : "http://www.mid-day.com/"
	},
	{
		"name" : "Mint",
		"siteUrl" : "http://www.livemint.com/"
	},
	{
		"name" : "Money Control",
		"siteUrl" : "http://www.moneycontrol.com/"
	},
	{
		"name" : "MSN News India",
		"siteUrl" : "http://www.msn.com/en-in/"
	},
	{
		"name" : "Mumbai Mirror",
		"siteUrl" : "http://www.mumbaimirror.com/"
	},
	{
		"name" : "Navbharat Times",
		"siteUrl" : "http://navbharattimes.indiatimes.com/"
	},
	{
		"name" : "NDTV",
		"siteUrl" : "http://www.ndtv.com/"
	},
	{
		"name" : "One India",
		"siteUrl" : "http://www.oneindia.com/"
	},
	{
		"name" : "Punjab Kesari",
		"siteUrl" : "http://www.punjabkesari.in/"
	},
	{
		"name" : "Rediff News",
		"siteUrl" : "http://www.rediff.com/news"
	},
	{
		"name" : "Samachar",
		"siteUrl" : "http://www.samachar.com/"
	},
	{
		"name" : "Sports Keeda",
		"siteUrl" : "http://www.sportskeeda.com/"
	},
	{
		"name" : "Tech Crunch",
		"siteUrl" : "http://techcrunch.com/"
	},
	{
		"name" : "Tech2",
		"siteUrl" : "http://tech.firstpost.com/"
	},
	{
		"name" : "TechGig",
		"siteUrl" : "http://www.techgig.com/"
	},
	{
		"name" : "The Telegraph",
		"siteUrl" : "http://www.telegraphindia.com/"
	},
	{
		"name" : "The Economic Times",
		"siteUrl" : "http://economictimes.indiatimes.com/"
	},
	{
		"name" : "The Hindu",
		"siteUrl" : "http://www.thehindu.com/"
	},
	{
		"name" : "The New Indian Express",
		"siteUrl" : "http://www.newindianexpress.com/"
	},
	{
		"name" : "The Times Of India",
		"siteUrl" : "http://timesofindia.indiatimes.com/"
	},
	{
		"name" : "The Tribune",
		"siteUrl" : "http://www.tribuneindia.com/"
	},
	{
		"name" : "Times Now",
		"siteUrl" : "http://www.timesnow.tv/"
	},
	{
		"name" : "Wall Streen Journal India",
		"siteUrl" : "http://www.wsj.com/india"
	},
	{
		"name" : "Yahoo India",
		"siteUrl" : "https://in.yahoo.com/"
	},
	{
		"name" : "Your Story",
		"siteUrl" : "http://yourstory.com/"
	},
	{
		"name" : "Zee News",
		"siteUrl" : "http://zeenews.india.com/"
	}
]

	var parseList = function(list){
		var listHtml= "";
		for (var i=0;i<list.length;i++){
			listHtml = listHtml+ "<li><a href='" + list[i].siteUrl +"' target='_blank'>" + list[i].name +"</a></li>"
		}
		document.getElementById("anchorList").innerHTML = listHtml;
	}

	parseList(sites)
}())