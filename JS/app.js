(function(){
	var app = angular.module('dsProd', []);

//Mise à jour copyright 
app.controller('dateController', function(){
	this.date = new Date();

});

app.directive("bloc1", function(){
	return{
		restrict: 'EA',
		name: 'bloc1',
		templateUrl: "/partials/services/bloc1.html"
	}
})

app.directive("bloc2", function(){
	return{
		restrict: 'EA',
		name: 'bloc2',
		templateUrl: "/partials/services/bloc2.html"
	}
})


app.directive("bloc3", function(){
	return{
		restrict: 'EA',
		name: 'bloc3',
		templateUrl: "/partials/services/bloc3.html"
	}
})


app.directive("bloc4", function(){
	return{
		restrict: 'EA',
		name: 'bloc4',
		templateUrl: "/partials/services/bloc4.html"
	}
})

	var app = angular.module('dsprod', ['ngRoute']);
	app.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'partials/accueil/accueil.html'
			})
			.when('/accueil',{
				templateUrl: 'partials/accueil/accueil.html'
			})
			.when('/serviceVideo',{
				templateUrl: 'partials/services/serviceVideo.html'
			})
			.when('/serviceGraphisme',{
				templateUrl: 'partials/services/serviceGraphisme.html'
			})
			.when('/servicePhoto', {
				templateUrl: 'partials/services/servicePhoto.html'
			})
			.when('/serviceEvenement',{
				templateUrl: 'partials/services/serviceEvenement.html'
			})
			.when('/portfolio',{
				templateUrl: 'partials/portfolio/portfolio_angular.html'
			})
			.when('/contact',{
				templateUrl: 'partials/contact/contact.html'
			})
			.when('/aPropos',{
				templateUrl: 'partials/aPropos/aPropos.html'
			})
	}]);

	//Controller pour copyright
	app.controller('dateController', function(){
			this.date = new Date();
		
	});

	//directive de NavBar
	app.directive("navBar", function(){
		return{
			restrict: 'EA',
			templateUrl: "partials/common/nav.html"
		}
	});
	//directive du footer
	app.directive("piedPage", function(){
		return{
			restrict: 'EA',
			templateUrl: "partials/common/footer.html"
		}
	});
	app.directive("portfolio", function(){
		return{
			restrict: 'EA',
			templateUrl:"partials/portfolio/portfolio_angular.html"
		}
	});

	app.controller('ServController', function(){

		this.video = [
		{
			presentation : 'Nous produisons vos vidéos que ce soit des :'
		},
		{
			liste1: 'spots de publicité'
		},
		{
			liste2: 'Clips musicaux'
		},
		{
			liste3: 'Reportages'
		},
		{
			liste4: 'Interviews'
		},
		{
			liste5: 'Drône'
		},
		{
			infoTarif: 'Les tarifs ne sont pas fixés par type de service'
		},
		{
			drône: "L'utilisation d'un drône est réglementée"
		},
		{
			dernièreRéalisation: "https://www.youtube.com/embed/2fSzpdY8ABw"
		},
		{
			pub1: "Mercedes"
		},
		{
			descripub1: "Réalisation d'une publicité pour la nouvelle gamme de voitures Mercedes Benz. Une voiture alliant la puissance d'une sportive et le confort d'une familiale. De nombreuses options seront disponibles et le tout pour un prix des plus modiques."
		},
		{
			spot1: "https://www.youtube.com/embed/RYrN17-apQQ"
		},
		{
			pub2: "Drône"
		},
		{
			descripub2: "Réalisation d'une video haute altitude avec notre drône. La stabilité de l'appareil et la qualité de l'image font de cet outil un atout précieux pour la prise de plans larges, pour vos évènements ou autres besoins circonstanciels."
		},
		{
			spot2: "https://www.youtube.com/embed/zpy8MlI7QnM"
		},
		{
			pub3: 'Le Riad'
		},
		{
			descripub3: 'Video promotionnelle pour mettre en avant "Le Riad", le nouveau Restaurant/Salon de thé en vogue. Ce coin de Méditerranée, niché au cœur de Nevers, vous emmènera en voyage avec ses thés à la menthe et ses pâtisseries aux saveurs douces et envoûtantes.'
		},
		{
			confiance: 'Ils nous ont fait confiance'
		},
		{
			avis1: "Nous travaillons régulièrement avec l'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme."
		},
		{
			avis2: "Nous travaillons régulièrement avec l'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme."
		},
		{
			avis3: "Nous travaillons régulièrement avec l'agence My DS Production depuis plusieurs années. Nous sommes particulièrement satisfaits de leur réactivité et de leur disponibilité. Denis nous accompagne sur toutes les étapes de nos projets avec beaucoup de professionnalisme."
		},
		{
			promo: "Vous souhaitez réaliser votre vidéo ?"
		}
		]
	
});	
	
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
				imageMin: '../../IMG/portfolio/image1.png',
				media: '../../IMG/portfolio/image1.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image2.png',
				media: '../../IMG/portfolio/image2.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image3.png',
				media: '../../IMG/portfolio/image3.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image4.png',
				media: '../../IMG/portfolio/image4.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image5.png',
				media: '../../IMG/portfolio/image5.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image6.png',
				media: '../../IMG/portfolio/image6.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image7.png',
				media: '../../IMG/portfolio/image7.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/video1.png',
				media: '../../VIDEO/portfolio/video1.mp4',
				type: 'video',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'publicite'
			},
			{
				imageMin: '../../IMG/portfolio/image1.png',
				media: '../../IMG/portfolio/image1.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image2.png',
				media: '../../IMG/portfolio/image2.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image3.png',
				media: '../../IMG/portfolio/image3.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image4.png',
				media: '../../IMG/portfolio/image4.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image5.png',
				media: '../../IMG/portfolio/image5.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image6.png',
				media: '../../IMG/portfolio/image6.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/image7.png',
				media: '../../IMG/portfolio/image7.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				imageMin: '../../IMG/portfolio/video1.png',
				media: '../../VIDEO/portfolio/video1.mp4',
				type: 'video',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'publicite'
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
		this.fermetureBloc = function(){
			angular.element(".show").removeClass("show");
		};
		this.filtreSelectionne = null;
		this.triPhoto = function(filtre, tableauPhoto){
			this.elements = tableauPhoto ;
			this.filtreSelectionne = filtre;
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
	app.controller('servicevController', ['$sce', function($sce){
		this.servicevideo ={
			presentation: {
				description: 'Nous produisons vos vidéos que ce soit des :<ul><li>spots de publicité</li><li>clips musicaux</li><li>reportages</li><li>interviews</li></ul><p>Nous offrons également un service optionnel en vous proposant un drône pour filmer un évènement</p>',
				src: $sce.trustAsResourceUrl('https://www.youtube.com/embed/2fSzpdY8ABw'),
				type: 'video/mp4'
			},
			carousels: [
			{
				src: $sce.trustAsResourceUrl('https://www.youtube.com/embed/NA5jurdSbiY'),
				type: 'video/mp4',
				titre: 'Parfum',
				description: 'Réalisation d\'une publicité pour le nouveau parfum Dior Homme. Une fragrance qui évoque la sensualité de la peau et capture le pouvoir d\'attraction de l\'homme idéal. Casting: Denis Loisy et Gila Nazari.'
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
		this.tab = 1;
		this.setTab = function(newValue){
			this.tab = newValue;
		};
		this.isSet = function(tabName){
			return this.tab === tabName;
		};
	}]);
})();
})();

