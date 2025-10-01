import PlayPause from "./PlayPause";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="relative flex flex-col p-4 bg-white/15 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-auto group">
        <div
          className={`absolute inset-0 justify-center items-center bg-black/50 group-hover:flex
      ${activeSong?.songName === song.songName ? "flex" : "hidden"} 
      `}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>

        <img
          src={song.coverPath}
          alt={song.songName}
          className="w-50 h-50 object-cover rounded-md"
        />
      </div>

      <span className="text-white font-bold text-lg text-center mt-2">
        {song.songName}
      </span>
      <span className="text-gray-300 font-medium text-sm text-center mt-1">
        {song.artistName || "Unknown Artist"}
      </span>
    </div>
  );
};

export default SongCard;
