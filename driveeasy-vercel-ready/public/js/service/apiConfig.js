/**
 * API Configuration
 * Defines base URL for JSON Server / Express Backend
 */
const API_BASE_URL = typeof window !== 'undefined' && window.location.origin
  ? window.location.origin
  : 'http://localhost:3000';

// Global API endpoints map
const API_ENDPOINTS = {
  VEHICLES: `${API_BASE_URL}/vehicles`,
  BOOKINGS: `${API_BASE_URL}/bookings`,
  USERS: `${API_BASE_URL}/users`,
  LOGIN: `${API_BASE_URL}/login`
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { API_BASE_URL, API_ENDPOINTS };
}
if (typeof window !== 'undefined') {
  window.API_BASE_URL = API_BASE_URL;
  window.API_ENDPOINTS = API_ENDPOINTS;
}
