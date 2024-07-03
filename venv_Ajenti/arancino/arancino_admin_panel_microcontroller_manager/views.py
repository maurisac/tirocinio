from jadi import component

from aj.api.http import get, post, HttpPlugin
from aj.auth import authorize
from aj.api.endpoint import endpoint, EndpointError

@component(HttpPlugin)
class Handler(HttpPlugin):
    def __init__(self, context):
        self.context = context

    # Register URL for this api
    # Available methods are post, get, patch, delete and put
    @get(r'/api/arancino_admin_panel_microcontroller_manager')
    # Set the right permissions if necessary, see main.py to activate it.
    #@authorize('arancino_admin_panel_microcontroller_manager:show')
    @endpoint(api=True)
    def handle_api_get_example_arancino_admin_panel_microcontroller_manager(self, http_context):

        text = "This content was generated through a GET call to Python !"
        return text

    @post(r'/api/arancino_admin_panel_microcontroller_manager')
    # Set the right permissions if necessary, see main.py to activate it.
    #@authorize('arancino_admin_panel_microcontroller_manager:show')
    @endpoint(api=True)
    def handle_api_post_example_arancino_admin_panel_microcontroller_manager(self, http_context):

        data = http_context.json_body()['my_var']
        text = "This content in the module %s was generated through a POST call to Python !" % data
        return text
