export const getCoords = async (address) => {
  let long;
  let lat;
  await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoia2t3b3JrIiwiYSI6ImNsdGZucnJnMjBhcTMyanBuaGxpMWdxZGUifQ.FWTmvhPBxzkXAibuT4k_CQ`)
    .then(response => response.json())
    .then(data => {
      const [longitude, latitude] = data.features[0].center;
      long = longitude
      lat = latitude
    });
  return [lat, long]
}