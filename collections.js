(function(exports){
  var _Collections = function(){
    this.version = 1.0;
  };


  _Collections.prototype.list = function(){
      var _list = function(){
        var elements = [];
        var me = this;

        var iterate = function(items, func){
          for(var i = 0; i < items.length ; i++){
            var result = func.call(me, items[i], i);
            if(result === true){
              break;
            }
          }  
        };

        this.add = function(item){
          elements.push(item);
        }
        
        this.addAll = function(collection){
          if(collection instanceof _list){
            console.log("yooooooooooooooooooooooooo");
          } else{
            console.log("noo");
          }
        };

        this.clear = function(){
          elements = null;
          elements = [];
        };

        this.isEmpty = function(){
          return this.elements.length === 0;
        };

        this.contains = function(item){
          var found = false;
          iterate(elements, function(value, idx){
            var el = elements[idx];
            if(el === item){
              found = true;
              return true;
            } else{
              if(typeof item === "function"){
                found = item(el);
                if(found) return true;
              } 
            }
          });
          return found;
        };

        this.size = function(){
          return elements.length;
        };
      };
    return new _list();
  }

  exports.Collections =  new _Collections();
  
})(this);



/*

// cow.js
(function(exports) {
  "use strict";

  function Cow(name) {
    this.name = name || "Anon cow";
  }
  exports.Cow = Cow;

  Cow.prototype = {
    greets: function(target) {
      if (!target)
        throw new Error("missing target");
      return this.name + " greets " + target;
    }
  };
})(this);

*/