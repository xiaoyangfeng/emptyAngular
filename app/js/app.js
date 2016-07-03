/**
 * Created by Blue on 2016/6/30.
 */
angular.module('myApp', [])
    .controller('MyController', Controller);
function Controller($scope, $timeout) {

    $scope.hosts = [
        {
            "Name": "Xiaoyang Feng",
            "Address": "China",
            "Occupation": "Programmer",
            "Hobbies": "Study",
            "stars":5
        },
        {
            "Name": "Guo Ge",
            "Address": "China",
            "Occupation": "Baker",
            "Hobbies": "阳阳",
            "stars":5
        }
    ]


    $scope.clock = {};
    var updateClock = function () {
        $scope.clock.now = new Date();
        $timeout(updateClock, 1000);
    };
    updateClock();

    $scope.click = function (host,num) {
        host['stars']=num;
    };
    $scope.rate=function (index,host) {
        if (index<host['stars'])
            return "rated";
        else 
            return "rating";
    }

}
