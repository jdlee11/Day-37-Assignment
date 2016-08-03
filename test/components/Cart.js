import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Cart from '../../app/scripts/components/Cart';

describe('<Cart/> component', function() {
  let testCart = shallow(<Cart />);

  it ('should be a div', () => {
    expect(testCart.is('div')).to.be.true;
  });
});
