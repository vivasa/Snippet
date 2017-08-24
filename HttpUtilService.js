
  angular.module("MyApp").factory("HttpUtilService", ['$http','$cookies',  HttpUtilService]);

    angular.mf3Context = "http://163.172.181.95:8080";

function HttpUtilService($http, $cookies){
    var beans = {};
    var factory = {

        
       
        get: function(beanUrl, params){
           
            var access_token=$cookies.get("access_token");
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            var config = {
                "Access-Control-Request-Headers": "x-requested-with",
                "Access-Control-Allow-Credentials": true
            };
              
            var result = $http.get(angular.mf3Context + "/" + beanUrl, config).then(function(data) {
                return data;
            }, function(err) {
                console.log("err",err.status);
                return err;
            });
            return result;
        },
        put: function(beanUrl, params){
            var access_token=$cookies.get("access_token");
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
           
            var result = $http.put(angular.mf3Context + "/" + beanUrl, params).then(function(data) {
                return data;
            }, function(err) {
                console.log(err);
                return err;
            });

            return result;
        },
        post: function(beanUrl,bean){
            var access_token=$cookies.get("access_token");
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            
            var result = $http.post(angular.mf3Context + "/" + beanUrl, bean).then(function(response) {
                return response;
            },function(err) {
                console.log("status",err);
                return status;
            });

            return result;
        },
        delete: function(beanUrl, params){
            var access_token=$cookies.get("access_token");
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            
            var result = $http.delete(angular.mf3Context + "/" + beanUrl, bean).then(function(data) {
                console.log("Successfully deleted "+JSON.stringify(data));
                return data;
            }, function(err) {
                console.log(err);
                return err;
            });

            return result;
        }

    };
    return factory;
}


