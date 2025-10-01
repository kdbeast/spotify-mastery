import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

const fetchSongs = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          songName: "Baazigar",
          artistName: "DIVINE",
          filePath: "topSongs/1.mp3",
          coverPath: "topCovers/1.jpg",
          genre: "Hip-Hop",
        },
        {
          songName: "KKBN",
          artistName: "Kr$na",
          filePath: "topSongs/2.mp3",
          coverPath: "topCovers/2.png",
          genre: "Rock",
        },
        {
          songName: "Starboy",
          artistName: "The Weeknd",
          filePath: "topSongs/3.mp3",
          coverPath: "topCovers/3.jpg",
          genre: "Pop",
        },
        {
          songName: "Talk My Shit",
          artistName: "Kr$na",
          filePath: "topSongs/4.mp3",
          coverPath: "topCovers/4.jpg",
          genre: "Electronic",
        },
        {
          songName: "3:59",
          artistName: "DIVINE",
          filePath: "topSongs/5.mp3",
          coverPath: "topCovers/5.webp",
          genre: "Hip-Hop",
        },
      ]);
    }, 5000);
  });
};

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <div
    className={`w-full flex flex-row items-center hover:bg-[#05054a] ${
      activeSong?.songName === song?.songName
        ? "bg-[#05054a]"
        : "bg-transparent"
    } py-2 p-4 rounded-lg cursor-pointer mb-2`}
  >
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img
        className="w-20 h-20 rounded-lg"
        src={song.coverPath}
        alt={song.songName}
      />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <p className="text-xl font-bold text-white">{song.songName}</p>
        <p className="text-base text-gray-300 mt-1">{song.artistName}</p>
      </div>
    </div>
    <PlayPause
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePlay={handlePlayClick}
      handlePause={handlePauseClick}
    />
  </div>
);

const TopPlay = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const divRef = useRef(null);

  useEffect(() => {
    fetchSongs().then((data) => {
      setData(data);
    });
  }, []);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div
      ref={divRef}
      className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col"
    >
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays.map((song, i) => (
            <TopChartCard
              i={i}
              song={song}
              key={song.songName}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
