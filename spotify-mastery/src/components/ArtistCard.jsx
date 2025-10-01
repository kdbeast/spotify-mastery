import { useNavigate } from "react-router-dom";

const ArtistCard = ({ artist }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[250px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer hover:bg-white/15 transition"
      onClick={() => navigate(`/artists/${artist.id}`)}
    >
      {/* Artist Image */}
      <img
        alt={artist.name}
        src={artist.image}
        className="w-full h-56 rounded-lg object-cover"
      />

      {/* Name */}
      <p className="mt-4 font-semibold text-lg text-white text-center">
        {artist.name}
      </p>

      {/* Origin */}
      <p className="text-gray-400 text-sm text-center">{artist.origin}</p>

      {/* Genres */}
      <p className="text-gray-300 text-xs text-center mt-1">
        {artist.genres.join(", ")}
      </p>

      {/* Years active */}
      <p className="text-gray-400 text-xs text-center mt-1 italic">
        {artist.yearsActive}
      </p>
    </div>
  );
};

export default ArtistCard;
