import Ember from 'ember';

export default Ember.Service.extend({
  inquiries: [],
  questionInquiry: Ember.computed.gte('inquiries.length', 5),
  add(inquiry) {
    if(this.get('questionInquiry')) {
      alert('You can add only up to five favorite questions.Review which one to remove!');
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
