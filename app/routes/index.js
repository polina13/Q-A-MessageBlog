import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');

  },
  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  },
});

// updatePost(entry, params) {
//       Object.keys(params).forEach(function(key) {
//         if(params[key] !== undefined) {
//           entry.set(key, params[key]);
//         }
//       });
//       entry.save();
//       this.transitionTo('index');
//     },
//     deletePost(entry) {
//       entry.destroyRecord();
//       this.transitionTo('index');
//     }    
