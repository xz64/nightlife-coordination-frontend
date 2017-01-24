import httpClient from './httpClient';

export default {
  getLocations(query) {
    return httpClient.get(`places?loc=${encodeURIComponent(query)}`);
  },
  register(id) {
    return httpClient.post('register', { id });
  },
  unregister(id) {
    return httpClient.post('unregister', { id });
  },
};
