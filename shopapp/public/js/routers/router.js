// router code lives here

/* ShopApp has three main routes:
1. / (root) - for displaying the home page
2. /product/:id - for displaying individual product details
3. /cart - for displaying products in the users cart
4. /checkout
*/

shopApp.config(function ($routeProvider) {

      $routeProvider
      // route for the home page
      .when('/', {
          templateUrl : 'templates/home.html',
          controller  : 'shopAppController'
      })

      // route for the about page
      .when('/product/:id', {
          templateUrl : 'templates/product.html',
          controller  : 'shopAppController'
      })

      // .when('/cart'), {
      //   templateUrl : 'templates/cart.html',
      //   controller  : 'shopAppController'
      // })
      //
      // .when('/checkout'), {
      //   templateUrl : 'templates/checkout.html',
      //   controller  : 'shopAppController'
      // })

      // route for the contact page
      .otherwise({
          redirectTo: '/'
      });
});
