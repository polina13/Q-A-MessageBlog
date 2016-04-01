import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    questionFormHide() {
      this.set('addNewQuestion', false);
    },
    saveQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        // date: new Date(),

        information: this.get('information'),
      };
      this.sendAction('saveQuestion', params);
      this.set('addNewQuestion', false);
    }
  }
});
