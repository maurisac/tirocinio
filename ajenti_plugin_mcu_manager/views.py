import subprocess
from jadi import component
from aj.api.http import HttpPlugin, url
from aj.api.endpoint import endpoint, EndpointError

# FIRMWARES_DIR = "/firmwares/"
# ACCEPTED_EXT = ['.iso', '.img']

@component(HttpPlugin)
class Handler(HttpPlugin):
    def __init__(self, context):
        self.context = context

    @url(r'/api/ajenti_plugin_mcu_manager/reset')
    @endpoint(api=True)
    def handle_reset(self, http_context):
        try:
            subprocess.run(["MCU_reset"], check=True)
            return {'status': 'success', 'message': 'Microcontroller reset successfully'}
        except subprocess.CalledProcessError as e:
            raise EndpointError(f'Error resetting microcontroller: {str(e)}')
        except Exception as e:
            raise EndpointError(f'Unexpected error: {str(e)}')

    @url(r'/api/ajenti_plugin_mcu_manager/bootmode')
    @endpoint(api=True)
    def handle_bootmode(self, http_context):
        try:
            subprocess.run(["MCU_bootmode"], check=True)
            return {'status': 'success', 'message': 'Microcontroller entered bootloader mode'}
        except subprocess.CalledProcessError as e:
            raise EndpointError(f'Error entering bootloader mode: {str(e)}')
        except Exception as e:
            raise EndpointError(f'Unexpected error: {str(e)}')

    @url(r'/api/ajenti_plugin_mcu_manager/prova')
    @endpoint(api=True)
    def prova(self, http_context):
        try:
            subprocess.run(["touch", "/prova.txt"], check=True)
            return {'status': 'success', 'message': 'File creato'}
        except subprocess.CalledProcessError as e:
            raise EndpointError(f'Error creating file: {str(e)}')
        except Exception as e:
            raise EndpointError(f'Unexpected error: {str(e)}')