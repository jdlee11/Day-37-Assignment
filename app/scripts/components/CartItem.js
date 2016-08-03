import React from 'react';

const CartItem = React.createClass({
  render: function(){
    return (
      <div className="cart-item">
        <p>{this.props.item.name}</p>
        <p>{this.props.item.price}</p>
      </div>
    );
  }
});

export default CartItem;
