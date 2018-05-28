angular.module('myapp',['ngCookies'])
.controller('numcolor',['$scope','$timeout','$window','$interval','$cookieStore',function($scope,$timeout,$window,$interval,$cookieStore){
    $scope.listData = [
        {id:'001',num:100},
        {id:'002',num:102},
        {id:'003',num:103},
        {id:'004',num:104},
        {id:'005',num:214},
        {id:'006',num:989},
        {id:'007',num:152},
        {id:'008',num:451},
    ]
    $timeout(function(){
        $interval(function(){
            for(var i = 0;i<$scope.listData.length;i++){
                $scope.listData[i].num++;
                console.log($scope.listData)
                      angular.forEach($scope.listData,function(data){
                            if(data.num.toString().charAt(2)-0 == 1){
                               data.id = '001';
                            }
                            else if(data.num.toString().charAt(2)-0 == 2){
                                data.id = '002';
                            }
                            else if(data.num.toString().charAt(2)-0 == 3){
                                data.id = '003';
                            }
                            else if(data.num.toString().charAt(2)-0 == 4){
                                data.id = '004';
                            }
                            else{
                                data.id = '005'
                            }
                        }) 
            }
        },1000)
    },1000)
     
}])