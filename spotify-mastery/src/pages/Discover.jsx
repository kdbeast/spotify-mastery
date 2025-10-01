import { useEffect, useState } from "react";
import { genres } from "../assets/constants";
import { Error, Loader, SongCard } from "../components";
import { useSelector } from "react-redux";

const fetchSongs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          songName: "Chal Bombay",
          artistName: "DIVINE",
          filePath: "songs/1.mp3",
          coverPath: "covers/1.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "0008",
          artistName: "Sidhu Moose Wala",
          filePath: "songs/2.mp3",
          coverPath: "covers/2.jpg",
          genre: "Rock",
        },
        {
          songName: "Courtside",
          artistName: "Karan Aujla",
          filePath: "songs/3.mp3",
          coverPath: "covers/3.jpg",
          genre: "Pop",
        },
        {
          songName: "Bornfire",
          artistName: "DIVINE",
          filePath: "songs/4.mp3",
          coverPath: "covers/4.jpg",
          genre: "Electronic",
        },
        {
          songName: "Zero After Zero",
          artistName: "Kr$na",
          filePath: "songs/5.mp3",
          coverPath: "covers/5.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "Maruti",
          artistName: "Dhanda Nyoliwala",
          filePath: "songs/6.mp3",
          coverPath: "covers/6.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "I Really Do",
          artistName: "Karan Aujla",
          filePath: "songs/7.mp3",
          coverPath: "covers/7.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "25-25",
          artistName: "Arjan Dhillon",
          filePath: "songs/8.mp3",
          coverPath: "covers/8.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "Blinding Lights",
          artistName: "The Weeknd",
          filePath: "songs/9.mp3",
          coverPath: "covers/9.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "Scapegoat",
          artistName: "Sidhu Moose Wala",
          filePath: "songs/10.mp3",
          coverPath: "covers/10.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "First Class",
          artistName: "Sukhe",
          filePath: "songs/11.mp3",
          coverPath: "covers/11.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "Cupid",
          artistName: "Fifty Fifty",
          filePath: "songs/12.mp3",
          coverPath: "covers/12.jpg",
          genre: "Hip-Hop",
        },
      ]);
    }, 2000);
  });
};

const Discover = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  // const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const genreTitle = "Pop";

  useEffect(() => {
    fetchSongs().then((data) => {
      setSongs(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader title="Loading songs..." />;

  if (!songs) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-center items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {songs.map((song, i) => (
          <SongCard
            i={i}
            song={song}
            data={songs}
            key={song.songName}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
