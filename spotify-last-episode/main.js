// import SpotifyClient from "spotify-web-api-node";


const SpotifyClient = require("spotify-web-api-node");

const clientId = "336910e6331f466ab460dff69bb94358";
const clientSecret = "70565bc0dcf647538ab3c943a9f09ecc";

const iframe = document.querySelector("iframe");
const showId = iframe.dataset.showId;

const getLatestEpisode = async () => {
  const client = new SpotifyClient({
    clientId,
    clientSecret,
  });

  const token = await client.getAccessToken();

  const url = `https://api.spotify.com/v1/shows/${showId}/episodes/latest`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data.episode;
};

setInterval(getLatestEpisode, 600);

getLatestEpisode().then((episode) => {
  iframe.src = `https://open.spotify.com/embed/episode/${episode.id}?si=${episode.uri}`;
});