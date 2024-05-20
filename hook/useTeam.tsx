"use client";

import { useState, useEffect } from "react";

interface ImgTeam {
  picture: {
    large: string;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
}

const useTeam = (numImages: number, seed: string) => {
  const [teamData, setTeamData] = useState<ImgTeam[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://randomuser.me/api/?results=${numImages}&seed=${seed}`);
        const data = await response.json();
        if (data.results) {
          setTeamData(data.results);
          console.log(data.results)
        } else {
          console.error("No results found in the API response.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [numImages, seed]);

  return { teamData };
};

export default useTeam;
