import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

/**
  The checkout route.

 **To Override:** You'll need to run the routes generator:

 ```bash
 ember g yebo-ember-storefront-routes
 ```

 This will install all of the Yebo Ember Storefront route files into your
 host application at `app/routes/yebo/*.js`, ready to be extended or
 overriden.

 @class Checkout
 @namespace Route
 @extends Ember.Component
 */
export default Ember.Route.extend(AuthenticatedRouteMixin, {
  redirect(model) {
    this.get('yebo').get('checkouts').on('orderCompleted', (order)=> {
      // TODO: Move to a config
      return this.transitionTo('yebo.thanks');
    });

    // TODO: if order empty redirect to ? when route is checkout
    if(this.get("yebo.orderId") === null){
      this.transitionTo('yebo.index');
    };
  },
});
