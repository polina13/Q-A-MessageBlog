import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    // answerFormHide() {
    //   this.set('addNewAnswer', false);
    // },
    saveAnswer() {
      var params = {
        text: this.get('text'),
        author: this.get('author'),
        question: this.get('question')
        // add datestamp here
      };
      this.sendAction('saveAnswer', params);
      this.set('addNewAnswer', false);
    }
  }
});
