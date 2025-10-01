import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
 ( isPlaying && activeSong?.songName === song.songName ? (
    <FaPauseCircle 
    size={35} 
    onClick={handlePause} 
    className="text-gray-300" />
  ) : (
    <FaPlayCircle 
    size={35} 
    onClick={handlePlay} 
    className="text-gray-300" />
  ));

export default PlayPause;
