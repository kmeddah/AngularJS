app.factory('PostFactory', function ($http, $q, $timeout) {
  var factory = {
    posts: false,
    find: function () {
      var deffered = $q.defer();
      if (factory.posts !== false) {
        deffered.resolve(factory.posts);
      } else {
        $http.get('posts.json')
          .success(function (data, status) {
            factory.posts = data;
            $timeout(function () {
              deffered.resolve(factory.posts);
            }, 2000)
          }).error(function (data, status) {
            deffered.reject('Impossible de récupérer les articles.');
          });
      }
      return deffered.promise;
    },
    get: function (id) {
      var deffered = $q.defer();
      var post = {};
      var posts = factory.find().then(function (posts) {
        angular.forEach(factory.posts, function (value, key) {
          if (value.id == id) {
            post = value;
          }
        });
        deffered.resolve(post);
      }, function (msg) {
        deffered.reject(msg);
      });
      return deffered.promise;
    },
    add: function (comment) {
      var deffered = $q.defer();
      deffered.resolve();
      return deffered.promise;
    }
  }
  return factory;
});
