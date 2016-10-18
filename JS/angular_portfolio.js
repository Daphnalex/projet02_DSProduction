(function(){
	var app = angular.module('portfolio', []);

	app.controller('portfolioCtrl', function(){
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
				filtre: 'publicite'
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
				filtre: 'publicite'
			},
			{
				imageMin: '../../IMG/portfolio/video1.png',
				media: '../../VIDEO/portfolio/video1.mp4',
				type: 'video',
				description : 'We are team of creative photographers. We passionate with photography and other creative things. If you are looking professional photography theme with endless possibilities, you come in right place. This template consist of well-organized layers. Tons of features waiting for you.',
				filtre: 'publicite'
			},
		];

		this.photoSelectionne = null;
		this.showDiv = false;
		this.selectionPhoto = function(element){
			this.photoSelectionne = element;
			this.showDiv = true;
		};
	});


})();