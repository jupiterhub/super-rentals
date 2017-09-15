import { moduleFor, test } from 'ember-qunit';
import Ember from 'ember'

const DUMMY_ELEMENT = {};

let MapUtilStub = Ember.Object.extend({
	createMap(element, location) {
		this.assert.ok(element, 'createMap called with element');
		this.assert.ok(location, 'createMap called with location');
		return DUMMY_ELEMENT;
	}
});

moduleFor('service:maps', 'Unit | Service | maps', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('should create new map if location is not cached', function(assert) {
  assert.expect(4);	// 4 asserts, 2 in this test case, 2 in createMap (called by the service)
  let stubMapUtil = MapUtilStub.create({assert});
  let mapService = this.subject({mapUtil : stubMapUtil});	// this.subject, instantiates object to test (maps.js in this case) - and pass arguments
  let element = mapService.getMapElement('San Francisco')	// Invoke real method
  assert.ok(element, 'element exists');
  assert.equal(element.className, 'map', 'element has className of map');
});

test('should use existing map if one is cached for location', function (assert) {
  assert.expect(1);		// only 1 assert (assert.equals) becuase this is fetched from cache
  let stubCachedMaps = Ember.Object.create({
    sanFrancisco: DUMMY_ELEMENT
  });
  let mapService = this.subject({ cachedMaps: stubCachedMaps });	// this.subject, instantiates object to test (maps.js in this case) - and pass arguments
  let element = mapService.getMapElement('San Francisco');
  assert.equal(element, DUMMY_ELEMENT, 'element fetched from cache');
});