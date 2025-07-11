import { API_CONFIG } from "./config.js";

class WeatherAPI {
  createUrl(endpoint, params) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });
    return `${endpoint}?${searchParams.toString()}`;
  }

  async fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }
    return response.json();
  }

  async getCurrentWeather({ lat, lon }) {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat,
      lon,
      units: "metric",
    });
    return this.fetchData(url);
  }

  async getForecast({ lat, lon }) {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat,
      lon,
      units: "metric",
    });
    return this.fetchData(url);
  }

  async reverseGeocode({ lat, lon }) {
    const url = this.createUrl(`${API_CONFIG.GEO}/reverse`, {
      lat,
      lon,
      limit: 1,
    });
    return this.fetchData(url);
  }

  async searchLocations(query) {
    const url = this.createUrl(`${API_CONFIG.GEO}/direct`, {
      q: query,
      limit: 5,
    });
    return this.fetchData(url);
  }
}

export const weatherAPI = new WeatherAPI();
