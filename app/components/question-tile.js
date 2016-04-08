import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
    favoriteQuestion: Ember.inject.service(),
  actions: {
    deleteQuestion(question) {
      this.sendAction('deleteQuestion', question);
    },
    updateQuestion(question, params) {
      this.sendAction('updateQuestion', question, params);
    },
    addQuestion(question) {
      this.get('favoriteQuestion').add(question);
    },
    remove(question) {
      this.get('favoriteQuestion').remove(question);
    }
  }
});
