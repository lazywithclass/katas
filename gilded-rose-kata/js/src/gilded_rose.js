function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    var item = items[i], name = item.name;

    if (name == 'Sulfuras, Hand of Ragnaros') {
      continue;
    }

    if (name === 'Aged Brie') {
      item.sell_in--;
      if (item.quality < 50) {
        item.quality++;
      }
      if (item.sell_in < 0) {
        item.quality++;
      }
      continue;
    }

    if (name == 'Backstage passes to a TAFKAL80ETC concert') {
      item.sell_in--;
      if (item.quality < 50) {
        item.quality++;
      }
      if (item.quality < 50 && item.sell_in < 11) {
        item.quality++;
      }
      if (item.quality < 50 && item.sell_in < 6) {
        item.quality++;
      }
      if (item.sell_in < 0) {
        item.quality = 0;
      }
      continue;
    }

    if (name == 'Conjured') {
      item.sell_in--;
      if (item.quality > 0) {
        item.quality -= 2;
      }
      continue;
    }

    // anything else
    item.sell_in--;
    if (item.quality > 0) {
      item.quality--;
    }
  }
}
