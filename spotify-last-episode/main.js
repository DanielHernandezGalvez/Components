// npm install spotify-web-api-node

const clientId = "336910e6331f466ab460dff69bb94358";
const clientSecret = "70565bc0dcf647538ab3c943a9f09ecc";

// Replace this with your show ID
const showId = "35LWOWQ76ENHISgGpOyXE0"; // Debes reemplazar esto con el ID de tu programa

const getLatestEpisode = async () => {
  // Create a new Spotify Web API client
  const client = new SpotifyWebApi({
    clientId,
    clientSecret,
  });

  // Authenticate and get an access token
  const data = await client.clientCredentialsGrant();
  const token = data.body.access_token;
  client.setAccessToken(token);

  // Use the client to get the latest episode of your show
  const response = await client.getShowEpisodes(showId, { limit: 1, offset: 0 });
  const latestEpisode = response.body.items[0];

  return latestEpisode;
};

getLatestEpisode().then((episode) => {
  // Update the iframe src with the latest episode's URI
  const iframe = document.querySelector("iframe");
  iframe.src = `https://open.spotify.com/embed/episode/${episode.id}`;
});
