export type AlbumResponse = {
  albums: AlbumData[]
}

export type AlbumData = {
  id: number;
  artist: string;
  albumTitle: string;
  albumCover: string;
  links: MediaLink[];
}

export type MediaLink = {
  text: string;
  url: string;
}

export async function getAlbumData() {
  const response = await fetch('/albums/albums.json')
  const text = await response.text()
  const albumResponse: AlbumResponse = JSON.parse(text)
  return(albumResponse.albums)
}