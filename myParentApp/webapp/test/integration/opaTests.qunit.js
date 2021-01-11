/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"myParentApp/myParentApp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});