import libapi.endpoints.endpoints as endpoints
import json
from pathlib import Path



def loadAlbumsbyGenre():
    genres = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "R&B", "Latino", "Blues"]
    
    DIR = f'{str(Path(__file__).parent)}\\albumsCategory'

   
    for genre in genres:
        print(f'Now loading {genre}...')
        popular_albums = []
        popular_album_names = []
        popular_artists = endpoints.serach_for_artist_by_genre(genre)
        for artist in popular_artists:
            artist_id  = endpoints.get_artist_id(artist)
            popular_album = endpoints.get_most_popular_album(artist_id)
            if popular_album['album_name'] not in popular_album_names:
                popular_albums.append(popular_album)
                popular_album_names.append(popular_album['album_name'])
        with open(f'{DIR}\\{genre}.json', 'w') as f:
            json.dump(popular_albums, f)
            print(f'{genre} done loading.')


def loadPopularAlbums():
    genres = ["Alternative", "Pop", "Rap", "K-pop", "Electronic", "Country", "R&B", "Latino", "Afrobeat", "Funk"]
    DIR = f'{str(Path(__file__).parent)}\\albumsCategory'
    popular_album_names = []
    popular_albums = []
    for genre in genres:
        print(f'Now loading {genre}...')
        
        
        popular_artists = endpoints.serach_for_artist_by_genre(genre, limit= 1)
        artist_id  = endpoints.get_artist_id(popular_artists)
        popular_album = endpoints.get_most_popular_album(artist_id)
        if popular_album['album_name'] not in popular_album_names:
            popular_albums.append(popular_album)
            popular_album_names.append(popular_album['album_name'])

        
    
    with open(f'{DIR}\\popularAlbums.json', 'w') as f:
        json.dump(popular_albums, f)
        print(f'{genre} done loading.')

def loadRecentAlbums():

    DIR = f'{str(Path(__file__).parent)}\\albumsCategory'
   
    recent_albums = endpoints.get_most_recent_albums()


    with open(f'{DIR}\\recentAlbums.json', 'w') as f:
        json.dump(recent_albums, f)
        
    

    

    

if __name__ =='__main__':
    loadRecentAlbums()

            
