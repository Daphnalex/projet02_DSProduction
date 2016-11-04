(function(){

	var app = angular.module('dsprod', ['ngRoute','ngSanitize','ui.bootstrap']);
	//ROUTES
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'partials/home/home.html'
		})
		.when('/home', {
			templateUrl: 'partials/home/home.html',
			activeNav: 'home'
		})
		.when('/portfolio', {
			templateUrl: 'partials/portfolio/portfolio.html'
		})
		.when('/serviceVideo', {
			templateUrl: 'partials/services/Video/serviceVideo.html',
			activeNav: 'serviceVideo',
			controller: 'serviceController',
			controllerAs: 'servCtrl'
		})
		.when('/servicePhoto', {
			templateUrl: 'partials/services/Photo/servicePhoto.html',
			activeNav: 'servicePhoto',
			controller: 'serviceController',
			controllerAs: 'servCtrl'
		})
		.when('/serviceCreag', {
			templateUrl: 'partials/services/Creag/serviceCreag.html',
			activeNav: 'serviceCreag',
			controller: 'serviceController',
			controllerAs: 'servCtrl'
		})
		.when('/serviceEvent', {
			templateUrl: 'partials/services/Event/serviceEvent.html',
			activeNav: 'serviceEvent',
			controller: 'serviceController',
			controllerAs: 'servCtrl'
		})
		.when('/contact', {
			templateUrl: 'partials/contact/contact.html',
			activeNav: 'contact',
			controller: 'contactController',
			controllerAs : 'storeContact'
		})
	}]);

//Mise à jour copyright 
app.controller('dateController', function(){
	this.date = new Date();

});

app.directive("bloc1v", function(){
	return{
		restrict: 'EA',
		name: 'bloc1',
		templateUrl: "/partials/services/Video/bloc1.html"
	}
});

app.directive("bloc2v", function(){
	return{
		restrict: 'EA',
		name: 'bloc2',
		templateUrl: "/partials/services/Video/bloc2.html"
	}
});


app.directive("bloc3v", function(){
	return{
		restrict: 'EA',
		name: 'bloc3',
		templateUrl: "/partials/services/Video/bloc3.html"
	}
});


app.directive("bloc4v", function(){
	return{
		restrict: 'EA',
		name: 'bloc4',
		templateUrl: "/partials/services/Video/bloc4.html"
	}
});

app.directive("bloc1p", function(){
	return{
		restrict: 'EA',
		name: 'bloc1',
		templateUrl: "/partials/services/Photo/bloc1.html"
	}
});

app.directive("bloc2p", function(){
	return{
		restrict: 'EA',
		name: 'bloc2',
		templateUrl: "/partials/services/Photo/bloc2.html"
	}
});


app.directive("bloc3p", function(){
	return{
		restrict: 'EA',
		name: 'bloc3',
		templateUrl: "/partials/services/Photo/bloc3.html"
	}
});


app.directive("bloc4p", function(){
	return{
		restrict: 'EA',
		name: 'bloc4',
		templateUrl: "/partials/services/Photo/bloc4.html"
	}
});

app.directive("bloc1e", function(){
	return{
		restrict: 'EA',
		name: 'bloc1',
		templateUrl: "/partials/services/Event/bloc1.html"
	}
});

app.directive("bloc2e", function(){
	return{
		restrict: 'EA',
		name: 'bloc2',
		templateUrl: "/partials/services/Event/bloc2.html"
	}
});


app.directive("bloc3e", function(){
	return{
		restrict: 'EA',
		name: 'bloc3',
		templateUrl: "/partials/services/Event/bloc3.html"
	}
});


app.directive("bloc4e", function(){
	return{
		restrict: 'EA',
		name: 'bloc4',
		templateUrl: "/partials/services/Event/bloc4.html"
	}
});

app.directive("bloc1c", function(){
	return{
		restrict: 'EA',
		name: 'bloc1',
		templateUrl: "/partials/services/Creag/bloc1.html"
	}
});

app.directive("bloc2c", function(){
	return{
		restrict: 'EA',
		name: 'bloc2',
		templateUrl: "/partials/services/Creag/bloc2.html"
	}
});


app.directive("bloc3c", function(){
	return{
		restrict: 'EA',
		name: 'bloc3',
		templateUrl: "/partials/services/Creag/bloc3.html"
	}
});


