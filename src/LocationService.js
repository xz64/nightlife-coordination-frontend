import httpClient from './httpClient';

export default {
  getLocations(query) {
    return httpClient.get(`places?loc=${encodeURIComponent(query)}`);
  },
};
