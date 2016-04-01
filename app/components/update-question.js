import Ember from 'ember';

export default Ember.Component.extend({
  updateYourQuestion: false,
  actions: {
    updateQuestionForm() {
      this.set('updateYourQuestion', true);
    },
    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        information: this.get('information'),
      };
      this.set('updateYourQuestion', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