app.directive("bloc4c", function(){
	return{
		restrict: 'EA',
		name: 'bloc4',
		templateUrl: "/partials/services/Creag/bloc4.html"
	}
});

	//DIRECTIVES

	//directive class active
	app.controller("PannelController", function($location, $scope){
		$scope.tab = 1;
		$scope.selectTab = function(setTab){
			$scope.tab = setTab;
		};

		$scope.isSelected = function(checkTab){
    		if($scope.tab === checkTab){
      			return true;
	    	}
	  	}
	  	$scope.watch(function(){
	  		return $location.path();
	  	}, function(newPath){
	  		console.log(newPath);
	  	});
	  	

	});
	
	app.directive('navbar', function(){
		return {
			restrict: 'AE',
			templateUrl: 'partials/common/nav.html'
		}
	});
	app.directive('pied', function(){
		return {
			restrict: 'AE',
			templateUrl: 'partials/common/footer.html'
		}
	});


	//Controlleur home
	app.controller('homeController', function(){
		this.titre = {
			accroche: 'Votre agence publicitaire et audiovisuelle'
		};
		this.services=[
		{
			titre:"Réalisation vidéo",
			image: "IMG/img1.png",
			lien:"#/serviceVideo"
		},
		{
			titre:"Shooting photo",
			image: "IMG/img2.png",
			lien:"#/serviceShooting"
		},
		{
			titre:"Création graphique",
			image: "IMG/img3.jpg",
			lien:"#/serviceGraphisme"
		},
		{
			titre:"Evènementiels",
			image: "IMG/img4.jpg",
			lien:"#/serviceEvenement"
		}];
		this.servicesResponsive=[
		{
			titre:"Réalisation vidéo",
			image: "IMG/video_test.png",
			lien:"#/serviceVideo"
		},
		{
			titre:"Shooting photo",
			image: "IMG/photo_test.jpg",
			lien:"#/serviceShooting"
		},
		{
			titre:"Création graphique",
			image: "IMG/graph.jpg",
			lien:"#/serviceGraphisme"
		},
		{
			titre:"Evènementiels",
			image: "IMG/champ_test.jpg",
			lien:"#/serviceEvenement"
		}];

	});//FIN controlleur home

	//Controller portfolio
	app.controller('portfolioController', ['$window', function($window){
		//objet filtres

		this.filtres = [
		{
			name: 'all'
		},
		{
			name: 'book'
		},
		{
			name: 'publicite'
		}
		];

		//tableau d'objet : photo + détails
		this.elements = [
		{

			imageMin: 'IMG/portfolio/image1.png',
			media: 'IMG/portfolio/image1.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image2.png',
			media: 'IMG/portfolio/image2.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image3.png',
			media: 'IMG/portfolio/image3.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image4.png',
			media: 'IMG/portfolio/image4.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image5.png',
			media: 'IMG/portfolio/image5.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image6.png',
			media: 'IMG/portfolio/image6.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image7.png',
			media: 'IMG/portfolio/image7.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/video1.png',
			media: 'VIDEO/portfolio/video1.mp4',
			type: 'video',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'publicite',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image1.png',
			media: 'IMG/portfolio/image1.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image2.png',
			media: 'IMG/portfolio/image2.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image3.png',
			media: 'IMG/portfolio/image3.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image4.png',
			media: 'IMG/portfolio/image4.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image5.png',
			media: 'IMG/portfolio/image5.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image6.png',
			media: 'IMG/portfolio/image6.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/image7.png',
			media: 'IMG/portfolio/image7.png',
			type: 'photographie',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'book',
			active: 'false'
		},
		{
			imageMin: 'IMG/portfolio/video1.png',
			media: 'VIDEO/portfolio/video1.mp4',
			type: 'video',
			description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
			filtre: 'publicite',
			active: 'false'
		}
		];

		//gestion du responsive
		this.page = angular.element($window).width();
		this.hauteurModal = angular.element($window).height()- 50;
		
		//repérer la photo sélectionnée et afficher le détail en fonction de sa position
		this.page = angular.element($window).width();
		this.hauteurModal = angular.element($window).height()- 50;
		this.photoSelectionne = null;
		this.selectionPhoto = function(element, index, tableau){
			this.photoSelectionne = element;
			this.elements = tableau;
			var longTab = tableau.length;
			//this.showDiv = true;
			let i = ((index - (index%6))/ 6);
			let max = Math.trunc(longTab/6);
			//console.log(index);
			//console.log(longTab - (longTab%6));
			//console.log(longTab);
			//console.log(i);
			//console.log(max);
			
			if (i < 1){
				angular.element(".show").removeClass("show");
				angular.element("#5").addClass("show");
			}
			else if ((i >= 1) && (i != max)){
				let id = 6*(Math.trunc(i)+1)-1;
				angular.element(".show").removeClass("show");
				angular.element('#'+id).addClass("show");
			}
			else if (i=max){
				let id = longTab-1;
				//console.log(id);
				//console.log(id);
				angular.element(".show").removeClass("show");
				angular.element('#'+id).addClass("show");
			}
		};



		//gestion de la fermeture du détail du portfolio
		this.fermetureBloc = function(){
			angular.element(".show").removeClass("show");
		};
		//gestion des filtres du portfolio

		this.filtreSelectionne = null;
		this.triPhoto = function(filtre, tableauPhoto){
			this.elements = tableauPhoto ;
			this.filtreSelectionne = filtre.name;
			console.log(filtre);
			for (i=0; i<tableauPhoto.length; i++){
				if (filtre.name == "all"){
					angular.element(".displayNone").removeClass("displayNone");
				}
				else if (filtre.name != tableauPhoto[i].filtre){
					let filtreCache = tableauPhoto[i].filtre;
					angular.element(".displayNone").removeClass("displayNone");
					angular.element('.'+ filtreCache).addClass('displayNone');
					angular.element(".show").removeClass("show");
				}
			}			
		};		
	}]);



