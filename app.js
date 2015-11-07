var app = angular.module("miApp",[]);

app.controller("MiControlador2",function($scope,$http){
    $scope.var1=0;
    $scope.var2=0;
    $scope.var3="";
    $scope.resultado = function(){
        var prom = $http.toString();
    }
});

app.controller("MiControlador",function($scope,$http){
    $scope.contactos = []
    $scope.nombreNuevo = "";
    $scope.numeroNuevo = "";
    $scope.editando = -1;
    
        
    $scope.agregar = function(){
        $scope.contactos.push({
            nombre:$scope.nombreNuevo,
            numero:$scope.numeroNuevo
        });
        $scope.guardarDatos();
    }
    $scope.borrar = function(indice){
        $scope.contactos.splice(indice,1);
        $scope.guardarDatos();
    }
    $scope.editar = function(indice){
        $scope.editando = indice;
    }
    $scope.guardar = function(){
        $scope.editando=-1;
        $scope.guardarDatos();
    }
    
    $scope.recuperarDatos = function(){
        var contactosSerializados = localStorage.getItem("v1_contactos");
        if(contactosSerializados != null)
            $scope.contactos = JSON.parse(contactosSerializados);
    }
    
    $scope.guardarDatos = function(){
        var contactosSerializados = JSON.stringify($scope.contactos);
        localStorage.setItem("v1_contactos",contactosSerializados)
    }
    $scope.recuperarDatos();
});