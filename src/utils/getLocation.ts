//* Imports
import axios from "axios";

//* getLocation Helper Function
const getLocation = async (searchText: string) => {
  const {
    data: {
      isp,
      ip,
      location: { country, timezone, region },
    },
  } = await axios.get(
    `https://geo.ipify.org/api/v2/country?apiKey=at_aSIJu8mCPtgaYaLvWsDYQ2vKQIuer&domain=${searchText}`
  );

  return { isp, ip, country, timezone, region };
};

export default getLocation;
