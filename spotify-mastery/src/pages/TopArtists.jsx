import { useEffect, useState } from "react";
import { ArtistCard, Loader } from "../components";

const fetchArtists = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "divine",
          name: "DIVINE",
          fullName: "Vivian Wilson Fernandes",
          image: "artistImage/divine.jpg",
          origin: "Mumbai, India",
          genres: ["Hip Hop", "Gully Rap", "Desi Hip Hop"],
          yearsActive: "2011 – Present",
        },
        {
          id: "krna",
          name: "KR$NA",
          fullName: "Krishna Kaul",
          image: "artistImage/kr$na.jpg",
          origin: "Delhi, India",
          genres: ["Hip Hop", "Desi Hip Hop"],
          yearsActive: "2006–present",
        },
        {
          id: "karan_aujla",
          name: "Karan Aujla",
          fullName: "Jaskaran Singh Aujla",
          image: "artistImage/karan.jpg",
          origin: "Ludhiana, Punjab, India",
          genres: ["Punjabi", "Hip Hop", "Pop", "R&B"],
          yearsActive: "2014–present",
        },
        {
          id: "the_weeknd",
          name: "The Weeknd",
          fullName: "Abel Makkonen Tesfaye",
          image: "artistImage/weeknd.jpg",
          origin: "Toronto, Ontario, Canada",
          genres: ["R&B", "Pop", "Alternative R&B"],
          yearsActive: "2009–present",
        },
        {
          id: "dhanda_nyoliwala",
          name: "Dhanda Nyoliwala",
          fullName: "Dhanda Nyoliwala",
          image: "artistImage/dhanda.jpg",
          origin: "Punjab / Haryanvi region",
          genres: ["Desi Hip Hop", "Punjabi", "Haryanvi"],
          yearsActive: "Recent (2020s)",
        },
        {
          id: "sidhu_moose_wala",
          name: "Sidhu Moose Wala",
          fullName: "Shubhdeep Singh Sidhu",
          image: "artistImage/sidhu.jpg",
          origin: "Moosa, Mansa, Punjab, India",
          genres: ["Punjabi Hip Hop", "Punjabi Pop", "Desi Hip Hop"],
          yearsActive: "2016 to 2022",
        },
      ]);
    }, 2000);
  });
};

const TopArtists = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtists().then((data) => {
      setArtists(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader title="Loading artists..." />;

  return (
    <div className="flex flex-col">
      <h2 className="flex justify-center font-bold text-3xl text-white text-left mt-4 mb-10">
        Top Artists
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {artists?.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
