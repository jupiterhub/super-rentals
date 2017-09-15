import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),	// find the service with the same name as key

  didInsertElement() {	// part of the lifecycle on renders https://guides.emberjs.com/v2.8.0/components/the-component-lifecycle/
    this._super(...arguments);
    let location = this.get('location');
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});
