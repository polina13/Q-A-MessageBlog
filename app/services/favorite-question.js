import Ember from 'ember';

export default Ember.Service.extend({
  inquiries: [],
  fullCart: Ember.computed.gte('inquiries.length', 5),
  add(inquiry) {
    if(this.get('fullCart')) {
      alert('The cart is full. Remove an item to add another one.');
      } else {
      this.get('inquiries').pushObject(inquiry);
    }
  },
  remove(inquiry) {
    this.get('inquiries').removeObject(inquiry);
  },
  includes(inquiry) {
    return this.get('inquiries').includes(inquiry);
  }
});
