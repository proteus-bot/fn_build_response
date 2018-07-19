
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
  
  console.log(`Matches for discord message ${discordMessageId}: ${JSON.stringify(matches)}`);

  callback();
};
