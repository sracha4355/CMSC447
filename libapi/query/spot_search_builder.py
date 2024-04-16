import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent.parent))
from libapi.query.query_builder import QueryBuilder

class SpotifySearchEndpoint:
    """
    SpotifySearchEndpoint provides methods to perform searches using Spotify's search endpoint.

    Attributes:
        url (str): The base URL for Spotify's search API.
        builder (QueryBuilder): An instance of QueryBuilder for building HTTP requests.
    """
    def __init__(self, params={}, headers={}):
        """
        Initialize a SpotifySearchEndpoint instance.

        Args:
            params (dict): Parameters for the search request.
            headers (dict): Headers for the search request.
        """
        self.url = "https://api.spotify.com/v1/search"
        self.builder = QueryBuilder(url=self.url)

    def set_params(self, params: dict[str, str]):
        """
        Set parameters for the search request.

        Args:
            params (dict): Parameters to set for the search request.

        Returns:
            SpotifySearchEndpoint: The SpotifySearchEndpoint instance.
        """
        for key, val in params.items():
            self.builder.add_params(key, val)
        return self
    
    def set_header(self, headers: dict[str, str]):
        """
        Set headers for the search request.

        Args:
            headers (dict): Headers to set for the search request.

        Returns:
            SpotifySearchEndpoint: The SpotifySearchEndpoint instance.
        """
        for key, val in headers.items():
            self.builder.add_header(key, val)
        return self
    
    def clear(self):
        """
        Clear parameters and headers for the search request.

        Returns:
            SpotifySearchEndpoint: The SpotifySearchEndpoint instance.
        """
        self.builder.clear()
        return self
    
    def make_request(self):
        """
        Make the search request.

        Returns:
            Response: The response from the search request.
        """
        return self.builder.make_get_request()
