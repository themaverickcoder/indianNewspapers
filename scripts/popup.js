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
		"name" : "Times Of India",
		"siteUrl" : "http://timesofindia.indiatimes.com/"
	},
	{
		"name" : "Hindustan Times",
		"siteUrl" : "http://www.hindustantimes.com/"
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