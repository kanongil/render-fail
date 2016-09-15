import Ember from 'ember';

export default Ember.Component.extend({
    object: Ember.Object.create({ value: 'fail' }),
    value: Ember.computed.readOnly('object.value'),

    actions: {
        setValue() {
            this.set('object.value', 'ok');
        }
    }
});
