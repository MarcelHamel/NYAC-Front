const ValidateCache = () => {

  // Define current time, and the last cache update time stamp.
  const currentTime = new Date().getTime();
  const lastCacheUpdate = localStorage.getItem('lastUpdateTime');

  // Defines cache expiration time (15 min).
  const cacheTTLValid = currentTime - lastCacheUpdate < 900000;
  console.log("Cache TTL Valid?", cacheTTLValid);
  // Checks to see if events Cache exists.
  const cacheExists = localStorage.getItem('events');
  console.log("Cache Exists?", cacheExists !== null && cacheExists.length > 1);

  return cacheExists && cacheTTLValid;
}

export { ValidateCache };
