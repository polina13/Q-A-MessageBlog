import Ember from 'ember';

export default Ember.Service.extend({
  inquiries: [],
  fullQuestion: Ember.computed.gte('inquiries.length', 2),
  add(inquiry) {
    if(this.get('fullQuestion')) {
      alert('This is your favorite question? If so add it or remove it?');
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