/* Début controlleur services*/
app.controller('serviceController', ['$sce', function($sce){
	this.servicevideo ={
		categorie: {
			type: 'VIDEOS'
		},
		presentation: {
			description: 'Nous produisons vos vidéos que ce soit des :<ul><li>spots de publicité</li><li>clips musicaux</li><li>reportages</li><li>interviews</li></ul><p>Nous offrons également un service optionnel en vous proposant un drône pour filmer un évènement</p>',
			src: $sce.trustAsResourceUrl('https://www.youtube.com/embed/2fSzpdY8ABw'),
			type: 'video/mp4'
		},
		carousels: [
		{
			src: $sce.trustAsResourceUrl("https://www.youtube.com/embed/RYrN17-apQQ"),
			type: 'video/mp4',
			titre: 'Mercedes',
			description: 'Réalisation d\'une publicité pour la nouvelle gamme de voitures Mercedes Benz, des véhicules alliant la puissance d\'une sportive et le confort d\'une familiale'
		},
		{
			src: $sce.trustAsResourceUrl('https://www.youtube.com/embed/zpy8MlI7QnM'),
			type: 'video/mp4',
			titre: 'Drone',
			description: 'Réalisation d\'une video haute altitude avec notre drône. La stabilité de l\'appareil et la qualité de l\'image font de cet outil un atout précieux pour la prise de plans larges, pour vos évènements ou autres besoins circonstanciels.'
		},
		{
			src: $sce.trustAsResourceUrl('https://www.youtube.com/embed/-XNYoTESoPE'),
			titre: 'Le Riad',
			type: 'video/mp4',
			description: 'Video promotionnelle pour mettre en avant "Le Riad", le nouveau Restaurant/Salon de thé en vogue. Ce coin de Méditerranée, niché au cœur de Nevers, vous emmènera en voyage avec ses thés à la menthe et ses pâtisseries aux saveurs douces et envoûtantes.'
		}],
		avisClient: [
			{
			logo: 'IMG/fifa.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
			},
			{
			logo: 'IMG/playboy.jpg',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
			},
			{
			logo: 'IMG/ferrari.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
			}
		],
		promotion: {
			accroche: 'Vous souhaitez réaliser votre vidéo ?'
		}
	};


	this.servicephoto ={

		categorie: {
			type: 'PHOTOS'
		},
		presentation: {
			description: 'Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam protectoribus mandaverat fidis. quo conperto Montius tunc quaestor acer quidem sed ad lenitatem propensior, consulens in commune advocatos palatinarum primos scholarum adlocutus est mollius docens nec decere haec fieri nec prodesse addensque vocis obiurgatorio sonu quod si id placeret, post statuas Constantii deiectas super adimenda vita praefecto conveniet securius cogitari.',
			src: '../../../IMG/gcache.jpg',
			type: 'image/jpg'
		},
		carousels: [
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Mercedes',
			description: 'Réalisation d\'une publicité pour la nouvelle gamme de voitures Mercedes Benz, des véhicules alliant la puissance d\'une sportive et le confort d\'une familiale'
		},
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Drone',
			description: 'Réalisation d\'une video haute altitude avec notre drône. La stabilité de l\'appareil et la qualité de l\'image font de cet outil un atout précieux pour la prise de plans larges, pour vos évènements ou autres besoins circonstanciels.'
		},
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Le Riad',
			description: 'Video promotionnelle pour mettre en avant "Le Riad", le nouveau Restaurant/Salon de thé en vogue. Ce coin de Méditerranée, niché au cœur de Nevers, vous emmènera en voyage avec ses thés à la menthe et ses pâtisseries aux saveurs douces et envoûtantes.'
		}],
		avisClient: [
		{
			logo: '../../../IMG/fifa.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		},
		{
			logo: '../../../IMG/playboy.jpg',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		},
		{
			logo: '../../../IMG/ferrari.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		}
		],
		promotion: {
			accroche: 'Vous souhaitez mettre en place un shooting photo ?'
		}
	};

this.serviceevent ={

		categorie: {
			type: 'EVENEMENTIEL'
		},
		presentation: {
			description: 'Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam protectoribus mandaverat fidis. quo conperto Montius tunc quaestor acer quidem sed ad lenitatem propensior, consulens in commune advocatos palatinarum primos scholarum adlocutus est mollius docens nec decere haec fieri nec prodesse addensque vocis obiurgatorio sonu quod si id placeret, post statuas Constantii deiectas super adimenda vita praefecto conveniet securius cogitari.',
			src: '../../../IMG/gcache.jpg',
			type: 'image/jpg'
		},
		carousels: [
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Mercedes',
			description: 'Réalisation d\'une publicité pour la nouvelle gamme de voitures Mercedes Benz, des véhicules alliant la puissance d\'une sportive et le confort d\'une familiale'
		},
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Drone',
			description: 'Réalisation d\'une video haute altitude avec notre drône. La stabilité de l\'appareil et la qualité de l\'image font de cet outil un atout précieux pour la prise de plans larges, pour vos évènements ou autres besoins circonstanciels.'
		},
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Le Riad',
			description: 'Video promotionnelle pour mettre en avant "Le Riad", le nouveau Restaurant/Salon de thé en vogue. Ce coin de Méditerranée, niché au cœur de Nevers, vous emmènera en voyage avec ses thés à la menthe et ses pâtisseries aux saveurs douces et envoûtantes.'
		}],
		avisClient: [
		{
			logo: '../../../IMG/fifa.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		},
		{
			logo: '../../../IMG/playboy.jpg',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		},
		{
			logo: '../../../IMG/ferrari.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		}
		],
		promotion: {
			accroche: 'Vous souhaitez organiser un évènement ?'
		}
	};

	this.servicecreag ={

		categorie: {
			type: 'GRAPHIQUE'
		},
		presentation: {
			description: 'Hinc ille commotus ut iniusta perferens et indigna praefecti custodiam protectoribus mandaverat fidis. quo conperto Montius tunc quaestor acer quidem sed ad lenitatem propensior, consulens in commune advocatos palatinarum primos scholarum adlocutus est mollius docens nec decere haec fieri nec prodesse addensque vocis obiurgatorio sonu quod si id placeret, post statuas Constantii deiectas super adimenda vita praefecto conveniet securius cogitari.',
			src: '../../../IMG/gcache.jpg',
			type: 'image/jpg'
		},
		carousels: [
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Mercedes',
			description: 'Réalisation d\'une publicité pour la nouvelle gamme de voitures Mercedes Benz, des véhicules alliant la puissance d\'une sportive et le confort d\'une familiale'
		},
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Drone',
			description: 'Réalisation d\'une video haute altitude avec notre drône. La stabilité de l\'appareil et la qualité de l\'image font de cet outil un atout précieux pour la prise de plans larges, pour vos évènements ou autres besoins circonstanciels.'
		},
		{
			src: '../../../IMG/pcache.jpg',
			type: 'image/jpg',
			titre: 'Le Riad',
			description: 'Video promotionnelle pour mettre en avant "Le Riad", le nouveau Restaurant/Salon de thé en vogue. Ce coin de Méditerranée, niché au cœur de Nevers, vous emmènera en voyage avec ses thés à la menthe et ses pâtisseries aux saveurs douces et envoûtantes.'
		}],
		avisClient: [
		{
			logo: '../../../IMG/fifa.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		},
		{
			logo: '../../../IMG/playboy.jpg',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		},
		{
			logo: '../../../IMG/ferrari.gif',
			texte: '" Nous travaillons régulièrement avec l\'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme. "'
		}
		],
		promotion: {
			accroche: 'Vous souhaitez créer votre logo ?'
		}
	};

}]);




/* ANGULAR CONTACT */
app.controller('contactController', function(){
	this.utilisateur = {};
	this.update = function(user){
		this.utilisateur = angular.copy(user);
	};		
	this.reset = function(){
		this.user = angular.copy(this.user);
	};
	this.reset();

	this.proChecked = true;
	this.partChecked = false;
	this.tab = 1;
	
	this.clickPart = function(){
		this.proChecked = false;
		this.partChecked = true;
		this.tab = 2;

	};
	this.clickPro = function(){
		this.proChecked = true;
		this.partChecked = false;
		this.tab = 1;
	};     
	this.clickPro();
	this.isSelected = function(checkTab){
		if(this.tab === checkTab){
			return true;
		}

	}

	
  });
})();
