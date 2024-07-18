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
	corpus+='La plupart d�entre eux sont certainement tr�s heureux.</p>';
	corpus+='<p>Mais qu�en est-il de leurs ma�tres ?...</p>';
	corpus+='<p><strong>Si votre animal est jeune</strong>, ne lui laissez pas le temps de prendre de mauvaises habitudes et apprenons lui ensemble les r�gles n�cessaires � sa <strong>ma�trise</strong> et � son <strong>bon d�veloppement</strong>.</p>';
	corpus+='<p><strong>Si votre animal est plus �g�</strong>, et que vous avez le sentiment de ne pas le contr�ler totalement, tant � l�ext�rieur (il tire sur sa laisse, s�agite � la vue d�un autre chien ou d�un v�lo...) qu�� l�int�rieur (il saute sur les gens, fait ses besoins dans la maison, monte sur les fauteuils, aboie en votre absence�), <strong>il n�est pas trop tard</strong>.</p>';
	corpus+='<p>Quelque soit l��ge, la race et les troubles de votre chien, je suis � votre service pour que nous �laborions ensemble un <strong>plan d��ducation DOUX et EFFICACE</strong>. Mon m�tier est de vous redonner confiance en votre animal.</p>';
	corpus+='<p>N�h�sitez pas � <a href="index.php?page=contact">me contacter</a> pour tout renseignement.</p>';
	corpus+='<p>A tr�s bient�t,<br/>';
	corpus+='Beno�t RENOU</p></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_education()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>L�EDUCATION CANINE</h1><br/><br/>';
	corpus+='<strong>  Education canine � domicile</strong><br/><br/>';
	corpus+='Cette formule permet de r�gler les probl�mes sur le lieu de vie du chien, sans avoir � vous d�placer :<br />';
	corpus+='- Conseils sur les bonnes attitudes � avoir avec son compagnon afin de cr�er une hi�rarchie au sein de la famille <br/>et vivre en harmonie avec lui.<br />';
	corpus+='- Education canine de base : Marche au pied avec et sans laisse, assis, couch�, assis pas bouger, et rappel<br /><br /><br />';
	corpus+='<strong>  Education canine individuelle sur terrain<br/>';
	corpus+='<i>(Forfait de 10 le�ons, �ventuellement compl�t� par 5 le�ons en groupe)</i></strong><br/><br/>';
	corpus+='Cette �ducation se pratique sur un terrain priv�, id�al pour les personnes n�ayant pas de jardin.<br />';
	corpus+='- Les premi�res le�ons serviront au chien � apprendre les ordres de base.<br />';
	corpus+='- Les le�ons suivantes se feront dans la rue avec travers�e de rue, parking de supermarch�, etc.<br />';
	corpus+='- Education canine de base : Marche au pied avec et sans laisse, assis, couch�, assis pas bouger, et rappel<br /><br /><br />';
	corpus+='<strong>  Education canine en groupe sur terrain<br/>';
	corpus+='<i>(Forfait de 10 le�ons)</i></strong><br/><br/>';
	corpus+='- Cette �ducation permet d�apprendre � contr�ler son compagnon malgr� la source d�attention que cr�e les<br/> autres chiens autour de lui.<br />';
	corpus+='- Education canine de base : Marche au pied avec et sans laisse, assis, couch�, assis pas bouger, et rappel<br /><br /><br />';
	corpus+='<center><strong>INSCRIPTION</strong></center><br/><br/>';
	corpus+='Quelle que soit la formule d�sir�e, un premier rendez-vous est indispensable. Celui-ci est enti�rement GRATUIT <br/>et SANS ENGAGEMENT. Il vous suffit de <a href="index.php?page=contact">me contacter</a><br /><br />';
	corpus+='Les le�ons d��ducation de groupe se d�roulent le Dimanche matin, de 9h00 � 10h00 et de 10h30 � 11h30. L�inscription doit �tre faite 48h au pr�alable et un maximum de 7 chiens est accept� par s�ance. <br /><br />';
	corpus+='N�h�sitez pas � <a href="index.php?page=contact">me contacter</a> si vous souhaitez davantage d�informations.<br /><br />';
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
	corpus+='<strong>  - Des s�ances de sport canin, sur terrain sp�cialis� !</strong><br/><br/>';
	corpus+='Id�al pour d�fouler, muscler, et amuser les chiens plein d��nergie, je vous propose de r�aliser avec lui des s�ances de sport canin sur un terrain sp�cialis� et �quip�.<br/>';
	corpus+='Divers obstacles sont � votre disposition : balan�oire, slalome, table haute, tunnel, sauts...<br/><br/>';
	corpus+='Pour vous garantir un travail efficace et �viter des attentes aux obstacles � franchir, quatre chiens par s�ance au maximum sont accept�s.<br/><br/>';
	corpus+='Les s�ances s�effectuent sur RDV :<br/>';
	corpus+='* Du Mardi au Vendredi de 8h00 � 18h00<br/>';
	corpus+='* Le Samedi de 8h00 � 17h00 <br/><br/>';
	corpus+='N�h�sitez pas � <a href="index.php?page=contact">me contacter</a> si vous souhaitez davantage d�informations.<br/><br />';
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
	corpus+='<strong>  - Une initiation au pistage, en pleine for�t !</strong><br/><br/>';
	corpus+='Vous n��tes pas sans savoir que les chiens ont un odorat particuli�rement d�velopp�...<br/>';
	corpus+='Et bien, � coup sur, celui de votre toutou ne d�roge pas � la r�gle !<br/><br/>';
	corpus+='Pensez-vous cependant qu�il ait assez de flair pour vous retrouver, bien cach� � plus de 500 m�tres de l� ?...<br/>';
	corpus+='Ca se passe le Dimanche matin, en famille si vous le souhaitez, et en pleine for�t de Phalempin.<br/><br/>';
	corpus+='Les s�ances s�effectuent sur RDV ; <a href="index.php?page=contact">contactez-moi</a> !<br/><br/>';
	corpus+='<center><img src="photos/pistage/pistage_1.jpg" alt="canin-educ.fr"/><br/><br/></center></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_boutique()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>LA BOUTIQUE</h1><br/><br/>';
	corpus+='Puisque la sant� et le bien-�tre de votre animal n�cessitent une alimentation saine et adapt�e, je suis distributeur du fabricant BEWITAL, pour la r�gion Nord.<br />';
	corpus+='Je vous propose �galement des accessoires (laisse d��ducation et collier sanitaire).<br /><br />';
	corpus+='<strong>Pour consulter le catalogue et les tarifs, <a href="catalogue.pdf">cliquez ici</a> !</strong><br/><br/>';
	corpus+='N�h�sitez pas � <a href="index.php?page=contact">me contacter</a> pour un conseil, une question ou une commande !<br/><br/>';
	corpus+='<center><img src="photos/boutique/sac.jpg" alt="canin-educ.fr"/><br/></center></font>';
	var corps=document.getElementById("corps");
	corps.innerHTML=corpus;
}
function fonc_quisuisje()
{
	var corpus='';
	corpus+='<font face="Arial"><h1>QUI SUIS-JE ?</h1><br/><br/>';
	corpus+='<div id="qui">';
	corpus+='<h2>Un professionnel passionn� � votre service</h2>';
	corpus+='<h3>Educateur canin ; une passion avant tout</h3>';
	corpus+='<p>C�est � 40 ans bien sonn�s que mon affection pour les chiens a pris toute son importance. J�ai tout l�ch�, pour pouvoir enfin faire de ma passion, mon m�tier.</p>';
	corpus+='<p>A n�en pas douter, Educateur canin n�est pas une profession comme les autres. Elle demande une patience, une pers�v�rance et une rigueur que seul l�amour de l�animal peut enseigner.</p>';
	corpus+='<h3>Educateur canin ; un m�tier qui ne s�improvise pas</h3>';
	corpus+='<p>Mais la passion ne suffit pas. Pour comprendre l�animal, analyser au mieux ses difficult�s comportementales puis mettre en oeuvre des solutions adapt�es, rapides et efficaces, un savoir-faire professionnel est imp�ratif.</p>';
	corpus+='<p>Pour vous garantir un service de qualit�, ainsi que des m�thodes d��ducation douces et reconnues, je me suis form� � l��cole internationale WoodenPark .</p>';
	corpus+='<p>WoodenPark est reconnu dans le monde entier pour sa charte qualit�, qui vous assure des techniques de travail saines, sans violence (ni verbale, ni physique) et des r�sultats � la hauteur de vos esp�rances.</p>';
	corpus+='<p>N�h�sitez pas � <a href="index.php?page=contact">me contacter</a>, que ce soit pour un rendez-vous ou une simple question !<p>';
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
	corpus+='</p><center>J�ai �t� form� et certifi� par l��cole internationale Wooden Park.<br /> N�h�sitez pas � visiter leur site web en cliquant sur la banni�re ci-dessus.<br /><br />';
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
	corpus+='<p>Si vous souhaitez des informations compl�mentaires ou prendre RDV, contactez-moi... </p><dl>';
	corpus+='<dt><b> - Par e-mail (r�ponse rapide assur�e !) :</b></dt>';
	corpus+='<dd><a  href="mailto:postmaster@canin-educ.fr">postmaster@canin-educ.fr</a></dd><br/>';
	corpus+='<dt><b> - Par t�l�phone :</b></dt>';
	corpus+='<dd>06 25 27 29 59</dd><br/>';
	corpus+='<dt><b> - Par courrier :</b></dt>';
	corpus+='<dd>Beno�t RENOU<br/>';
	corpus+='6, rue Honor� De Balzac<br/>';
	corpus+='59147 GONDECOURT</dd><br />';
	corpus+='<dt><b> - Directement au terrain d��ducation et de sport canin, pendant les heures de permanences :</b></dt>';
	corpus+='<dd>Du Mardi au Vendredi, de 18h00 � 19h00<br/>';
	corpus+='Le Samedi, de 13h00 � 14h30</dd><br />';
	corpus+='<dt><b> - L�adresse du terrain :</b></dt>';
	corpus+='<dd>39, route de Carvin<br/>';
	corpus+='59112 ANNOEULLIN<br/>';
	corpus+='(Avancer jusqu�au bout de l�all�e - Ne pas s�adresser � la maison)</dd></dl></font>';
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