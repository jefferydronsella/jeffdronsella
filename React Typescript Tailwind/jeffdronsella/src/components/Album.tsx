export default function Album({ albumCover, title, spotifyUrl, appleUrl, youtubeUrl }: { albumCover: string, title: string, spotifyUrl: string, appleUrl: string, youtubeUrl: string }) {
  return (
    <div className="md:flex">
      <img src={albumCover} alt="album cover art" className="shadow-lg w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]" />
      <div className="md:ml-8 mt-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{title}</h2>
        <ul className="list-disc ml-6 text-xl sm:text-2xl md:text-3xl">
          <li className="mt-4"><a href={spotifyUrl}>Spotify</a></li>
          <li className="mt-2"><a href={appleUrl}>Apple Music</a></li>
          <li className="mt-2"><a href={youtubeUrl}>YouTube</a></li>
        </ul>
      </div>
    </div>
  )
}