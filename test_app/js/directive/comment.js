app.directive('ngComment', function () {
    return {
        scope: {
            comment : '=',
            select : '&select'
        },
        restrict: 'E',
        templateUrl: 'partials/_comment.html'
    }
})