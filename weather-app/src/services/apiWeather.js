const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
export async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      `${API_URL}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
