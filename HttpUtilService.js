
angular.module("MyApp").factory("HttpUtilService", ['$http','$cookies',  HttpUtilService]);
   

function HttpUtilService($http, $cookies){
    var beans = {};
    var factory = {
        login: function(bean){
           
            var result=$http({
                url : "",
                method : 'POST',data:bean}).then(function(data){
                    return data;
                },function(data, status, headers, config){
                    alert("login error",status);
                });
            return result;
        },
       
        get: function(beanUrl, params){
           
            var access_token=$cookies.get("access_token");
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
            var config = {
                "Access-Control-Request-Headers": "x-requested-with",
                "Access-Control-Allow-Credentials": true
            };
              
            var result = $http.get("/" + beanUrl,config).then(function(data){
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
           
            var result = $http.put("/" + beanUrl, params).then(function(data) {
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
            
            var result = $http.post("/" + beanUrl, bean).then(function(response) {
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
            
            var result = $http.delete("/" + beanUrl, bean).then(function(data) {
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


