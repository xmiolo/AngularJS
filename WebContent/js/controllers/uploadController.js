angular.module("uploadFiles").controller("uploadController", function($scope) {
	/*
	 * var fileInput = document.getElementById("myfiles"); var files =
	 * fileInput.files; // cache files.length var fl=files.length; ;
	 * 
	 */
	$scope.uploadme = {};
	$scope.uploadme.src = "";
	$scope.fazerPost = function() {
		$scope.fileT = document.getElementById("myfiles");
		
		$scope.file = $scope.fileT.files;
		var fl = $scope.file.length;
		var i = 0
		while (i < fl) {
			// localize file var in the loop
			$scope.filePrint = $scope.file[i];
			alert($scope.filePrint.name);
			i++;
		}
	}

});