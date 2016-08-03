import Backbone from 'backbone';

const CartModel = Backbone.Model.extend({
  items: [],
  total: 0,
  addItem: function(item){
    this.items.push(item);
    this.total += item.price;
  },
  removeItem: function(item){
    this.items.splice(this.items.indexOf(item), 1);
    this.total -= item.price;
  }
});

export default CartModel;
