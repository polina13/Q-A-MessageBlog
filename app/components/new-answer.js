import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
      this.set('addNewAnswer', false);
    }
  }
});
