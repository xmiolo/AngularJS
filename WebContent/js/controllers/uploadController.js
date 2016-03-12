angular.module("uploadFiles").controller("uploadController", function($scope,$http) {
	/*
	 * var fileInput = document.getElementById("myfiles"); var files =
	 * fileInput.files; // cache files.length var fl=files.length; ;
	 * 
	 */
	function uploadFileToUrl(file) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post("http://localhost:8080/Cloud/service/repo/upload", fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
        	//MENSAGEM DE SUCESSO
        })
        .error(function(){
        	//MENSAGEM DE FAIL
        });
    }
	
	$scope.fazerPost = function() {
		$scope.fileT = document.getElementById("myfiles");
		
		$scope.file = $scope.fileT.files;
		var fl = $scope.file.length;
		var i = 0
		while (i < fl) {
			//Envia um arquivo por vez pra ser gravado
			uploadFileToUrl($scope.file[i]);
			i++;
		}
	}

});