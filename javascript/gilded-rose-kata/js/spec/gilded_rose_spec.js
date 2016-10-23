describe('Gilded Rose', function() {

  describe('Aged Brie', function() {

    it('increase quality the older it gets', function() {
      items = [ new Item('Aged Brie', 4, 2) ];
      update_quality();
      expect(items[0].quality).toEqual(3);
    });

    it('increase quality twice as fast after sell in', function() {
      items = [ new Item('Aged Brie', 0, 2) ];
      update_quality();
      expect(items[0].quality).toEqual(4);
    });

    it('do not increase quality past 50', function() {
      items = [ new Item('Aged Brie', 4, 49) ];
      update_quality();
      expect(items[0].quality).toEqual(50);

      items = [ new Item('Aged Brie', 4, 50) ];
      update_quality();
      expect(items[0].quality).toEqual(50);
    });

    it('decrease sell in', function() {
      items = [ new Item('Aged Brie', 0, 2) ];
      update_quality();
      expect(items[0].sell_in).toEqual(-1);
    });

  });

  describe('Sulfuras, Hand of Ragnaros', function() {

    it('do not decrease quality', function() {
      items = [ new Item('Sulfuras, Hand of Ragnaros', 4, 42) ];
      update_quality();
      expect(items[0].quality).toEqual(42);
    });

    it('do not decrease sell in', function() {
      items = [ new Item('Sulfuras, Hand of Ragnaros', 4, 42) ];
      update_quality();
      expect(items[0].sell_in).toEqual(4);
    });

  });

  describe('Backstage passes to a TAFKAL80ETC concert', function() {

    it('increase quality by 2 when 10 or less days left', function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 4) ];
      update_quality();
      expect(items[0].quality).toEqual(6);

      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 8, 4) ];
      update_quality();
      expect(items[0].quality).toEqual(6);
    });

    it('increase quality by 3 when 5 or less days left', function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 4) ];
      update_quality();
      expect(items[0].quality).toEqual(7);

      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 2, 4) ];
      update_quality();
      expect(items[0].quality).toEqual(7);
    });

    it('drop quality to 0 after sell in', function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 42) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('decrease sell in', function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 42) ];
      update_quality();
      expect(items[0].sell_in).toEqual(3);
    });

    it('do not increase quality past 50', function() {
      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 49) ];
      update_quality();
      expect(items[0].quality).toEqual(50)

      items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50) ];
      update_quality();
      expect(items[0].quality).toEqual(50);
    });

  });

  // it seems there are some situations in which the
  // code would apply changes to quality for not documented items
  // I've covered those too, discuss with product manager
  // if we have to keep or remove
  describe('unnamed items', function() {

    it('decrease quality if greater than 0', function() {
      items = [ new Item('unnamed', 4, 1) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('quality is never negative', function() {
      items = [ new Item('unnamed', 4, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('decrease sell in', function() {
      items = [ new Item('unnamed', 4, 42) ];
      update_quality();
      expect(items[0].sell_in).toEqual(3);
    });

  });

  describe('Conjured', function() {

    it('decrease quality twice as fast', function() {
      items = [ new Item('Conjured', 4, 10) ];
      update_quality();
      expect(items[0].quality).toEqual(8);
    });

    it('quality is never negative', function() {
      items = [ new Item('Conjured', 4, 0) ];
      update_quality();
      expect(items[0].quality).toEqual(0);
    });

    it('decrease sell in', function() {
      items = [ new Item('Conjured', 4, 42) ];
      update_quality();
      expect(items[0].sell_in).toEqual(3);
    });

  });

});
