angular.module("cloudLogin").controller(
		"cloudLoginController",
		function($scope, $http, md5, $location, $window) {
			$scope.newUser = [];
			$scope.Lpass;
			$scope.Lusr;
			var consultaWSLogin = function() {
				$http.get("http://localhost:8080/Cloud/service/auth/5")
						.success(function(data, status) {
							$scope.logado = data;
						})
			};
			consultaWSLogin();
			$scope.redirect = function(){
				$location.url("/restrict/welcome.html");
			};
			
			$scope.fazerPost = function(Lusr, LpassEncr) {
				console.log("entrei");
				$http.post("http://localhost:8080/Cloud/service/auth/post",
						JSON.stringify({
							"mail" : Lusr,
							"pass" : md5.createHash(LpassEncr)
						})).success(function(data, status, headers, config) {
					//Quando da SUcess no Login
							alert($scope.url());
							/*$scope.redirect();*/
				}).error(function(data, status, headers, config) {
					console.log("NAO LOGOU");
				});
			}
			
			$scope.createNewUser = function(newUser) {
				console.log("entrei");
				$http.post("http://localhost:8080/Cloud/service/user/new",
						JSON.stringify({
							"name" : newUser.name,
							"pass" : md5.createHash(newUser.pass),
							"mail" : newUser.mail
						})).success(function(data, status, headers, config) {
					console.log("DEU BOM");
					$scope.redirect();
				}).error(function(data, status, headers, config) {
					console.log("DEU RUIM");
				});
			}
		});