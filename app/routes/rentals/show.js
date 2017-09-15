import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  	return this.get('store').findRecord('rental', params.rental_id);  // added rental_id in app/routes.js, now we can access it. (ember data implicitly calls /rentals/our-id based on the convention)
  }
});
