sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ns.Formcard1.Main", {
		onInit: function () {
			this.getView().byId("img").setSrc(sap.ui.require.toUrl("ns/Formcard/Image.png"));
		}
	});
});