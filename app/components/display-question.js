import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  questionsPicked: Ember.computed.alias('favoriteQuestion.inquiries')
});
