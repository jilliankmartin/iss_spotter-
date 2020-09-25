const request = require('request-promise-native');

const fetchMyIP = function() {
  return request('https://api.ipify.org/?format=json');
};

const fetchCoordsByIP = function(body) {
  const parsedBody = JSON.parse(body).ip
  return request(`https://ipvigilante.com/json/${parsedBody}`);
};

const fetchISSFlyOverTimes  = function(body) {
  const parsedBodyLat = JSON.parse(body).data.latitude;
  const parsedBodyLon = JSON.parse(body).data.longitude;
  return request(`http://api.open-notify.org/iss-pass.json?lat=${parsedBodyLat}&lon=${parsedBodyLon}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

module.exports = { nextISSTimesForMyLocation };