import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  information: DS.attr('string'),
  date: DS.attr('date'),
  answers: DS.hasMany('answer', { async: true }),
  favoriteQuestion: Ember.inject.service(),
  picked: Ember.computed('favoriteQuestion.inquiries.[]', function() {
    return this.get('favoriteQuestion').includes(this);
  })
});
