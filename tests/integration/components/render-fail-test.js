import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';

moduleForComponent('render-fail', 'Integration | Component | render fail', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{render-fail}}`);
  this.$('button').click();

  return wait()
    .then(() => {
      assert.equal(this.$().text().trim(), `Value: ok
Set`);
    });
});
