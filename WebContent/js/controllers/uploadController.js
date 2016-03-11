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
		var fl = files.length;
		var i = 0
		while (i < fl) {
			// localize file var in the loop
			$scope.file = $scope.fileT[i];
			alert($scope.file.name);
			i++;
		}
	}

});