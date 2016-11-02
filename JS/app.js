(function(){
	var app = angular.module('dsprod', ['ngRoute','ngSanitize','ui.bootstrap']);
	//ROUTES
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home/home.html'
			})
			.when('/home', {
				templateUrl: 'partials/home/home.html'
			})
			.when('/portfolio', {
				templateUrl: 'partials/portfolio/portfolio.html'
			})
			.when('/serviceVideo', {
				templateUrl: 'partials/services/serviceVideo.html'
			})
			.when('/serviceShooting', {
				templateUrl: 'partials/services/serviceShooting.html'
			})
			.when('/serviceGraphisme', {
				templateUrl: 'partials/services/serviceGraphisme.html'
			})
			.when('/serviceEvenement', {
				templateUrl: 'partials/services/serviceEvenement.html'
			})
			.when('/contact', {
				templateUrl: 'partials/contact/contact.html',
				controller: ''
			})
	}]);
	//DIRECTIVES

	//directive class active
	app.controller("PannelController", function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
    		if(this.tab === checkTab){
      			return true;
    	}
  	}

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

		
	}]);//FIN controlleur portfolio

	
})();