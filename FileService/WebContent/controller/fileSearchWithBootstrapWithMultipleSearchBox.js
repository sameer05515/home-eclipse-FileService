/* angular.module('scopeExample', []).controller('MyController',
		[ '$scope', function($scope) {
			$scope.username = 'World';

			$scope.sayHello = function() {
				$scope.greeting = 'Hello ' + $scope.username + '!';
			};
		} ]); */
		
//////////////////////
/* angular.module('scopeExample', []).filter("as", function($parse) {
  return function(value, context, path) {
    return $parse(path).assign(context, value);
  };
}); */
//////////////////////

/* angular
		.module('scopeExample', [])
		.controller(
				'fileSearchmultiController',
				[
						'$scope','$log',
						'$http',
						function($scope, $http, $log) {
							
							$scope.errorMessage = "";
							$scope.filteredItems=[];
							$scope.fileNames = [];
							
							
							// /////////////////
							
							$scope.loadResult =function() {
								
								$scope.errorMessage = "Loading data...";
								var urrrlll="http://127.0.0.1:8888/FileService/fileService.jsp?fileName="+$scope.foldername+"";
								$http(
										{
											method : 'POST',
											url :urrrlll
										})
										.success(function(data) {
											$scope.fileNames = data;
											$scope.errorMessage = "";
										})
										.error(
												function(data) {
													$scope.errorMessage += "There was an error fetching the list of available roles. Please reload the page and try again.";
												});
								
							};
						} ]); */
						
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

