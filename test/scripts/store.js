import store from '../../app/scripts/store';
import { expect } from 'chai';

describe('store module', function(){
  it ('should exist', () => {
    expect(store).to.exist;
  });
  it ('should have session property', () => {
    expect(store).to.have.property('session');
  });
  
});
