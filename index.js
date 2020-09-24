const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss')

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("24.85.230.127", (error, coords) => {
//   if (error) {
//     console.log(`There was an error: ${error}`);
//     return;
//   }
//   console.log(coords);
// });

// fetchISSFlyOverTimes({ latitude: '49.26660', longitude: '-123.19760' }, (error, passes) => {
//   if (error) {
//     console.log(`There was an error: ${error}`);
//     return;
//   }
//   console.log(passes);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  console.log(passTimes);
});