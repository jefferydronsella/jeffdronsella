import Image from "next/image";
import Link from "next/link";

export default function Album({albumCover, title, spotifyUrl, appleUrl, youtubeUrl} : {albumCover: string, title: string, spotifyUrl: string, appleUrl: string, youtubeUrl: string}) {
  return (
    <div className="flex">
      <Image src={albumCover} alt="album cover art" width="300" height="300" className="shadow-lg"/>
      <div className="ml-8 mt-2">
        <h2 className="text-4xl font-semibold">{title}</h2>
        <ul className="list-disc ml-6 text-3xl">
          <li className="mt-4"><Link href={spotifyUrl}>Spotify</Link></li>
          <li className="mt-2"><Link href={appleUrl}>Apple Music</Link></li>
          <li className="mt-2"><Link href={youtubeUrl}>YouTube</Link></li>
        </ul>
      </div>
    </div>
  )
}