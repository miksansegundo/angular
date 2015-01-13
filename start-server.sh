http-server -c-1 -a localhost<!DOCTYPE html>
<html id="ng-app" ng-app="SWSPortal">
	<head>
		<meta charset="utf-8"/>
		<title translate="APP_NAME">Hotel Partners Portal - Hotelbeds</title>
		<!-- Common CSS -->
		<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css"/>
		<link rel="stylesheet" type="text/css" href="css/bootstrap.css"/>
		<link rel="stylesheet" type="text/css" href="css/select.min.css"/>
		<link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/select2/3.4.5/select2.css"/>
		<link rel="stylesheet" type="text/css" href="http://cdnjs.cloudflare.com/ajax/libs/selectize.js/0.8.5/css/selectize.default.css"/>

		<!-- Page specific CSS -->
		<link rel="stylesheet" type="text/css" href="css/supplier-hotelbeds.css"/>
		<link rel="stylesheet" type="text/css" href="modules/home/home-styles.css"/>
		<style type="text/css">
			#header .logo a {
				color:#fff;
				font-size:1.6em;
				font-variant:small-caps;
			}
			.sections .container {
				background-color: #fff;
				border-bottom:2px solid #ccc;
				margin-top:2em;
				padding:0;
			}
			.sections .container h2 {
				border-bottom: 1px solid #ccc;
				font-size:1em;
				font-weight:bold;
				margin: 0 0 1.5em 0.5em;
				padding:0.5em;
			}
			.condition-group {
				float:left;
				width:46%;
				margin:0 1.5em 1.5em;
			}
			.condition-group:nth-child(2n) {
				clear:left;
			}
			.condition-group span { font-weight:bold; display:block; }
			.condition-group ul { margin:0; padding:0; list-style-position:inside; font-size:0.9em }

			.select2 > .select2-choice.ui-select-match {
			  /* Because of the inclusion of Bootstrap */
			  height: 29px;
			}

			/* Fix: the value set in the global stylesheet (1360px) is greater
					than the minimum viewport width, and provokes unwanted horizontal
					scrolling in the page. */
			@media (min-width: 1300px) {
				.container {
					width: 1260px;
				}
			}
		</style>

<!-- 		<script>SimpleUI = false</script> -->
		<script type="text/javascript" src="js/modernizr.js"></script>
		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.3/es5-sham.js"></script>
			<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.0.3/es5-shim.js"></script>
			<script type="text/javascript" src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script type="text/javascript" src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
			<script type="text/javascript" src="js/ie8.js"></script>
			<script>window.SimpleUI = true</script>
		<![endif]-->
	</head>
	<body class="index ng-cloak" ng-controller="SWSPortalController">
		<div id="wrapper">
			
			<header ng-include="partials.header" id="header" class="navbar-default" ></header>
			
			<nav ng-if="user.hotel" ng-include="partials.subHeader" id="sub-header" class="navbar-default"  role="navigation"></nav>
			
			<div class="wrap"> 
	
				<div class="container">
					<div ng-view></div>
				</div>
			
			</div> <!-- end wrap -->
				
			<footer ng-include="partials.footer" id="footer" ></footer>
			
		</div> <!-- end wrapper -->
		
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="js/angular.js"></script>
		<script type="text/javascript" src="js/angular-route.js"></script>
		<script type="text/javascript" src="js/angular-sanitize.min.js"></script>
		<script type="text/javascript" src="js/angular-load.js"></script>
		<script type="text/javascript" src="js/angular-translate.min.js"></script>
		<script type="text/javascript" src="js/angular-translate-loader-static-files.js"></script>
		<script type="text/javascript" src="js/angular-ui-router.min.js"></script>
		<script type="text/javascript" src="js/ui-bootstrap-tpls-0.12.0.min.js"></script>
		<script type="text/javascript" src="js/select.min.js"></script>

		<script type="text/javascript" src="modules/swsPortal-app.js"></script>
		<script type="text/javascript" src="modules/swsPortal-config.js"></script>
		<script type="text/javascript" src="modules/swsPortal-factory.js"></script>
		<script type="text/javascript" src="modules/swsPortal-controller.js"></script>
		
		<script type="text/javascript" src="modules/common/tui-class-by-service.js"></script>
		
		<script type="text/javascript" src="modules/booking/booking-factory.js"></script>
		<script type="text/javascript" src="modules/booking/booking-controller.js"></script>
		
		<script type="text/javascript" src="modules/selectHotel/selectHotel-controller.js"></script>
		
	</body>
</html>
