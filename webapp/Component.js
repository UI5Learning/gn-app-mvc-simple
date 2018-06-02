sap.ui.define([
		"sap/ui/core/UIComponent",
		"sap/ui/model/json/JSONModel"
	],
	function(UIComponent, JSONModel) {
		"use strict";

		return UIComponent.extend("sapui5.demo.mvcapp.Component", {
			createContent: function() {
				UIComponent.prototype.createContent.apply(this, arguments);
				//Application Data
				var oData = {
					"CountSuppliers": "2",
					"Suppliers": [{
						"ID": 0,
						"Name": "Exotic Liquids",
						"Address": {
							"Street": "NE 228th",
							"City": "Sammamish",
							"State": "WA",
							"ZipCode": "98074",
							"Country": "USA"
						}
					}, {
						"ID": 1,
						"Name": "Tokyo Traders",
						"Address": {
							"Street": "NE 40th",
							"City": "Redmond",
							"State": "WA",
							"ZipCode": "98052",
							"Country": "USA"
						}
					}]
				};

				//Create the JSON model object, and set the data in there.
				var oModel = new sap.ui.model.json.JSONModel();
				oModel.setData(oData);

				//Set model to the component, so that the model is available to entire app.
				//Now... wait a minute.... WHY are we not setting this to the core????
				// -- Here's why : If this app is running on a Fiori LaunchPad (FLP), then, the core is the launch pad app. Setting 
				// data into the core will mess things up, since FLP handles multiple app launches.
				this.setModel(oModel);

				var oRootView = sap.ui.view("appview", {
					type: sap.ui.core.mvc.ViewType.XML,
					viewName: "sapui5.demo.mvcapp.view.App"
				});

				var oApp = oRootView.byId("app");
				return oRootView;

			}
		});

	});