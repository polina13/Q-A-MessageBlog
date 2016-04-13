import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        information: this.get('information'),
      };
      this.sendAction('saveQuestion', params);
      this.set('addNewQuestion', false);
    }
  }
});
