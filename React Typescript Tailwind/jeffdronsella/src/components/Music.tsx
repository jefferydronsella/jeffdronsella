import Album from "./Album";

export default function Music() {
  return (
    <main className="flex justify-center">
      <div className="w-full px-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-justify sm:text-center">Songs inspired by the Holy Spirit, written on the hearts of men.</h2>
        <ul className="w-max mx-auto">
          <li className="mt-6">
            <Album
              albumCover="/albums/mgp-cover.jpg"
              title="My Grandfather's Piano"
              spotifyUrl="https://open.spotify.com/album/6vNOwlSMwYGcSCPquvIEWc?si=ZS5VegPeQJWXnLm0R7U8aQ"
              appleUrl="https://music.apple.com/us/album/my-grandfathers-piano/1439786659"
              youtubeUrl="https://www.youtube.com/watch?v=DOFJxYxPqxA&list=OLAK5uy_nb9Pru02CBc9JtgIJulQubUp_6Rc4MFtM"
            />
          </li>
          <li className="mt-6">
            <Album
              albumCover="/albums/bmam-cover.jpg"
              title="Bring Me a Minstrel"
              spotifyUrl="https://open.spotify.com/album/1rK9Bkwo7aui4qVkhmDZrI?si=CSU3kYlFQraM-D8vHdXHRQ"
              appleUrl="https://music.apple.com/us/album/bring-me-a-minstrel/1405581424"
              youtubeUrl="https://www.youtube.com/watch?v=YGVxblE6gtA&list=OLAK5uy_kqLeKLsgq8kjKJLMObZ_thIwRAVRhhobo"
            />
          </li>
        </ul>
      </div>
    </main>
  )
}