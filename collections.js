(function () {
    
    var Collections =  window.Collections = function(){
      if (obj instanceof Collections) return obj;
      if (!(this instanceof Collections)) return new Collections(obj);
      this._wrapped = obj;   
    };
    

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
 

    Collections.list = function(){
      return new _list();
    }

    
    return Collections;
}());