import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  information: DS.attr('string'),
  date: DS.attr('date'),
  answers: DS.hasMany('answer', { async: true })
});
