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
	};
	$AcuteDocs_Client_App.__typeName = 'AcuteDocs.Client.App';
	global.AcuteDocs.Client.App = $AcuteDocs_Client_App;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.HomeController
	var $AcuteDocs_Client_HomeController = function(page) {
		this.$_page = null;
		Acute.Controller.call(this);
		this.$_page = page;
	};
	$AcuteDocs_Client_HomeController.__typeName = 'AcuteDocs.Client.HomeController';
	global.AcuteDocs.Client.HomeController = $AcuteDocs_Client_HomeController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.NavBarController
	var $AcuteDocs_Client_NavBarController = function(page) {
		this.$_page = null;
		Acute.Controller.call(this);
		this.$_page = page;
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
		this.$1$TitleField = null;
		this.CurrentNavBarItemScriptName = null;
	};
	$AcuteDocs_Client_Page.__typeName = 'AcuteDocs.Client.Page';
	global.AcuteDocs.Client.Page = $AcuteDocs_Client_Page;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.PageController
	var $AcuteDocs_Client_PageController = function(page) {
		this.$_page = null;
		Acute.Controller.call(this);
		this.$_page = page;
	};
	$AcuteDocs_Client_PageController.__typeName = 'AcuteDocs.Client.PageController';
	global.AcuteDocs.Client.PageController = $AcuteDocs_Client_PageController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.SetupController
	var $AcuteDocs_Client_SetupController = function(page) {
		this.$_page = null;
		Acute.Controller.call(this);
		this.$_page = page;
	};
	$AcuteDocs_Client_SetupController.__typeName = 'AcuteDocs.Client.SetupController';
	global.AcuteDocs.Client.SetupController = $AcuteDocs_Client_SetupController;
	////////////////////////////////////////////////////////////////////////////////
	// AcuteDocs.Client.WalkThroughController
	var $AcuteDocs_Client_WalkThroughController = function(page) {
		this.$_page = null;
		Acute.Controller.call(this);
		this.$_page = page;
	};
	$AcuteDocs_Client_WalkThroughController.__typeName = 'AcuteDocs.Client.WalkThroughController';
	global.AcuteDocs.Client.WalkThroughController = $AcuteDocs_Client_WalkThroughController;
	ss.initClass($AcuteDocs_Client_App, $asm, {
		configureRoutes: function(routeProvider) {
			var $t1 = new (ss.makeGenericType(Acute.RouteConfig$1, [$AcuteDocs_Client_SetupController]))();
			$t1.set_templateUrl('templates/setup.html');
			routeProvider.when('/setup', $t1);
			var $t2 = new (ss.makeGenericType(Acute.RouteConfig$1, [$AcuteDocs_Client_WalkThroughController]))();
			$t2.set_templateUrl('templates/walk-through.html');
			routeProvider.when('/walk-through', $t2);
			var $t3 = new (ss.makeGenericType(Acute.RouteConfig$1, [$AcuteDocs_Client_HomeController]))();
			$t3.set_templateUrl('templates/home.html');
			routeProvider.otherwise($t3);
		}
	}, Acute.App);
	ss.initClass($AcuteDocs_Client_HomeController, $asm, {
		control: function(scope) {
			this.$_page.set_Title('Acute');
			this.$_page.set_CurrentNavBarItem(0);
		}
	}, Acute.Controller);
	ss.initClass($AcuteDocs_Client_NavBarController, $asm, {
		control: function(scope) {
			scope.Page = this.$_page;
		}
	}, Acute.Controller);
	ss.initEnum($AcuteDocs_Client_NavBarItem, $asm, { Home: 0, Setup: 1, Learn: 2 });
	ss.initClass($AcuteDocs_Client_Page, $asm, {
		get_Title: function() {
			return this.$1$TitleField;
		},
		set_Title: function(value) {
			this.$1$TitleField = value;
		},
		get_CurrentNavBarItem: function() {
			return this.$_currentNavBarItem;
		},
		set_CurrentNavBarItem: function(value) {
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
	ss.initClass($AcuteDocs_Client_PageController, $asm, {
		control: function(scope) {
			scope.Page = this.$_page;
		}
	}, Acute.Controller);
	ss.initClass($AcuteDocs_Client_SetupController, $asm, {
		control: function(scope) {
			this.$_page.set_Title('Setup - Acute');
			this.$_page.set_CurrentNavBarItem(1);
		}
	}, Acute.Controller);
	ss.initClass($AcuteDocs_Client_WalkThroughController, $asm, {
		control: function(scope) {
			this.$_page.set_Title('WalkThrough - Acute');
			this.$_page.set_CurrentNavBarItem(2);
		}
	}, Acute.Controller);
	ss.setMetadata($AcuteDocs_Client_App, { members: [{ name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($AcuteDocs_Client_HomeController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_NavBarController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_Page, { members: [{ name: '.ctor', type: 1, params: [] }] });
	ss.setMetadata($AcuteDocs_Client_PageController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_SetupController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
	ss.setMetadata($AcuteDocs_Client_WalkThroughController, { members: [{ name: '.ctor', type: 1, params: [$AcuteDocs_Client_Page] }] });
})();
Acute.Bootstrap();