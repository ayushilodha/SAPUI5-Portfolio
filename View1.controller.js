sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ], function(Controller,JSONModel) {
    "use strict";
  
    return Controller.extend("com.incture.portfolio.portfolio.controller.View1", {
      onInit:function(){
        let oModel = new JSONModel("../model/data.json");
        this.getView().setModel(oModel,"portfolio")
      }
  
    });
  });
