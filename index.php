
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" >
	<head>
		<title>Benoît RENOU - Educateur canin</title>
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<meta name="author" content="Tony CABAYE" />
		<meta name="description" content="Benoît Renou, Educateur canin dans le Nord (59)" />
		<meta name="keywords" content="Benoît Renou, éducateur, canin, chien, élever, éduquer, wooden park, nord, lille, pistage, agility, sport canin, 59, dresser" />
		<link rel="stylesheet" media="screen" type="text/css" title="Design" href="design.css">
		<script language="javascript" src="javascript.js">
		</script>
		<!--[if lte IE 6]>
			<style type="text/css">
				#corps {
				margin-left: 167px;}	
			</style>
		<![endif]-->
	</head>
	<body>
		<div id="page">
			<img src="logo/banniere.jpg" alt="canin-educ.fr"/>
			<div id="menu">
				<object type="application/x-shockwave-flash" data="dewplayer-mini.swf?mp3=son/fond_musique_site.mp3&amp;autostart=1&amp;autoreplay=1&amp;showtime=1" width="150" height="20"><param name="wmode" value="transparent"><param name="movie" value="dewplayer-mini.swf?mp3=son/fond_musique_site.mp3&amp;autostart=1&amp;autoreplay=1&amp;showtime=1" /></object>
				<script language="javascript">
				var menu='';
				menu+='<a href="javascript:fonc_accueil()"><font face="Arial"><b>Accueil</b></font></a>';
				menu+='<a href="javascript:fonc_education()"><font face="Arial"><b>L’éducation</b></font></a>';
				menu+='<a href="javascript:fonc_sportcanin()"><font face="Arial"><b>Sport canin</b></font></a>';
				menu+='<a href="javascript:fonc_pistage()"><font face="Arial"><b>Le pistage</b></font></a>';
				menu+='<a href="javascript:fonc_boutique()"><font face="Arial"><b>La boutique</b></font></a>';
				menu+='<a href="javascript:fonc_quisuisje()"><font face="Arial"><b>Qui suis-je ?</b></font></a>';
				menu+='<a href="javascript:fonc_woodenpark()"><font face="Arial"><b>Woodenpark</b></font></a>';
				menu+='<a href="javascript:fonc_contact()"><font face="Arial"><b>Contacts</b></font></a>';
				document.write(menu);
				</script>
				<noscript>
				<font face="Arial"><a href="index.php?page=accueil"><b>Accueil</b></a>
				<a href="index.php?page=education"><b>L'Education</b></a>
				<a href="index.php?page=sportcanin"><b>Sport canin</b></a>
				<a href="index.php?page=pistage"><b>Le pistage</b></a>
				<a href="index.php?page=boutique"><b>La boutique</b></a>
				<a href="index.php?page=qui_suis-je"><b>Qui suis-je ?</b></a>
				<a href="index.php?page=woodenpark"><b>Woodenpark</b></a>
				<a href="index.php?page=contact"><b>Contacts</b></a></font>
				</noscript>
				<?php
					mysql_connect("mysql5-5", "canineducateur", "f75IaxbG");
					mysql_select_db("canineducateur");
					$adresse_ip=$_SERVER['REMOTE_ADDR'];
					$timestamp=time();
					$reponse=mysql_query("SELECT COUNT(*) AS existe FROM visiteur WHERE ip='$adresse_ip'");
					//$reponse=mysql_query('SELECT COUNT  AS existe FROM visiteur WHERE ip='.$adresse_ip);
					$nombre=mysql_fetch_array($reponse);
					$reponse=mysql_query("SELECT * FROM visiteur WHERE ip='$adresse_ip'");
					$donnees=mysql_fetch_array($reponse);
					$ancien_temp=$donnees['timestamp'];
					if ($nombre['existe']==0)
					{
						mysql_query("INSERT INTO visiteur VALUES('','$adresse_ip', '$timestamp')");
					}
					else
					{
						while ($donnees=mysql_fetch_array($reponse))
							{
								$ancien_temp=$donnees['timestamp'];
							}
						if ($ancien_temp<$timestamp-10*60)
						{
							mysql_query("INSERT INTO visiteur VALUES('','$adresse_ip','$timestamp')");
						}
						else
						{
							mysql_query("UPDATE visiteur SET timestamp='$timestamp' WHERE (ip='$adresse_ip') AND (timestamp='$ancien_temp')");
						}
					}
					$reponse=mysql_query('SELECT COUNT(*) AS visites FROM visiteur');
					$donnees=mysql_fetch_array($reponse);
					echo '<p>Nombre de visiteurs : <br/>'.$donnees['visites'].'</p>';
					mysql_close();
				?>
			</div>
			<div id="corps">
				<p>
				<?php
					if(isset($_GET['page']))
					{
						$page=$_GET['page'];
					}
					else
					{
						$page="accueil";
					}
					if ($page=="accueil")
					{
						include('accueil.html');
					}
					elseif ($page=="education")
					{
						include('education.html');
					}
					elseif ($page=="sportcanin")
					{
						include('sportcanin.html');
					}
					elseif ($page=="pistage")
					{
						include('pistage.html');
					}
					elseif ($page=="boutique")
					{
						include('boutique.html');
					}
					elseif ($page=="qui_suis-je")
					{
						include('qui_suis-je.html');
					}
					elseif ($page=="woodenpark")
					{
						include('woodenpark.html');
					}
					elseif ($page=="contact")
					{
						include('contact.html');
					}
					else
					{
						echo "Erreur dans la page";
					}
				?>
				</p>
			</div>
			<img src="logo/footer.jpg" alt="footer" id="footer"/>
		</div>
	</body>
</html>