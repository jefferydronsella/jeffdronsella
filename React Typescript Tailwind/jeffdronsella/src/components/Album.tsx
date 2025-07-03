import { AlbumData } from "../albums/AlbumData";

export default function Album({ album }: { album: AlbumData }) {
  return (
    <div className="md:flex">
      <img src={album.albumCover} alt="album cover art" className="shadow-lg w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]" />
      <div className="md:ml-8 mt-2">
        <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{album.albumTitle}</h2>
        <h2 className="text-m sm:text-l md:text-xl font-semibold mt-1">by</h2>
        <h2 className="font-[bernhardfashion] text-xl sm:text-2xl md:text-3xl font-semibold mt-1">{album.artist}</h2>
        </div>
        <ul className="list-disc ml-6 text-xl sm:text-2xl md:text-3xl mt-4">
          {album.links.map((link, index) => (
            <li className={"mt-2"} key={index}><a href={link.url}>{link.text}</a></li>
          ))}
        </ul>
      </div>
    </div>
  )
}