angular.module("cloudLogin").controller(
		"cloudLoginController",
		function($scope, $http, md5) {

			$scope.pass;
			$scope.usr;
			var consultaWSLogin = function() {
				$http.get("http://localhost:8080/Cloud/service/auth/5")
						.success(function(data, status) {
							$scope.logado = data;
						})
			};
			consultaWSLogin();

			$scope.fazerPost = function(usr, passEncr) {
				console.log("entrei");
				$http.post("http://localhost:8080/Cloud/service/auth/post",
						JSON.stringify({
							"name" : usr,
							"password" : md5.createHash(passEncr)
						})).success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					console.log(data);
				}).error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
			}
		});