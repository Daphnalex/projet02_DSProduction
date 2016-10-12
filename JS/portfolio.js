$(document).ready(function(){
	/*Redirection de l'intro à la home*/
	$('#dirigeHomePage').click(function(){
		window.location = "home.html";
	})
	//Redirection du porfolio vers contact
	$('.glp-readmore').click(function(){
		window.location = "contact.html";
	})
	//filtre photo
	$('.filterPhoto').click(function(){
		$('.preview-item').not('.gl-photo').css({
			display:"none"
		}).parent('div').css({
			display:"none"});
		$('.preview-item.gl-photo').css({
			display:"block"
		}).parent('div').css({
			display:"block"
		});
	})
	//filtre pub
	$('.filterPub').click(function(){
		$('.preview-item').not('.gl-video').css({
			display:"none"
		}).parent('div').css({
			display:"none"
		});
		$('.preview-item.gl-video').css({
			display:"block"
			}).parent('div').css({
			display:"block"});
	})
	//filtre tout
	$('.filterAll').click(function(){
		console.log("test")
		$('img.preview-item').css({
			display:"block"
		}).parent('div').css({
			display:"block"});
	})
	//Affiche détails image
	$('#gl-item>img').click(function(){
		if ($(window).width()>=992){
			if ($('#gl-item').find('.active')){
				$('.modal').css({display: "none"});
				console.log('il y a un élément actif');
				//Faire disparaitre le détail de l'élément actif / retirer la classe active
				$('#gl-item.active').removeClass('active');
				$('.gl-preview.active').css({display: 'none'}).removeClass('active');
				//Mettre la photo cliquée en active
				$(this).addClass('active');
				console.log('ici');
				var idImage = $(this).attr('id');
				console.log(idImage);
				var idDetails = $(this).attr('id');
				console.log(idDetails);
				//Faire afficher le détails correspondant
				if (idDetails ==idImage){
					console.log('on rentre dans le détail');
					$('.gl-preview#'+idImage).css({display:'block'}).addClass('active');//.animate({scrollTop: $(this).offset().top},'slow')
				}
			}

		}
	})
	//Fermeture du détail via la croix
	$('.glp-close').click(function(){
		$('.gl-preview.active').css({display:'none'});
	})

})

