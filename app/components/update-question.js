import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestion', true);
    },
    updateQuestion(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        information: this.get('information'),
      };
      this.set('updateQuestion', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
