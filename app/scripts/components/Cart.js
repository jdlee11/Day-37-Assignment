import React from 'react';
import CartItem from './CartItem';
import store from '../store';

const Cart = React.createClass({
  getInitialState: function(){
    return {
      cart: store.session.toJSON()
    };
  },
  componentDidMount: function(){
    store.session.on('change', this.updateState);
  },
  componentWillUnmount: function(){
    store.session.off('change', this.updateState);
  },
  updateState: function(){
    this.setState({cart: store.session.toJSON()});
  },
  render: function(){
    let currentItems = store.session.items.map(function(item){
      return (<CartItem item={item}/>);
    });
    return (
      <div className="cart-container">
        {currentItems}
        <p>{store.session.total}</p>
      </div>
    );
  }
});

export default Cart;
