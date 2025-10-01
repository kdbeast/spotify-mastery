import { useParams } from "react-router-dom";
import { artistsData } from "./artistsData";

const ArtistProfile = () => {
  const { id } = useParams();

  // Find the artist by id
  const artist = artistsData.find((a) => a.id === id);

  if (!artist) {
    return (
      <div className="text-white text-center mt-10">Artist not found.</div>
    );
  }

  return (
    <div className="p-8 flex flex-col items-center text-white bg-gradient-to-b from-[#00020f] to-[#121286] min-h-screen">
      {/* Artist Info */}
      <h1 className="text-4xl font-bold mt-4">{artist.artistName}</h1>
      <p className="text-gray-300 mt-1">{artist.fullName || "Unknown Name"}</p>
      <p className="text-gray-400 mt-1">{artist.origin}</p>
      {artist.yearsActive && (
        <p className="text-gray-400 italic mt-1">
          Active: {artist.yearsActive}
        </p>
      )}
      {artist.birthDate && (
        <p className="text-gray-400 text-sm mt-1">
          Born: {new Date(artist.birthDate).toLocaleDateString()}
        </p>
      )}
      {artist.deathDate && (
        <p className="text-gray-400 text-sm mt-1">
          Died: {new Date(artist.deathDate).toLocaleDateString()}
        </p>
      )}

      {/* Genres */}
      {artist.genres && (
        <p className="text-gray-300 mt-2">Genres: {artist.genres.join(", ")}</p>
      )}

      {/* Top Tracks */}
      {artist.topTracks && artist.topTracks.length > 0 && (
        <div className="mt-6 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-2">Top Tracks</h2>
          <ul className="list-decimal pl-5 text-gray-300">
            {artist.topTracks.map((track) => (
              <li key={track}>{track}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Albums */}
      {artist.albums && artist.albums.length > 0 && (
        <div className="mt-6 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-2">Albums</h2>
          <ul className="list-disc pl-5 text-gray-300">
            {artist.albums.map((album) => (
              <li key={album.title}>
                {album.title} ({album.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Milestones */}
      {artist.milestones && artist.milestones.length > 0 && (
        <div className="mt-6 w-full max-w-xl">
          <h2 className="text-2xl font-semibold mb-2">Milestones</h2>
          <ul className="list-disc pl-5 text-gray-300">
            {artist.milestones.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;
