angular.module('example.arancino_admin_panel_microcontroller_manager').controller('ArancinoAdminPanelMicrocontrollerManagerIndexController', function($scope, $http, pageTitle, gettext, notify) {
    pageTitle.set(gettext('Manager for Arancino Microcontroller'));

    $scope.counter = 0;

    $scope.click = () => {
            $scope.counter += 1;
            notify.info('+1');
        };

    // Bind a test var with the template.
    $scope.my_title = gettext('ArancinoAdminPanelMicrocontrollerManager');
    
    // GET a result through Python API
    $http.get('/api/arancino_admin_panel_microcontroller_manager').then( (resp) => {
	    $scope.python_get = resp.data;
    });

    // POST a result through Python API
    $http.post('/api/arancino_admin_panel_microcontroller_manager', {my_var: 'arancino_admin_panel_microcontroller_manager'}).then( (resp) => {
	    $scope.python_post = resp.data;
    });

});

