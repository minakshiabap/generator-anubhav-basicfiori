sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function(Controller, MessageBox, MessageToast) {
	"use strict";

	return Controller.extend("<%= projectNamespace %>.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf <%= projectNamespace %>.view.View2
		 */
		onInit: function() {
			this.oRouter = this.getOwnerComponent().getRouter();
			//this.oRouter.attachRoutePatternMatched(this.herculis, this);
			this.oRouter.getRoute("detail").attachMatched(this.herculis, this);
		},
		herculis: function(oEvent){
			//debugger;	
			
			var navya = oEvent.getParameter("arguments").navya;
			var sPath = '/fruits/' + navya;
			this.getView().bindElement(sPath);
		},
		
		onBack: function(){
			//Step 1: Get The Container object for this view
			//var oParent = this.getView().getParent();
			//Step 2: use that to navigate to second view
			//oParent.to("idView1");
			this.oRouter.navTo("master");
		},
		onSave: function(){
			
			//Step 1: we need to access the object of parent
			var oAppCon = this.getView().getParent();
			//Step 2: go to view 1 from parent
			var oView1 = oAppCon.getPages()[0];
			//Step 3: get the child of the view1 (viz. search field )
			var oSearch = oView1.byId("idSearch");
			//Step 4: get the value
			var sValue = oSearch.getValue();
			
			MessageBox.confirm("Hey dude! shall i save? " + sValue,{
				title: "Maza Aavigiyo",
				onClose: function(status){
					if(status === "OK"){
						MessageToast.show("Sales order 8080 has been created Roger!!");
					}else{
						MessageBox.error("You break my heart :(");
					}
				}
			});
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf <%= projectNamespace %>.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf <%= projectNamespace %>.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf <%= projectNamespace %>.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});