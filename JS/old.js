(function(){
	var app = angular.module('portfolio', []);

	app.controller('portfolioCtrl', function(){
		this.elements = [
			{
				id: 0,
				imageMin: '../../IMG/portfolio/image1.png',
				media: '../../IMG/portfolio/image1.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 1,
				imageMin: '../../IMG/portfolio/image2.png',
				media: '../../IMG/portfolio/image2.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 2,
				imageMin: '../../IMG/portfolio/image3.png',
				media: '../../IMG/portfolio/image3.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 3,
				imageMin: '../../IMG/portfolio/image4.png',
				media: '../../IMG/portfolio/image4.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 4,
				imageMin: '../../IMG/portfolio/image5.png',
				media: '../../IMG/portfolio/image5.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 5,
				imageMin: '../../IMG/portfolio/image6.png',
				media: '../../IMG/portfolio/image6.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 6,
				imageMin: '../../IMG/portfolio/image7.png',
				media: '../../IMG/portfolio/image7.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'publicite'
			},
			{
				id: 7,
				imageMin: '../../IMG/portfolio/video1.png',
				media: '../../VIDEO/portfolio/video1.mp4',
				type: 'video',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'publicite'
			},
			{
				id: 8,
				imageMin: '../../IMG/portfolio/image1.png',
				media: '../../IMG/portfolio/image1.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 9,
				imageMin: '../../IMG/portfolio/image2.png',
				media: '../../IMG/portfolio/image2.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 10,
				imageMin: '../../IMG/portfolio/image3.png',
				media: '../../IMG/portfolio/image3.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 11,
				imageMin: '../../IMG/portfolio/image4.png',
				media: '../../IMG/portfolio/image4.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 12,
				imageMin: '../../IMG/portfolio/image5.png',
				media: '../../IMG/portfolio/image5.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 13,
				imageMin: '../../IMG/portfolio/image6.png',
				media: '../../IMG/portfolio/image6.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'book'
			},
			{
				id: 14,
				imageMin: '../../IMG/portfolio/image7.png',
				media: '../../IMG/portfolio/image7.png',
				type: 'image',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'publicite'
			},
			{
				id: 15,
				imageMin: '../../IMG/portfolio/video1.png',
				media: '../../VIDEO/portfolio/video1.mp4',
				type: 'video',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'publicite'
			}
		];

		this.photoSelectionne = null;
		this.showDiv = false;
		this.selectionPhoto = function(element, index){
			this.photoSelectionne = element;
			this.showDiv = true;
			
		};

		

	});


})();