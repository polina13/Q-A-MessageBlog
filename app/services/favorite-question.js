import Ember from 'ember';

export default Ember.Service.extend({
  inquiries: [],
  fullQuestion: Ember.computed.gte('inquiries.length', favorite-questions),
  add(inquiry) {
    if(this.get('fullQuestion')) {
      alert('This is your favorite question? If so add it or remove it?');
    } else {
      this.get('inquiries').pushObject(inqinquiry);
    }
  },
  remove(inquiry) {
    this.get(''inquiries).removeObject(inqinquiry);
  },
  includes(inquiry) {
    return this.get('inquiries').includes(inquiry);
  }
});
