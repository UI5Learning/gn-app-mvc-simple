sap.ui.jsview("sapui5.demo.mvcapp.view.Master", {

	getControllerName: function() {
		return "sapui5.demo.mvcapp.controller.Master";
	},

	createContent: function(oController) {
		//This is where we will create view UI.
		//Create columns for the table.
		var aColumns = [
			new sap.m.Column({
				header: new sap.m.Text({
					text: "ID"
				})
			}),
			new sap.m.Column({
				header: new sap.m.Text({
					text: "Name"
				})
			})
		];

		//Create the teamplate to use for repeated data
		var oTemplate = new sap.m.ColumnListItem({
			type: "Navigation",
			press:[oController.onListPress, oController],
			cells: [
				new sap.m.ObjectIdentifier({
					text: "{ID}"
				}),
				new sap.m.ObjectIdentifier({
					text: "{Name}"
				})
			]
		});

		//Display number of suppliers in toolbar
		var oTableHeader = new sap.m.Toolbar({
			content: [
				sap.m.Title({
					text: "Number Of Suppliers : {/CountSuppliers}"
				})
			]
		});

		//With all components of table created already, proceed to create the table control itself.
		var oTable = new sap.m.Table({
			columns: aColumns,
			headerToolbar: oTableHeader
		});

		//Finally bind the table items to supplier entries.
		oTable.bindItems("/Suppliers", oTemplate);

		var oPageMaster = new sap.m.Page({
			title: "Supplier Overview",
			content: [oTable]
		});
		
		return oPageMaster;

	}

});