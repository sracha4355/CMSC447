import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent.parent))

import unittest  
from libapi.query.spot_artist_builder import SpotifyArtistEndpoint
from libapi.access import access_token
from libapi.utils.utils import pretty_print

### will use to store uids for searching
from libapi.query.spot_search_builder import SpotifySearchEndpoint


PATH_TO_TOKEN = f'{str(Path("../access/").absolute())}\\'
if access_token.check_expiration(path=PATH_TO_TOKEN):
    access_token.load_access_token(path=PATH_TO_TOKEN)
ACCESS_TOKEN = access_token.extract_access_token(path=PATH_TO_TOKEN)

class TrackEndPointClassTests(unittest.TestCase):
    def test_get_artist(self):
        pass

    def test_get_multiple_artists(self):
        pass

    def test_get_artists_endpoints(self):
        pass


if __name__ == '__main__':
    print('RUNNING TESTS...')
    unittest.main()