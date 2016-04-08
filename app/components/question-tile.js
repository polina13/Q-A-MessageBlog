import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  actions: {
    addQuestion(inquiry) {
      this.get('favoriteQuestion').add(inquiry);
    },
    remove(inquiry) {
      this.get('favoriteQuestion').remove(inquiry);
    },
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    }
  }
});
