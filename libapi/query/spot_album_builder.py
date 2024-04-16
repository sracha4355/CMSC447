import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent.parent))
from libapi.query.query_builder import QueryBuilder

class SpotifyAlbumEndpoint:
    """
    SpotifyAlbumEndpoint provides methods to interact with Spotify's album endpoints.

    Attributes:
        error (str): A string to store error messages.
        url (str): The base URL for Spotify's API.
        token (str): The access token for authentication.
        builder (QueryBuilder): An instance of QueryBuilder for building HTTP requests.
    """
    def __init__(self, access_token=None):
        """
        Initialize a SpotifyAlbumEndpoint instance.

        Args:
            access_token (str): The access token for authentication.
        """
        self.error = ""
        self.url = 'https://api.spotify.com/v1'
        self.token = access_token
        self.builder = QueryBuilder(url=self.url)

    def get_album(self, uid: str):
        """
        Get details of a single album.

        Args:
            uid (str): The ID of the album.

        Returns:
            Response: The response from the GET request.
        """
        if not self._checks():
            return {"error": {"liberror": self.error}}
        
        # Build the request
        response = self.builder\
            .add_to_url("albums")\
            .add_to_url(uid)\
            .add_header("Authorization", f'Bearer {self.token}')\
            .make_get_request()
        
        # Clear the HTTP params and reset the base URL
        self.builder\
            .clear()\
            .add_to_url(self.url)
        
        return response

    def get_several_albums(self, uids: list[str]):
        """
        Get details of several albums.

        Args:
            uids (list[str]): A list of album IDs.

        Returns:
            Response: The response from the GET request.
        """
        if not self._checks():
            return {"error": {"liberror": self.error}}
        
        # Build the request
        response = self.builder\
            .add_to_url("albums")\
            .add_params("ids", ",".join(uids))\
            .add_header("Authorization", f'Bearer {self.token}')\
            .make_get_request()
        
        # Clear the HTTP params and reset the base URL
        self.builder\
            .clear()\
            .add_to_url(self.url)
        
        return response

    def get_albums_tracks(self, uid:str, limit:str=None, offset=None, market=None):
        """
        Get the tracks of an album.

        Args:
            uid (str): The ID of the album.
            limit (str): The maximum number of tracks to return.
            offset (str): The index of the first track to return.
            market (str): The market to retrieve tracks from.

        Returns:
            Response: The response from the GET request.
        """
        if not self._checks():
            return {"error": {"liberror": self.error}}
        
        # Build the minimum request without optional parameters
        self.builder\
            .add_to_url("albums")\
            .add_to_url(uid)\
            .add_to_url("tracks")\
            .add_header("Authorization", f'Bearer {self.token}')
        
        # Add optional parameters to the request
        if limit is not None:
            if type(limit) != str: 
                limit = str(limit)
            self.builder.add_params("limit", limit)
        if offset is not None:
            if type(offset) != str:
                offset = str(offset)
            self.builder.add_params("offset", offset)
        if market is not None:
            if type(market) != str:
                market = str(market)
            self.builder.add_params("market", market)
        
        # Make request and store response
        response = self.builder.make_get_request()
        
        # Clear the HTTP params and reset the base URL
        self.builder\
            .clear()\
            .add_to_url(self.url)
        
        return response

    def _checks(self) -> bool:
        """
        Perform checks before making requests.

        Returns:
            bool: True if checks pass, False otherwise.
        """
        if self.token == None:
            self.error = "access token improperly initalized"
            return False
        self.error = "0"
        return True

        




