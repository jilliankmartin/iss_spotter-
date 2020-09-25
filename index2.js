const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    transformPasstimes(passTimes);
  })
  .catch((error) => {
    console.log("There was an error: ", error.message);
  });

  const transformPasstimes = function(passTimes) {
    for (const item of passTimes) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(item.risetime);
      const duration = item.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  };