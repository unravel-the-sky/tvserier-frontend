import axios from "axios";

const backendUrl = "http://localhost:5000";
const getAllShowsUrl = `${backendUrl}/api/shows`;
const getAllEpisodesUrl = `${backendUrl}/api/shows/episodes`;
const readFromConfigFileUrl = `${backendUrl}/api/shows/read`;
const getTopTenUrl = `${backendUrl}/api/shows/topten`;
const getNextWeekShowsUrl = `${backendUrl}/api/shows/nextweek`;
const getByNetworksUrl = `${backendUrl}/api/shows/network`;

const handleResponse = res => {
  // const result = {
  //     error: false,
  //     status: res.status,
  //     statusText: res.statusText,
  //     data: res.data
  // }
  console.log("data: ", res);
  return res;
};

const handleError = (err, methodName) => {
  console.error(`error on ${methodName}: ${err}`);
  return err;
};

export default {
  getAllShows() {
    console.log("url: ", getAllShowsUrl);
    return axios
      .get(getAllShowsUrl)
      .then(res => handleResponse(res))
      .catch(err => handleError(err, "getAllShows"));
  },
  getAllEpisodes() {
    console.log("url: ", getAllEpisodesUrl);
    return axios
      .get(getAllShowsUrl)
      .then(res => handleResponse(res))
      .catch(err => handleError(err, "getAllEpisodes"));
  },
  readFromConfigFile() {
    console.log("url: ", readFromConfigFileUrl);
    return axios
      .get(getAllShowsUrl)
      .then(res => handleResponse(res))
      .catch(err => handleError(err, "readFromConfigFile"));
  },
  getTopTen() {
    console.log("url: ", getTopTenUrl);
    return axios
      .get(getAllShowsUrl)
      .then(res => handleResponse(res))
      .catch(err => handleError(err, "getTopTen"));
  },
  getNextWeekShows() {
    console.log("url: ", getNextWeekShowsUrl);
    return axios
      .get(getAllShowsUrl)
      .then(res => handleResponse(res))
      .catch(err => handleError(err, "getNextWeekShows"));
  },
  getByNetworks() {
    console.log("url: ", getByNetworksUrl);
    return axios
      .get(getAllShowsUrl)
      .then(res => handleResponse(res))
      .catch(err => handleError(err, "getByNetworksƒ"));
  }
};
