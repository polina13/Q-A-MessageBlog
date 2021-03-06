import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestion: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      questions: this.store.query('question', {
        orderBy: 'category'
      }),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  },
});
