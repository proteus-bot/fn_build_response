const Datastore = require('@google-cloud/datastore');

const datastore = new Datastore({});

/**
 * Process Discord message matches.
 *
 * @param {!Object} event The Cloud Functions event.
 * @param {!Function} The callback function.
 */
exports.fn_build_response = (event, callback) => {
  const pubsubMessage = event.data;
  
  const jsonString = Buffer.from(pubsubMessage.data, 'base64').toString();
  const message = JSON.parse(jsonString);
  
  const discordMessageId = message.discordMessageId;
  const matches = message.matches;

  const query = datastore.createQuery('Response');

  query.run().then(data => {
    const responses = data[0];

    callback();
  }).catch(err => {
    console.error(`Query failed: ${err}`);
    callback();
  });
};
