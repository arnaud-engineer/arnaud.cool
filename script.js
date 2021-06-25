/*  =========================================================================
	 OBJECT MODEL
	========================================================================= */

	var lightOn = true;

	var isCatPurring = false;

	/*  ----------------------------------------
		 SITE
		---------------------------------------- */

		class Site
		{
			constructor(i, o, n, l, d, pict, url) {
				this.id = i;
				this.object = o;
				this.name = n;
				this.logo = l;
				this.description = d;
				this.img = pict;
				this.link = url;
			}
		}

		var lSite = [
		new Site(
				"arnaud-engineer",
				"diploma",
				"arnaud.engineer",
				"rsrc/img/logos/arnaud-engineer.svg",
				"Besoin d'un ingénieur couteau-suisse ? D'un développeur web ?<br/><br/>Alors n'hésitez pas à me rendre visite sur mon site professionnel où vous pourrez voir entre autres l'étendu de mes compétences, mon cursus, mon CV et même me contacter.",
				"/img",
				"https://arnaud.engineer"
			),
			new Site(
				"truesizes",
				"ruler",
				"truesiz.es",
				"rsrc/img/logos/truesizes.svg",
				"Ça donne quoi déjà 25cm x 17cm ?<br/><br/>Si vous ne vous êtes jamais posé la question, ce site n'est pas fait pour vous.<br/><br/>Sinon, grâce à sa calibration automatique de l'écran (expérimentale, mais surprenante pour quelques chose qu'on est pas sensé pouvoir faire avec les techno web), truesiz.es peut vous fournir très facilement la réponse.",
				"/img",
				"https://truesiz.es"
			),
			new Site(
				"jolitube",
				"macbook",
				"JoliTube",
				"rsrc/img/logos/jolitube.png",
				"<br/>La télévision, pour ceux qui préfèrent YouTube.<br/><br/>Sur JoliTube, retrouvez une cinquantaine de chaînes thématiques pour toutes les envies : films, séries, comédie, musique, ambiance, curiosités étranges de fin fond de catalogue ...<br/><br/>JoliTube, c'est aussi l'aboutissement de 15 ans de visionnage (trop ?) intensif de YouTube, Dailymotion, Vimeo, ... et un moyen de me persuader que je n'y ai pas perdu bêtement mon temps ... en faisant perdre celui des autres",
				"/img",
				"https://jolitube.com"
			),
			new Site(
				"tarzanne",
				"tarzanne",
				"Tarzanne",
				"/logo",
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				"/img",
				"https://tarzanne.com"
			)
		];





function displayFrame(origin, site)
{
	turnOffLight();
	for(let i=0 ; i < lSite.length ; i++) {
		if(site === lSite[i].id) {
			//document.getElementById("content-name").innerHTML = lSite[i].name;
			document.getElementById("content-description").innerHTML = lSite[i].description;
			//document.getElementById("content-img").setAttribute("src" , lSite[i].img);
			document.getElementById("content-link").setAttribute("href" , lSite[i].link);
			document.getElementById("content-link").innerHTML = "visit " + lSite[i].name;

			document.getElementById("content-logo").setAttribute("src" , lSite[i].logo);


		}
	}


	document.getElementById("link-presentation").classList.add("displayed");
	origin.setAttribute("onclick", "hideFrame(this, '" + site + "');");
	document.getElementById("link-presentation-background").setAttribute("onclick", "hideFrame(this, '" + site + "');");
}

