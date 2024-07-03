angular.module('example.arancino_admin_panel_microcontroller_manager').config(($routeProvider) => {
    $routeProvider.when('/view/arancino_admin_panel_microcontroller_manager', {
        templateUrl: '/arancino_admin_panel_microcontroller_manager:resources/partial/index.html',
        controller: 'ArancinoAdminPanelMicrocontrollerManagerIndexController',
    });
});
