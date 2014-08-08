(function() {
	'use strict';
	var $asm = {};
	global.AcuteDocs = global.AcuteDocs || {};
	global.AcuteDocs.Client = global.AcuteDocs.Client || {};
	ss.initAssembly($asm, 'AcuteDocs.Client');
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.App
	var $AcuteDocs_Client_App = function() {
		Acute.App.call(this);
		this.service($AcuteDocs_Client_Page).call(this);
		this.service($AcuteDocs_Client_Versions).call(this);
	};
	$AcuteDocs_Client_App.__typeName = 'AcuteDocs.Client.App';
	global.AcuteDocs.Client.App = $AcuteDocs_Client_App;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.ConceptsController
	var $AcuteDocs_Client_ConceptsController = function(page) {
		Acute.Controller.call(this);
		page.SetPage('Concepts - Acute', 2, false);
	};
	$AcuteDocs_Client_ConceptsController.__typeName = 'AcuteDocs.Client.ConceptsController';
	global.AcuteDocs.Client.ConceptsController = $AcuteDocs_Client_ConceptsController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.HomeController
	var $AcuteDocs_Client_HomeController = function(page) {
		Acute.Controller.call(this);
		page.SetPage('Acute', 0, false);
	};
	$AcuteDocs_Client_HomeController.__typeName = 'AcuteDocs.Client.HomeController';
	global.AcuteDocs.Client.HomeController = $AcuteDocs_Client_HomeController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.NavBarController
	var $AcuteDocs_Client_NavBarController = function(scope, page, versions) {
		Acute.Controller.call(this);
		scope.get_model().Page = page;
		scope.get_model().Versions = versions.get_AllVersions();
		scope.get_model().SelectedVersion = versions.SelectedVersion;
		scope.get_model().OnVersionSelected = function(version) {
			versions.SelectedVersion = version;
			scope.get_model().SelectedVersion = version;
		};
	};
	$AcuteDocs_Client_NavBarController.__typeName = 'AcuteDocs.Client.NavBarController';
	global.AcuteDocs.Client.NavBarController = $AcuteDocs_Client_NavBarController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.NavBarItem
	var $AcuteDocs_Client_NavBarItem = function() {
	};
	$AcuteDocs_Client_NavBarItem.__typeName = 'AcuteDocs.Client.NavBarItem';
	global.AcuteDocs.Client.NavBarItem = $AcuteDocs_Client_NavBarItem;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.Page
	var $AcuteDocs_Client_Page = function() {
		this.$_currentNavBarItem = 0;
		this.Title = null;
		this.IsVersionSpecific = false;
		this.CurrentNavBarItemScriptName = null;
	};
	$AcuteDocs_Client_Page.__typeName = 'AcuteDocs.Client.Page';
	global.AcuteDocs.Client.Page = $AcuteDocs_Client_Page;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.PageController
	var $AcuteDocs_Client_PageController = function(scope, page) {
		Acute.Controller.call(this);
		scope.get_model().Page = page;
	};
	$AcuteDocs_Client_PageController.__typeName = 'AcuteDocs.Client.PageController';
	global.AcuteDocs.Client.PageController = $AcuteDocs_Client_PageController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.SetupController
	var $AcuteDocs_Client_SetupController = function(page) {
		Acute.Controller.call(this);
		page.SetPage('Setup - Acute', 1, true);
	};
	$AcuteDocs_Client_SetupController.__typeName = 'AcuteDocs.Client.SetupController';
	global.AcuteDocs.Client.SetupController = $AcuteDocs_Client_SetupController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.Versions
	var $AcuteDocs_Client_Versions = function() {
		this.SelectedVersion = $AcuteDocs_Client_Versions.DefaultVersion;
	};
	$AcuteDocs_Client_Versions.__typeName = 'AcuteDocs.Client.Versions';
	global.AcuteDocs.Client.Versions = $AcuteDocs_Client_Versions;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.WalkThroughController
	var $AcuteDocs_Client_WalkThroughController = function(page) {
		Acute.Controller.call(this);
		page.SetPage('WalkThrough - Acute', 2, false);
	};
	$AcuteDocs_Client_WalkThroughController.__typeName = 'AcuteDocs.Client.WalkThroughController';
	global.AcuteDocs.Client.WalkThroughController = $AcuteDocs_Client_WalkThroughController;
	ss.initClass($AcuteDocs_Client_App, $asm, {
		configureRoutes: function(routeProvider) {
			var $t1 = new (ss.makeGenericType(Acute.RouteConfig$1, [$AcuteDocs_Client_SetupController]))();
			$t1.set_templateUrl('templates/setup.html');
			routeProvider.when('/setup', $t1);
			var $t2 = new (ss.makeGenericType(Acute.RouteConfig$1, [$AcuteDocs_Client_ConceptsController]))();
			$t2.set_templateUrl('templates/concepts.html');
			routeProvider.when('/concepts', $t2);
			var $t3 = new (ss.makeGenericType(Acute.RouteConfig$1, [$AcuteDocs_Client_WalkThroughController]))();
			$t3.set_templateUrl('templates/walk-through.html');
			routeProvider.when('/walk-through', $t3);
			var $t4 = new (ss.makeGenericType(Acute.RouteConfig$1, [$AcuteDocs_Client_HomeController]))();
			$t4.set_templateUrl('templates/home.html');
			routeProvider.otherwise($t4);
		}
	}, Acute.App);
	ss.initClass($AcuteDocs_Client_ConceptsController, $asm, {}, Acute.Controller);
	ss.initClass($AcuteDocs_Client_HomeController, $asm, {}, Acute.Controller);
	ss.initClass($AcuteDocs_Client_NavBarController, $asm, {}, Acute.Controller);
	ss.initEnum($AcuteDocs_Client_NavBarItem, $asm, { Home: 0, Setup: 1, Learn: 2 });
	ss.initClass($AcuteDocs_Client_Page, $asm, {
		SetPage: function(title, currentNavBarItem, isVersionSpecific) {
			this.Title = title;
			this.IsVersionSpecific = isVersionSpecific;
			this.set_$CurrentNavBarItem(currentNavBarItem);
		},
		get_$CurrentNavBarItem: function() {
			return this.$_currentNavBarItem;
		},
		set_$CurrentNavBarItem: function(value) {
			this.$_currentNavBarItem = value;
			switch (value) {
				case 0: {
					this.CurrentNavBarItemScriptName = 'home';
					break;
				}
				case 1: {
					this.CurrentNavBarItemScriptName = 'setup';
					break;
				}
				case 2: {
					this.CurrentNavBarItemScriptName = 'learn';
					break;
				}
				default: {
					throw new ss.Exception('Unexpected nav-bar item');
				}
			}
		}
	});
	ss.initClass($AcuteDocs_Client_PageController, $asm, {}, Acute.Controller);
	ss.initClass($AcuteDocs_Client_SetupController, $asm, {}, Acute.Controller);
	ss.initClass($AcuteDocs_Client_Versions, $asm, {
		get_AllVersions: function() {
			return ['v0.2', 'v0.1'];
		}
	});
	ss.initClass($AcuteDocs_Client_WalkThroughController, $asm, {}, Acute.Controller);
	ss.setMetadata($AcuteDocs_Client_App, { members: [{ name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($AcuteDocs_Client_ConceptsController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_HomeController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_NavBarController, { members: [{ name: '.ctor', type: 1, params: [Acute.Scope, $AcuteDocs_Client_Page, $AcuteDocs_Client_Versions] }] });
	ss.setMetadata($AcuteDocs_Client_Page, { members: [{ name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($AcuteDocs_Client_PageController, { members: [{ name: '.ctor', type: 1, params: [Acute.Scope, $AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_SetupController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_Versions, { members: [{ name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($AcuteDocs_Client_WalkThroughController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	$AcuteDocs_Client_Versions.DefaultVersion = 'v0.1';
})();
Acute.Bootstrap();