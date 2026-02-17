const API_KEY = "ac3a0a53d0ab078b82d2ab2e679253de";
export async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
    );
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}
