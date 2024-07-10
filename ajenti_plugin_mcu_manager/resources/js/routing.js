angular.module('ajenti_plugin_mcu_manager').config(($routeProvider) => {
    $routeProvider.when('/view/ajenti_plugin_mcu_manager', {
        templateUrl: '/ajenti_plugin_mcu_manager:resources/partial/index.html',
        controller: 'AjentiPluginMcuManagerIndexController',
    });
});
