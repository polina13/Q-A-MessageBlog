import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('answer', params.answer_id);
  }
});


// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model: function() {
//     var question = this.modelFor('question');
//     var answer = this.store.createRecord('answer');
//     question.get('answers').then(function(answers) {
//       answers.pushObject(answer);
//       question.save();
//     });
//     return answer;
//     }
// });
