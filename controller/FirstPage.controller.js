sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
	], function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("leverx.app.controller.FirstPage", {
			onInit: function () {
				this._sValidPath = "https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg";
				var oProductsModel = new JSONModel({
					"Selected": 1,
					products: [
						{
							ProductID: 1,
							ProductName: "Milk"
						},
						{
							ProductID: 2,
							ProductName: "Apples"
						},
						{
							ProductID: 3,
							ProductName: "Potatoes"
						},
						{
							ProductID: 4,
							ProductName: "Tomato"
						}
					],
					Source: this._sValidPath,
					Title: "Viewer",
					Height: "600px"
				});

				this.getView().setModel(oProductsModel, "productsModel");
			},

	
		});
	}
);
