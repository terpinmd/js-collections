(function(exports){
  var _Collections = function(){
    this.version = 1.0;
  };


  _Collections.prototype.list = function(){
      var self = this;

      var _list = function(){
        
        var _elements = [];

        var me = this;

        var _iterate = function(items, func){
          for(var i = 0; i < items.length ; i++){
            var result = func.call(me, items[i], i);
            if(result === true){
              break;
            }
          }  
        };

        var _add = function(item, index){
          if(parseInt(index) > 0){
            _elements.splice(index, 0, item);
          } else{
            _elements.push(item);  
          }
        };

        this.add = function(item){
          _add(item);
        }
        
        this.addAt = function(item, index){
          _add(item, index);
        }

        this.addAll = function(otherList){
          var me = this;
          otherList.each(function(el){
            me.add(el);
          });            
        };

        this.get = function(index){
          return _elements[index];
        }

        this.clear = function(){
          _elements = null;
          _elements = [];
        };

        this.isEmpty = function(){
          return this._elements.length === 0;
        };


        this.containsAll = function(otherList){
          var me = this;
          var exists = false;
          otherList.each(function(el){
            exists = me.contains(el);
          });
          return exists;
        };


        var _find = function(item){
          var found;
          _iterate(_elements, function(value, idx){
            var el = _elements[idx];
            if(el === item){
              found = el;
              return found;
            } else if(typeof item === "function"){
                found = item(el);
                if(found) 
                  return found;
            } else{
              return undefined;
            }
          });
          return found;
        }



        this.contains = function(item){
          return _find(item) !== undefined;
        };

        this.size = function(){
          return _elements.length;
        };

        this.each = function(_iterateFn){
          return _iterate(_elements, _iterateFn);
        }

      };
    return new _list();
  }

  exports.Collections =  new _Collections();

function* foo(){
  
}



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

