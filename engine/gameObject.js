'use strict';

define(['underscore'], function(_){
  return function(name){

    var gameObject = {

      name: name,

      components: {},

      addComponent: function(key, component) {
        component.gameObject = this;
        this.components[key] = component;
      },

      setCtx: function(ctx){
        this.ctx = ctx;
        _(this.components).each(function(component){
          component.ctx = ctx;
        });
      },

      init: function(){
        _(this.components).each(function(component){
          if(component.init){
            component.init();
          }
        });
      },

      update: function(){
        _(this.components).each(function(component){
          if(component.update){
            component.update();
          }
        });
      }
    };

    return gameObject;
  };
});
