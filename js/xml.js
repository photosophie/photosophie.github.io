
function headload() { 

var xhttp2 = new XMLHttpRequest();
	xhttp2.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myF(this);
		}
	};
	xhttp2.open("GET", "./xml/head.xml", true);
	xhttp2.send();
	function myF(xml) {
		var xmlDoc = xml.responseXML;
		
		var co=xmlDoc.getElementsByTagName("title")[0].innerHTML;
		document.getElementById("tit").innerHTML =co;
		
		var cosub=xmlDoc.getElementsByTagName("subtitle")[0].innerHTML;
		document.getElementById("sub").innerHTML =cosub;		
	}

}

function menuload() { 
/*
var xhttp = new XMLHttpRequest();
	var tex=""
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xhttp.open("GET", "./xml/menu.xml", true);
	xhttp.send();
	function myFunction(xml) {
		var xmlDoc = xml.responseXML;
	}
*/
}

function contentload(d) {
	

	var xhttp = new XMLHttpRequest();
	var tex=""
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction(this);
		}
	};
	xhttp.open("GET", "./xml/"+d+".xml", true);
	xhttp.send();
	
	function myFunction(xml) {
		
		

		var xmlDoc = xml.responseXML;
		var cont=xmlDoc.firstChild.children;
		
		
		if(xmlDoc.firstChild.nodeName=="gallery") {

		
		tex="<div class=\"columns\">"+
				"<div class=\"column\">";
					

		for (i=0;i<cont[0].children.length;i++)
		{

				tex+="<div class=\"block\">"+ 
				
					"<figure class=\"image\">"+
					"<img class=\"imgpointer\" src=\"fotos/"+d+"/"+cont[0].children[i].innerHTML+"\" onclick=\"openModal();currentSlide("+
					(i+1)+")\">"+
					"</figure>"+
					"</div>";

		}
		
		tex+="</div>"+
			"<div class=\"column\">";
		for (i=0;i<cont[1].children.length;i++)
		{

				tex+="<div class=\"block\">"+ 
				
					"<figure class=\"image\">"+
					"<img class=\"imgpointer\" src=\"fotos/"+d+"/"+cont[1].children[i].innerHTML+"\" onclick=\"openModal();currentSlide("+
					(i+1+cont[0].children.length)+")\">"+
					"</figure>"+
					"</div>";

		}	
		tex+="</div>"+
			"<div class=\"column\">";
		for (i=0;i<cont[2].children.length;i++)
		{

				tex+="<div class=\"block\">"+ 
				
					"<figure class=\"image\">"+
					"<img class=\"imgpointer\" src=\"fotos/"+d+"/"+cont[2].children[i].innerHTML+"\" onclick=\"openModal();currentSlide("+
					(i+1+cont[0].children.length+cont[1].children.length)+")\">"+
					"</figure>"+
					"</div>";

		}	
		tex+="</div>"+
				"</div></div>"	;
		
		tex+="<div id=\"mymodal\" class=\"modal\">"+
				"<span class=\"close cursor\" onclick=\"closeModal()\">&times;</span>"+
				"<div class=\"m-content\">";
				

		for (i=0;i<cont[0].children.length;i++)
		{

				tex+="<div class=\"slides\">"+ 
				

					"<img src=\"fotos/"+d+"/"+cont[0].children[i].innerHTML+"\" class=\"modal-image\">"+
					"<br><br>"+
					"</div>";


		}
				for (i=0;i<cont[1].children.length;i++)
		{

				tex+="<div class=\"slides\">"+ 
				

					"<img src=\"fotos/"+d+"/"+cont[1].children[i].innerHTML+"\" class=\"modal-image\">"+
					"<br>lorem ipsum"+
					"</div>";


		}
				for (i=0;i<cont[2].children.length;i++)
		{

				tex+="<div class=\"slides\">"+ 
				

					"<img src=\"fotos/"+d+"/"+cont[2].children[i].innerHTML+"\" class=\"modal-image\">"+
					"<br><br>"+
					"</div>";

		}
		
		tex+=				"</div>"+
					"<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>"+
					"<a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>"+

			"</div>";
		} else if (xmlDoc.firstChild.nodeName=="squaregallery"){
			
			
			
			tex="<div class=\"columns\">"+
				"<div class=\"column\">";
					

		for (i=0;i<cont[0].children.length;i++)
		{

				tex+="<div class=\"block center-cropped\" style=\"background-image: url(\'fotos/"+d+"/"+cont[0].children[i].children[0].innerHTML+"');\">"+ 				

					"<a href=\"#\"><div class=\"dummyhover\" onclick=\"contentload('"+cont[0].children[i].children[1].innerHTML+"')\">"+
					cont[0].children[i].children[2].innerHTML+"<br><br>"+
					cont[0].children[i].children[3].innerHTML+
					"</div></a></div>";

		}
		
		tex+="</div>"+
			"<div class=\"column\">";
		for (i=0;i<cont[1].children.length;i++)
		{

				tex+="<div class=\"block center-cropped\" style=\"background-image: url(\'fotos/"+d+"/"+cont[1].children[i].children[0].innerHTML+"');\">"+ 				

					"<a href=\"#\"><div class=\"dummyhover\" onclick=\"contentload('"+cont[1].children[i].children[1].innerHTML+"')\">"+
					cont[1].children[i].children[2].innerHTML+"<br><br>"+
					cont[1].children[i].children[3].innerHTML+
					"</div></a></div>";

		}
		tex+="</div>"+
			"<div class=\"column\">";
		for (i=0;i<cont[2].children.length;i++)
		{

				tex+="<div class=\"block center-cropped\" style=\"background-image: url(\'fotos/"+d+"/"+cont[2].children[i].children[0].innerHTML+"');\">"+ 				

					"<a href=\"#\"><div class=\"dummyhover\" onclick=\"contentload('"+cont[2].children[i].children[1].innerHTML+"')\">"+
					cont[2].children[i].children[2].innerHTML+"<br><br>"+
					cont[2].children[i].children[3].innerHTML+
					"</div></a></div>";

		}
		tex+="</div></div>";
			
				
			
			
			
			
			
			
		} else if (xmlDoc.firstChild.nodeName=="static") {
			tex="<div class=\"columns\">"+
				"<div class=\"column\">";
			tex+="<br /><br /><p>berlin based photographer /<br />";
			tex+="main interests in sustainability, nature, politics, arts /<br />";
			tex+="studied photodesign 2014 - 2017</p><br>";
			tex+="<p>publications in Monopol, zitty, tagesspiegel, esspress /</p><br>";
			tex+="<p>photos for vinyl \"rache der tiere\" of rapper lemur</p><br>";
			tex+="<p>book: \"Im Hambacher Wald\" by sophie reuter and gert reising<br />published by axel dielmann - verlag</p><br>";	
			tex+="<p><br /><br></p>";
			tex+="<p>exhibitions</p>";
			tex+="<div class=\"columns is-mobile\">"+
				"<div class=\"column\">";			
			tex+="<p>2016 / \"family and friends\"<br />";
			tex+="2017 / \"format - peace of land\"<br />";			
			tex+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / \"format - peace of land\"<br />";				
			tex+="2018 / \"format - peace of land\"<br /></p><br>";	
			
			tex+="<p>2019 / \"fight for future\"<br />";
			tex+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / \"fight for future\"<br />";				
			tex+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; / \"fight for future\"<br /></p><br>";	

			tex+="<p>2020 / \"fight for future\"</p><br>";	
			
			tex+="</div>";	
			
			
			
			tex+="<div class=\"column\">";			
			tex+="<p>at kunsthaus bethanien<br />";
			tex+="at designschool best-sabel<br />";			
			tex+="at communitygarden pol<br />";				
			tex+="at communitygarden pol<br /></p><br>";	
			
			tex+="<p>at 101! / ArtFestival 48h Neukölln<br />";
			tex+="at SANDALIA - Schillerstraße 106<br />";				
			tex+=" at OMA am Holzmarkt<br /></p><br>";	

			tex+="<p>at Zhdk - Nachhaltigkeits Woche Zürich</p><br>";	
			
			
			
			tex+="</div></div>";
			tex+="<br><br><p> +49 177 163 1213</p>";
			tex+="<p>mail@sophiereuter.com</p><br>";
			tex+="<p>if you are interested in photos on this website<br>";
			tex+="or want custom photos made, please get in touch!</p><br>";
			tex+="<br><br><br><br><br>";			
			tex+="<p>all photographs are subject to copyright and may not be reproduced by any means without written permission</p><br>";
			tex+="<p>2021 &copy; Sara Sophie Reuter</p>";

			tex+="</div>"				
			

			tex+="<div class=\"column\">";
			tex+="</div>"			
			tex+="</div></div>";			
		} 
		document.getElementById("maincontent").innerHTML =tex;


	}	
}