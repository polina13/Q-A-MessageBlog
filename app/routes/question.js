import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    // component for new answer: ember g component new-answer.....
    deleteQuestion(question){
      var deletes = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(deletes).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },
    updateQuestion(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
        question.save();
        this.transitionTo('index');
      }
    }
});
