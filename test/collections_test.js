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

    it("should have size of 3 after addAll", function() {
    	var list = new Collections.list();
    	list.add("foo");
    	
    	var list2 = new Collections.list();
    	list2.add("bar");
    	list2.add("baz");

    	list.addAll(list2);
    	expect(list.size()).to.equal(3);
    })

    it("should insert into middle of the list and then get it out", function() {
    	var list = new Collections.list();
    	list.add("foo");
    	list.add("bar");
    	list.add("baz");

    	list.addAt("biz", 2);
	   	expect(list.get(2)).to.equal("biz");
    })

  }); 

  describe("contains", function() {
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
      expect(list.contains(function(el){return el.name === "foo"})).to.equal(true);
    });

    it("contains all", function() {
      var list = new Collections.list();
      list.add("item1");
      list.add("item2");
      list.add("item3");
  

      var list2 = new Collections.list();
      list2.add("item1");
      list2.add("item3");
  
  	  expect(list.containsAll(list2)).to.equal(true);

    });

  });

  describe("iteration", function() {
    it("iterating", function() {
      var list = new Collections.list();
      list.add("foo"); list.add("bar");
      list.each(function(el){
      	expect(el).to.not.equal(null);
      });
    });
  });
});

