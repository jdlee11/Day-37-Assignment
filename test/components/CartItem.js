import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';
import CartItem from '../../app/scripts/components/CartItem';

describe('<CartItem /> component', function(){
  let itemProp = {name: 'banana', price: 5};
  let testItem = shallow(<CartItem item={itemProp} />);

  // it ('should have item prop', () => {
  //   expect(testItem.props.item).to.exist;
  // });
  // it ('should display prop\'s data', () => {
    // expect(testItem.props.item.name).to.equal('banana');
    // expect(testItem.props.item.price).to.equal(5);
  // });
});
