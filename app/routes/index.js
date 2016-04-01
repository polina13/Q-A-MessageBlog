import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    questions: this.store.findAll('question');
    answers: this.store.findAll('answer');
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
  }
});
