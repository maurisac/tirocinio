angular.module('ajenti_plugin_mcu_manager',)
    .controller('AjentiPluginMcuManagerIndexController',
        function($scope, $http, pageTitle, gettext, notify) {

            pageTitle.set(gettext('MCU Manager'));

            $scope.my_title = gettext('Microcontroller Manager');

            $scope.reset = () => {
                notify.info('Trying to reset the microcontroller...');
                $http.get('/api/ajenti_plugin_mcu_manager/reset').then((response) => {
                    console.log('Reset Response:', response);
                    notify.info(response.data.message);
                }).catch((error) => {
                    console.error('Reset Error:', error);
                    notify.error('Failed to reset the microcontroller: ' + (error.data ? error.data.message : 'Unknown error'));
                });
            };

            $scope.blmode = () => {
                notify.info('Entering bootloader mode...');
                $http.get('/api/ajenti_plugin_mcu_manager/bootmode').then((response) => {
                    console.log('Bootmode Response:', response);
                    notify.info(response.data.message);
                }).catch((error) => {
                    console.error('Bootmode Error:', error);
                    notify.error('Failed to enter bootloader mode: ' + (error.data ? error.data.message : 'Unknown error'));
                });
            };

            $scope.prova = () => {
                notify.info('Prova');
                $http.get('/api/ajenti_plugin_mcu_manager/prova').then((response) => {
                    console.log('Risposta:', response);
                    notify.info(response.data.message);
                }).catch((error) => {
                    console.error('Errore:', error);
                    notify.error("C'è stato un errore: " + (error.data ? error.data.message : 'Unknown error'));
                });
            };
    });