angular
		.module('scopeExample', [])
		.controller(
				'fileSearchController',
				[
						'$scope','$log',
						'$http',
						function($scope, $log,$http) {
							
							//$scope.choices = [{id: 'choice1'}, {id: 'choice2'}];
							$scope.choices = [{"id":"choice1","name":"C:/Users/VINU/Desktop/New folder (2)"},
							{"id":"choice2","name":"C:/Users/VINU/Desktop/21-dec-2015"},
							{"id":"choice3","name":"D:/ebooks"},
							{"id":"choice4","name":"D:/TUTORIAL"},
							{"id":"choice5","name":"D:/bakari"},
							{"id":"choice6","name":"F:/study-materials"},
							{"id":"choice7","name":"F:/Ajax_Tutorial_Part_I_The_Basics"},
							{"id":"choice8","name":"F:/21-dec-2015"},
							{"id":"choice9","name":"G:/21-dec-2015"},
							{"id":"choice10","name":"G:/backup"},
							{"id":"choice11","name":"G:/ebooks"},
							{"id":"choice12","name":"F:/songs"},
							{"id":"choice13","name":"G:/lenovoe420"},
							{"id":"choice14","name":"G:/rimjhim"},
							{"id":"choice15","name":"C:\\Users\\VINU\\Desktop\\oppo"},
							{"id":"choice16","name":"C:\\Users\\VINU\\Desktop\\PKG"},
							{"id":"choice17","name":"C:\\Users\\VINU\\Desktop\\PLANNIG"},
							{"id":"choice18","name":"C:\\Users\\VINU\\Desktop\\rimi"},
							{"id":"choice19","name":"C:\\APPLN_SERVERS"},
							{"id":"choice20","name":"C:\\Users\\VINU"}];

							$scope.addNewChoice = function() {
								var newItemNo = $scope.choices.length+1;
								$scope.choices.push({'id':'choice'+newItemNo});
							};

							$scope.removeChoice = function() {
								var lastItem = $scope.choices.length-1;
								$scope.choices.splice(lastItem);
							};
							
							$scope.errorMessage = [];
							$scope.loadingMessage = [];
							
							
							 
							 $scope.loadMultiResult= function(){
								 $scope.loadingMessage = [];
								$scope.errorMessage = [];
								$scope.fileNames = [];
								 angular.forEach($scope.choices, function(value, key){
							
								   //console.log("name : "+value.name );
								   $scope.loadResult(value.name);
								 });
								 //$scope.loadingMessage = "Loading complete";
							 };
							
							/////////////////
							//$scope.errorMessage = "";
							$scope.filteredItems=[];
							$scope.fileNames = [];
							
							
							// /////////////////
							
							
							
							$scope.loadResult =function(myfolder) {
								
								$scope.loadingMessage.push("Loading data....");
								
								var obj={};
								obj.message="Starting search for : "+myfolder;
								obj.type="load";
								
								//$scope.errorMessage.push("Starting search for : "+myfolder);
								$scope.errorMessage.push(obj);
								console.log("Starting search for : "+myfolder );
								//var urrrlll="http://127.0.0.1:8999/FileService/fileService.jsp?fileName="+myfolder+"";
								var urrrlll="http://127.0.0.1:8999/FileService/fileService.jsp";
								$http(
										{
											method : 'POST',
											/* url : 'http://127.0.0.1:8888/FileService/fileService.jsp?fileName=C:/Users/796412/Desktop/21-dec-2015/07-june-2016/practical-probabilistic-programming/' */
											url :urrrlll,
											
											params : {'fileName': myfolder, 'extensions' : $scope.checked_fruits}
										})
										.success(function(data) {
											
											//$scope.fileNames = data;
											//alert(myfolder+"  "+data.length+"  "+data);
											for (var i=0; i<data.length; i++){
												if(axis.isObject(data[i])){
													$scope.fileNames.push(data[i]);
												}
												
											}
											
											//$scope.errorMessage.push("<span class=\"successMessage\">"+"Successfully got "+data.length+" result for "+myfolder+"</span>");
											var obj={};
											obj.message="Successfully got "+data.length+" result for "+myfolder;
											obj.type="success";
											//$scope.errorMessage.push("Successfully got "+data.length+" result for "+myfolder);
											$scope.errorMessage.push(obj);
											
											$scope.removeLoadingData();
										})
										.error(
												function(data) {
													var obj={};
													obj.message="Error while getting result for "+myfolder;
													obj.type="fail";
													//$scope.errorMessage.push("Error while getting result for "+myfolder) ;
													$scope.errorMessage.push(obj);
													
													$scope.removeLoadingData();
												});
								
							};
							
							$scope.removeLoadingData= function() {
								var lastItem = $scope.loadingMessage.length-1;
								$scope.loadingMessage.splice(lastItem);
							};
							
							
							/**
							* Code to open popup basis of clicked item in front end
							**/
							
							$scope.testAnchor=[];
							$scope.titleOfPdf="";
							
							$scope.openPopup=function (sourceUrl) {								
								//var sourceUrl=whichgame.getAttribute("href");
								//alert("sourceUrl : "+sourceUrl);
								$scope.titleOfPdf=sourceUrl;
								var game = document.getElementById("objectToEmbed");
								var clone = game.cloneNode(true);
								clone.setAttribute('src', sourceUrl);
								game.parentNode.replaceChild(clone, game);

								$("#hello").dialog({
									width : 1000,
									height : 600,
									autoOpen : true
								});								
							};
							
							$scope.ppp=function (sourceUrl){
								$scope.openPopup(sourceUrl);
								return false;
							};
							
							$scope.idCounter=0;
							$scope.optionTexts = [];
							$scope.loadInitialSettings=function(){
								
								$("ul li").each(function() {  
									$(this).children('a').each(function () {
										$(this).attr("id","myanch"+idCounter);
										$scope.optionTexts.push(this);
										$('#'+'myanch'+idCounter).live('click',function () {		
											$scope.openPopup(this);
											return false;
											});
										$scope.idCounter=$scope.idCounter+1;
									});
								});
								
							};
							
							//////////////////
							$scope.fruits = [".pdf",".mp3",".mp4",".exe",".zip",".png",".jpeg",".jpg",".jar",".rar",".epub"];
							//$scope.checked_fruits = [".pdf", ".mp3"];
							$scope.checked_fruits = [];
							$scope.addFruit = function(fruit) {
									if ($scope.checked_fruits.indexOf(fruit) != -1) return;
									$scope.checked_fruits.push(fruit);
								};
							/////////////////
							
							////////////////////////
						  $scope.propertyName = 'name';
						  $scope.reverse = true;
						  //$scope.friends = friends;

						  $scope.sortBy = function(propertyName) {
							$log.log("$scope.propertyName : " + $scope.propertyName+"$scope.reverse : " + $scope.reverse);
							$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
							$scope.propertyName = propertyName;
							$log.log("propertyName : " + propertyName+"$scope.reverse : " + $scope.reverse);
						  };

							

							
						} ]).directive('checkList', function() {
								  return {
									scope: {
									  list: '=checkList',
									  value: '@'
									},
									link: function(scope, elem, attrs) {
									  var handler = function(setup) {
										var checked = elem.prop('checked');
										var index = scope.list.indexOf(scope.value);

										if (checked && index == -1) {
										  if (setup) elem.prop('checked', false);
										  else scope.list.push(scope.value);
										} else if (!checked && index != -1) {
										  if (setup) elem.prop('checked', true);
										  else scope.list.splice(index, 1);
										}
									  };

									  var setupHandler = handler.bind(null, true);
									  var changeHandler = handler.bind(null, false);

									  elem.bind('change', function() {
										scope.$apply(changeHandler);
									  });
									  scope.$watch('list', setupHandler, true);
									}
								  };
								});