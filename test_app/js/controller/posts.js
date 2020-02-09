app.controller('PostsCtrl', function ($scope, $rootScope, PostFactory) {
    $rootScope.loading = true;
    $scope.posts = PostFactory.find().then(function (posts) {
        $scope.loading = false;
        $scope.posts = posts;
    }, function (msg) {
        alert(msg);
    })
});