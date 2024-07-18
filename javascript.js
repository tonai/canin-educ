function ajouteEvent(objet, typeEvent, nomFunction, typePropagation)
{
	if (objet.addEventListener)
	{
		objet.addEventListener(typeEvent, nomFunction, typePropagation);
	}
	else if (objet.attachEvent)
	{
		objet.attachEvent('on' + typeEvent, nomFunction);
	}
} 
function fonc_accueil()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>BIENVENUE !</h1><br/><br/>';
	corpus+='<p><a href="http://www.woodenpark.fr"><img src="logo/logo_prof.jpg" alt="certification woodenpark" class="float"/></a>';
	corpus+='Il y a en France des millions de chiens.<br/>';
	corpus+='La plupart d’entre eux sont certainement très heureux.</p>';
	corpus+='<p>Mais qu’en est-il de leurs maîtres ?...</p>';
	corpus+='<p><strong>Si votre animal est jeune</strong>, ne lui laissez pas le temps de prendre de mauvaises habitudes et apprenons lui ensemble les règles nécessaires à sa <strong>maîtrise</strong> et à son <strong>bon développement</strong>.</p>';
	corpus+='<p><strong>Si votre animal est plus âgé</strong>, et que vous avez le sentiment de ne pas le contrôler totalement, tant à l’extérieur (il tire sur sa laisse, s’agite à la vue d’un autre chien ou d’un vélo...) qu’à l’intérieur (il saute sur les gens, fait ses besoins dans la maison, monte sur les fauteuils, aboie en votre absence…), <strong>il n’est pas trop tard</strong>.</p>';
	corpus+='<p>Quelque soit l’âge, la race et les troubles de votre chien, je suis à votre service pour que nous élaborions ensemble un <strong>plan d’éducation DOUX et EFFICACE</strong>. Mon métier est de vous redonner confiance en votre animal.</p>';
	corpus+='<p>N’hésitez pas à <a href="index.php?page=contact">me contacter</a> pour tout renseignement.</p>';
	corpus+='<p>A très bientôt,<br/>';
	corpus+='Benoît RENOU</p></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_education()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>L’EDUCATION CANINE</h1><br/><br/>';
	corpus+='<strong>  Education canine à domicile</strong><br/><br/>';
	corpus+='Cette formule permet de régler les problèmes sur le lieu de vie du chien, sans avoir à vous déplacer :<br />';
	corpus+='- Conseils sur les bonnes attitudes à avoir avec son compagnon afin de créer une hiérarchie au sein de la famille <br/>et vivre en harmonie avec lui.<br />';
	corpus+='- Education canine de base : Marche au pied avec et sans laisse, assis, couché, assis pas bouger, et rappel<br /><br /><br />';
	corpus+='<strong>  Education canine individuelle sur terrain<br/>';
	corpus+='<i>(Forfait de 10 leçons, éventuellement complété par 5 leçons en groupe)</i></strong><br/><br/>';
	corpus+='Cette éducation se pratique sur un terrain privé, idéal pour les personnes n’ayant pas de jardin.<br />';
	corpus+='- Les premières leçons serviront au chien à apprendre les ordres de base.<br />';
	corpus+='- Les leçons suivantes se feront dans la rue avec traversée de rue, parking de supermarché, etc.<br />';
	corpus+='- Education canine de base : Marche au pied avec et sans laisse, assis, couché, assis pas bouger, et rappel<br /><br /><br />';
	corpus+='<strong>  Education canine en groupe sur terrain<br/>';
	corpus+='<i>(Forfait de 10 leçons)</i></strong><br/><br/>';
	corpus+='- Cette éducation permet d’apprendre à contrôler son compagnon malgré la source d’attention que crée les<br/> autres chiens autour de lui.<br />';
	corpus+='- Education canine de base : Marche au pied avec et sans laisse, assis, couché, assis pas bouger, et rappel<br /><br /><br />';
	corpus+='<center><strong>INSCRIPTION</strong></center><br/><br/>';
	corpus+='Quelle que soit la formule désirée, un premier rendez-vous est indispensable. Celui-ci est entièrement GRATUIT <br/>et SANS ENGAGEMENT. Il vous suffit de <a href="index.php?page=contact">me contacter</a><br /><br />';
	corpus+='Les leçons d’éducation de groupe se déroulent le Dimanche matin, de 9h00 à 10h00 et de 10h30 à 11h30. L’inscription doit être faite 48h au préalable et un maximum de 7 chiens est accepté par séance. <br /><br />';
	corpus+='N’hésitez pas à <a href="index.php?page=contact">me contacter</a> si vous souhaitez davantage d’informations.<br /><br />';
	corpus+='<center><img src="photos/education/educ_3.jpg" alt="canin-educ.fr"/><br/><br/>';
	corpus+='<img src="photos/education/educ_2.jpg" alt="canin-educ.fr"/><br/><br/>';
	corpus+='<img src="photos/education/educ_1.jpg" alt="canin-educ.fr"/><br/><br/></center></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_sportcanin()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>LE SPORT CANIN</h1><br/><br/>';
	corpus+='<strong>  - Des séances de sport canin, sur terrain spécialisé !</strong><br/><br/>';
	corpus+='Idéal pour défouler, muscler, et amuser les chiens plein d’énergie, je vous propose de réaliser avec lui des séances de sport canin sur un terrain spécialisé et équipé.<br/>';
	corpus+='Divers obstacles sont à votre disposition : balançoire, slalome, table haute, tunnel, sauts...<br/><br/>';
	corpus+='Pour vous garantir un travail efficace et éviter des attentes aux obstacles à franchir, quatre chiens par séance au maximum sont acceptés.<br/><br/>';
	corpus+='Les séances s’effectuent sur RDV :<br/>';
	corpus+='* Du Mardi au Vendredi de 8h00 à 18h00<br/>';
	corpus+='* Le Samedi de 8h00 à 17h00 <br/><br/>';
	corpus+='N’hésitez pas à <a href="index.php?page=contact">me contacter</a> si vous souhaitez davantage d’informations.<br/><br />';
	corpus+='<center><img src="photos/sportcanin/sportcanin_1.jpg" alt="canin-educ.fr"/><br/><br/>';
	corpus+='<img src="photos/sportcanin/sportcanin_3.jpg alt="canin-educ.fr"/><br/><br/>';
	corpus+='<img src="photos/sportcanin/sportcanin_2.jpg" alt="canin-educ.fr"/><br/><br/>';
	corpus+='<img src="photos/sportcanin/sportcanin_4.jpg" alt="canin-educ.fr"/><br/><br/></center>';
	corpus+='</font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_pistage()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>LE PISTAGE</h1><br/><br/>';
	corpus+='<strong>  - Une initiation au pistage, en pleine forêt !</strong><br/><br/>';
	corpus+='Vous n’êtes pas sans savoir que les chiens ont un odorat particulièrement développé...<br/>';
	corpus+='Et bien, à coup sur, celui de votre toutou ne déroge pas à la règle !<br/><br/>';
	corpus+='Pensez-vous cependant qu’il ait assez de flair pour vous retrouver, bien caché à plus de 500 mètres de là ?...<br/>';
	corpus+='Ca se passe le Dimanche matin, en famille si vous le souhaitez, et en pleine forêt de Phalempin.<br/><br/>';
	corpus+='Les séances s’effectuent sur RDV ; <a href="index.php?page=contact">contactez-moi</a> !<br/><br/>';
	corpus+='<center><img src="photos/pistage/pistage_1.jpg" alt="canin-educ.fr"/><br/><br/></center></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_boutique()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>LA BOUTIQUE</h1><br/><br/>';
	corpus+='Puisque la santé et le bien-être de votre animal nécessitent une alimentation saine et adaptée, je suis distributeur du fabricant BEWITAL, pour la région Nord.<br />';
	corpus+='Je vous propose également des accessoires (laisse d’éducation et collier sanitaire).<br /><br />';
	corpus+='<strong>Pour consulter le catalogue et les tarifs, <a href="catalogue.pdf">cliquez ici</a> !</strong><br/><br/>';
	corpus+='N’hésitez pas à <a href="index.php?page=contact">me contacter</a> pour un conseil, une question ou une commande !<br/><br/>';
	corpus+='<center><img src="photos/boutique/sac.jpg" alt="canin-educ.fr"/><br/></center></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_quisuisje()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>QUI SUIS-JE ?</h1><br/><br/>';
	corpus+='<div id="qui">';
	corpus+='<h2>Un professionnel passionné à votre service</h2>';
	corpus+='<h3>Educateur canin ; une passion avant tout</h3>';
	corpus+='<p>C’est à 40 ans bien sonnés que mon affection pour les chiens a pris toute son importance. J’ai tout lâché, pour pouvoir enfin faire de ma passion, mon métier.</p>';
	corpus+='<p>A n’en pas douter, Educateur canin n’est pas une profession comme les autres. Elle demande une patience, une persévérance et une rigueur que seul l’amour de l’animal peut enseigner.</p>';
	corpus+='<h3>Educateur canin ; un métier qui ne s’improvise pas</h3>';
	corpus+='<p>Mais la passion ne suffit pas. Pour comprendre l’animal, analyser au mieux ses difficultés comportementales puis mettre en oeuvre des solutions adaptées, rapides et efficaces, un savoir-faire professionnel est impératif.</p>';
	corpus+='<p>Pour vous garantir un service de qualité, ainsi que des méthodes d’éducation douces et reconnues, je me suis formé à l’école internationale WoodenPark .</p>';
	corpus+='<p>WoodenPark est reconnu dans le monde entier pour sa charte qualité, qui vous assure des techniques de travail saines, sans violence (ni verbale, ni physique) et des résultats à la hauteur de vos espérances.</p>';
	corpus+='<p>N’hésitez pas à <a href="index.php?page=contact">me contacter</a>, que ce soit pour un rendez-vous ou une simple question !<p>';
	corpus+='</div></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_woodenpark()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>WOODENPARK</h1><br/>';
	corpus+='<p class="center">';
	corpus+='<a href="http://www.woodenpark.fr"><img src="photos/woodenpark/banniere.jpg" alt="banniere woodenpark"/></a><br/><br />';
	corpus+='</p><center>J’ai été formé et certifié par l’école internationale Wooden Park.<br /> N’hésitez pas à visiter leur site web en cliquant sur la bannière ci-dessus.<br /><br />';
	corpus+='<img src="photos/woodenpark/wooden_1.jpg" alt="canin-educ.fr"/><br /><br />';
	corpus+='<img src="photos/woodenpark/wooden_2.jpg" alt="canin-educ.fr"/><br /><br />';
	corpus+='<img src="photos/woodenpark/wooden_3.jpg" alt="canin-educ.fr"/><br /><br/></center></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_contact()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>CONTACTS</h1><br/>';
	corpus+='<p>Si vous souhaitez des informations complémentaires ou prendre RDV, contactez-moi... </p><dl>';
	corpus+='<dt><b> - Par e-mail (réponse rapide assurée !) :</b></dt>';
	corpus+='<dd><a  href="mailto:postmaster@canin-educ.fr">postmaster@canin-educ.fr</a></dd><br/>';
	corpus+='<dt><b> - Par téléphone :</b></dt>';
	corpus+='<dd>06 25 27 29 59</dd><br/>';
	corpus+='<dt><b> - Par courrier :</b></dt>';
	corpus+='<dd>Benoît RENOU<br/>';
	corpus+='6, rue Honoré De Balzac<br/>';
	corpus+='59147 GONDECOURT</dd><br />';
	corpus+='<dt><b> - Directement au terrain d’éducation et de sport canin, pendant les heures de permanences :</b></dt>';
	corpus+='<dd>Du Mardi au Vendredi, de 18h00 à 19h00<br/>';
	corpus+='Le Samedi, de 13h00 à 14h30</dd><br />';
	corpus+='<dt><b> - L’adresse du terrain :</b></dt>';
	corpus+='<dd>39, route de Carvin<br/>';
	corpus+='59112 ANNOEULLIN<br/>';
	corpus+='(Avancer jusqu’au bout de l’allée - Ne pas s’adresser à la maison)</dd></dl></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function ouvrir(num) {
	switch (num)
	{
		case 1:
		window.open('photos/1.jpg', 'Photo', 'width=667,height=1000,scrollbars=1');
		break;
		case 2:
		window.open('photos/2.jpg', 'Photo', 'width=667,height=1000,scrollbars=1');
		break;
		case 3:
		window.open('photos/3.jpg', 'Photo', 'width=667,height=1000,scrollbars=1');
		break;
		case 4:
		window.open('photos/4.jpg', 'Photo', 'width=667,height=1000,scrollbars=1');
		break;
		case 5:
		window.open('photos/5.jpg', 'Photo', 'width=667,height=1000,scrollbars=1');
		break;
		case 6:
		window.open('photos/6.jpg', 'Photo', 'width=667,height=1000,scrollbars=1');
		break;
		case 7:
		window.open('photos/7.jpg', 'Photo', 'width=1000,height=667,scrollbars=1');
		break;
		case 8:
		window.open('photos/8.jpg', 'Photo', 'width=1000,height=667,scrollbars=1');
		break;
		case 9:
		window.open('photos/9.jpg', 'Photo', 'width=1000,height=667,scrollbars=1');
		break;
		case 10:
		window.open('woodenpark/1.jpg', 'Photo', 'width=800,height=533,scrollbars=1');
		break;
		case 11:
		window.open('woodenpark/2.jpg', 'Photo', 'width=533,height=800,scrollbars=1');
		break;
		case 12:
		window.open('woodenpark/3.jpg', 'Photo', 'width=800,height=533,scrollbars=1');
		break;
	}
}