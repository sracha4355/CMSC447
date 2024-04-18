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
        
    
<<<<<<< HEAD
def loadSongsbyGenre():
    genres = ["Rock", "Pop", "Rap", "Jazz", "Classical", "Electronic", "Country", "R&B", "Latino", "Blues"]
    
    DIR = f'{str(Path(__file__).parent)}\\songsCategory'

   
    for genre in genres:
        print(f'Now loading {genre}...')
        popular_songs = []
        popular_song_names = []
        popular_artists = endpoints.serach_for_artist_by_genre(genre)
        for artist in popular_artists:
            artist_id  = endpoints.get_artist_id(artist)
            popular_song = endpoints.get_most_popular_song(artist_id)
            if popular_song['song_name'] not in popular_song_names:
                popular_songs.append(popular_song)
                popular_song_names.append(popular_song['song_name'])
        with open(f'{DIR}\\{genre}.json', 'w') as f:
            json.dump(popular_songs, f)
            print(f'{genre} done loading.')



def loadPopularSongs():
    genres = ["Alternative", "Pop", "Rap", "k-pop", "Electronic", "Country", "R&B", "Latino", "Afrobeat", "Funk"]
    DIR = f'{str(Path(__file__).parent)}\\songsCategory'
    popular_songs = []
    popular_song_names = []
    for genre in genres:
        print(f'Now loading {genre}...')
        
        
        popular_artists = endpoints.serach_for_artist_by_genre(genre, limit= 1)
        artist_id  = endpoints.get_artist_id(popular_artists)
        popular_song = endpoints.get_most_popular_song(artist_id)
        if popular_song['song_name'] not in popular_song_names:
            popular_songs.append(popular_song)
            popular_song_names.append(popular_song['song_name'])

        
    
    with open(f'{DIR}\\popularSongs.json', 'w') as f:
        json.dump(popular_songs, f)
        print(f'{genre} done loading.')
        
    
    
def loadRecentTracks():

    DIR = f'{str(Path(__file__).parent)}\\songsCategory'
   
    recent_tracks = endpoints.get_most_recent_tracks()

    
    with open(f'{DIR}\\recentTracks.json', 'w') as f:
        json.dump(recent_tracks, f)
    

if __name__ =='__main__':
    loadRecentTracks()
=======

    

    

if __name__ =='__main__':
    loadRecentAlbums()

>>>>>>> 1d24ef0567f1c9f6b8bdffb94bb4fbd3f20f9ab6
            
