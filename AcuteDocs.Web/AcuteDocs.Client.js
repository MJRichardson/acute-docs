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
	};
	$AcuteDocs_Client_App.__typeName = 'AcuteDocs.Client.App';
	global.AcuteDocs.Client.App = $AcuteDocs_Client_App;
	ss.initClass($AcuteDocs_Client_App, $asm, {}, Acute.App);
	ss.setMetadata($AcuteDocs_Client_App, { members: [{ name: '.ctor', type: 1, params: [] }] });
})();
Acute.Bootstrap();