function hideFrame(origin, site)
{
	if(lightOn === true)
		turnOnLight();
	document.getElementById("link-presentation").classList.remove("displayed");
	//origin.setAttribute("onclick", "displayFrame(origin, site);");
	//origin.setAttribute("onclick", "displayFrame(this, '" + site + "');");


	for(let i=0 ; i < lSite.length ; i++) {
		document.getElementById(lSite[i].object).setAttribute("onclick", "displayFrame(this, '" + lSite[i].id + "');");
	}
}


	/*  ----------------------------------------
		 JACQUOUILLE
		---------------------------------------- */

		function setDayMode()
		{
			turnOnLight();
			jacquouilleAnimation();
			lightOn = true;
		}

			function turnOnLight()
			{
				document.getElementsByTagName('body')[0].classList.remove("night");
				document.getElementById('bulle').setAttribute("src", "rsrc/img/bulle-jour.svg");

				document.getElementById('switch').setAttribute("src", "rsrc/img/switch-on.svg");
				document.getElementById('switch').setAttribute("onclick", "setNightMode();");
			}

		function setNightMode()
		{
			turnOffLight();
			jacquouilleAnimation();
			lightOn = false;
		}

			function turnOffLight()
			{
				document.getElementsByTagName('body')[0].classList.add("night");
				document.getElementById('bulle').setAttribute("src", "rsrc/img/bulle-nuit.svg");

				document.getElementById('switch').setAttribute("src", "rsrc/img/switch-off.svg");
				document.getElementById('switch').setAttribute("onclick", "setDayMode();");
			}

		function jacquouilleAnimation()
		{
			document.getElementById('jacquouille').classList.add('displayed');
			document.getElementById('bulle').classList.add('displayed');
			setTimeout(() => {
				document.getElementById('jacquouille').classList.remove('displayed');
				document.getElementById('bulle').classList.remove('displayed');
			}, 1000);

		}

	/*  ----------------------------------------
		 VEGA
		---------------------------------------- */



		function catPurring()
		{
			if(isCatPurring === false) {
				document.getElementById("cat-purring").play();
				isCatPurring = true;
			}
			else {
				document.getElementById("cat-purring").pause();
				isCatPurring = false;
			}
		}

    /* -----------------------------
        YOUTUBE PLAYER LOADING
       ----------------------------- */

    //YouTube player required variables
    var player;
    var tag;
    var firstScriptTag;
    var num;


        // FUNCTION TO CALL FOR PLAYER INITIALISATION
        function initYT()
        {
        	try
        	{
        		// SRC : https://developers.google.com/youtube/iframe_api_reference#Getting_Started

	            // Loading of the IFrame Player API code (asynchronous)
	            tag = document.createElement('script');

	            tag.src = "https://www.youtube.com/iframe_api";
	            firstScriptTag = document.getElementsByTagName('script')[0];
	            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	            // Call of the YouTube API
	            onYouTubeIframeAPIReady();
        	}
        	catch(e) { console.log(e);}
        }

        // CALL THE YOUTUBE API TO GET A PLAYER
        function onYouTubeIframeAPIReady()
        {
        	try
        	{
        		// Instanciation of the player
	            player = new YT.Player('player', {
	                height: '100%',
	                width: '100%',
	                playerVars: {
	                    listType: 'playlist',
	                    list: 'PL_CgzUyArZLHJQvhs_Q1kF5UcFIfoo4fN',
	                    index: 0,
	                    autoplay: 0,
	                    //encrypted-media,
	                }
	            });
	            //player.setShuffle(true);
	            player.setPlaybackQuality("small");
        	}
        	catch(e) { console.log(e); }
        }


        var isPlayingRadio = false;
        function playPause()
        {
        	if(isPlayingRadio === false) {
        		player.playVideo();
        		isPlayingRadio = true;
        		document.getElementById("radio").classList.add("playing");
        	}
        	else {
        		player.pauseVideo();
        		isPlayingRadio = false;
        		document.getElementById("radio").classList.remove("playing");
        	}
        }


/*  =========================================================================
	 DEMO
	========================================================================= */

	/*  ----------------------------------------
		 DEMO
		---------------------------------------- */

		/*  ---------------
			 DEMO
			--------------- */

document.addEventListener('DOMContentLoaded', function(event)
{






	/*
	//let office = document.getElementById("myOffice");
	document.addEventListener('mousemove', e => {
		let cursorX = e.clientX / window.innerWidth;
		let cursorY = e.clientY / window.innerHeight;
		//console.log("mouse location:", e.clientX / window.innerWidth, e.clientY / window.innerHeight);

		// 37% -> 62.4% (25.4% freedom)
		document.getElementById("cursor").style.left = (37 + (cursorX * 100 / 4)) + "%";
		// 17% -> 42.5% (25.5% freedom)
		document.getElementById("cursor").style.top = (17 + (cursorY * 100 / 4)) + "%";
	});
*/



	// scroll directly to bottom for mobile browsers
	//window.scrollTo(0,document.body.scrollHeight);













/*
	// Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
	// la souris entraîne un dessin sur le canevas
	let isDrawing = false;
	let x = 0;
	let y = 0;

	const myPics = document.getElementById('myPics');
	const context = myPics.getContext('2d');

	// On récupère le décalage du canevas en x et y par rapport aux bords
	// de la page
	var rect = myPics.getBoundingClientRect();

	// On ajoute les gestionnaires d'évènements pour mousedown, mousemove
	// et mouseup
	myPics.addEventListener('mousedown', e => {
		rect = myPics.getBoundingClientRect();
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
		isDrawing = true;
	});

	myPics.addEventListener('mousemove', e => {
		if (isDrawing === true) {
			rect = myPics.getBoundingClientRect();
			drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
			x = e.clientX - rect.left;
			y = e.clientY - rect.top;
		}
	});





	myPics.addEventListener('mouseup', e => {
		if (isDrawing === true) {
			rect = myPics.getBoundingClientRect();
			drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
			x = 0;
			y = 0;
			isDrawing = false;
		}
	});

	myPics.addEventListener('mouseleave', e => {
		if (isDrawing === true) {
			rect = myPics.getBoundingClientRect();
			drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
			x = 0;
			y = 0;
			isDrawing = false;
		}
	});


	function drawLine(context, x1, y1, x2, y2) {
		context.beginPath();
		context.strokeStyle = 'black';
		context.lineWidth = 2;
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
		context.closePath();
	}
*/











	//initYT();


	//onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)};
});







