import { useEffect, useState } from "react";
import { getAlbumData, AlbumData } from "../albums/AlbumData";
import Album from "./Album";

export default function Music() {
  const [albums, setAlbums] = useState<AlbumData[]>([]);

  useEffect(() => {
    async function fetchAlbums() {
      setAlbums(await getAlbumData())
    }

    fetchAlbums();
  }, [])

  return (
    < main className="flex justify-center" >
      <div className="w-full px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-justify sm:text-center">Songs inspired by the Holy Spirit, written on the hearts of men.</h2>
        <ul className="w-max mx-auto">
          {
            albums.map((album: AlbumData) => (
              <li className="mt-6" key={album.id}>
                <Album album={album} />
              </li>
            ))
          }
        </ul>
      </div>
    </ main>
  )
}