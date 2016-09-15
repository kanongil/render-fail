import Ember from 'ember';

export default Ember.Controller.extend({
    object: Ember.Object.create({ value: 'fail' }),
    value: Ember.computed.readOnly('object.value'),

    init() {
        this._super(...arguments);
        Ember.run.later(() => {
            this.set('object.value', 'ok');
            console.log('val', this.get('value'));
        }, 500);
    },
});
