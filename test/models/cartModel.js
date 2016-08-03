import { expect, assert } from 'chai';
import CartModel from '../../app/scripts/models/cartModel';

describe('Cart Model', function(){
  let testModel = new CartModel();
  let testModel2 = new CartModel();

  it ('should start with empty array and total 0', () => {
    assert.deepEqual(testModel.items, []);
    expect(testModel.total).to.equal(0);
  });

});
