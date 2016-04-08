import Ember from 'ember';

export function unansweredQuestion(params) {
  var question = params[0];

  if(question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-alert"></span>');
  }
}

export default Ember.Helper.helper(unansweredQuestion);
