console.log("yo");


var expect = chai.expect;

describe("Collections", function() {
  describe("constructor", function() {
    it("should be initialized and have a size of 0", function() {
      var list = new Collections.list();
      expect(list.size()).to.equal(0);
    });
  });
  describe("methods", function() {
  	var count = 1000;
    it("should have a size of " + count, function() {
      var list = new Collections.list();
      for(var i = 0 ; i < count ; i ++){
      	list.add("element"+i);
      }
      expect(list.size()).to.equal(count);
    });

    it("should have a size of " + 0, function() {
    	var list = new Collections.list();
    	list.add("foo");
    	list.clear();
    	expect(list.size()).to.equal(0);
    });
  }); 

  describe("cointains", function() {
  	var count = 1000;
    it("contains strings", function() {
      var list = new Collections.list();
      list.add("item1");
      list.add("item2");
      list.add("item3");
      expect(list.contains("item2")).to.equal(true);
      expect(list.contains("foo")).to.equal(false);
    });
    
    it("contains objects", function() {
      var list = new Collections.list();
      list.add("item1");
      list.add({name : "foo"});
      list.add("item3");
      expect(list.contains(function(el){return el.name === "foof"})).to.equal(true);
    });


  });

});