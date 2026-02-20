import { Button } from "@mui/material";
import Day from "./Day";
import styles from "./Home.module.css";
import { getCurrentWeather as getCurrentWeatherApi } from "../services/apiWeather";
import { useState } from "react";
import Welcome from "./Welcome";

function Home({ getPosition, status }) {
  const [data, setData] = useState(null);

  async function getCurrentWeather() {
    const position = await getPosition();

    const crrentWeatherData = await getCurrentWeatherApi(
      position.latitude,
      position.longitude,
    );
    console.log(crrentWeatherData);

    setData(crrentWeatherData);
  }
  return (
    <section className={styles.section}>
      {data && (
        <Day
          temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
          iconCode={data.weather[0].icon}
        />
      )}
      {!data && <Welcome>Welcome To Weather App</Welcome>}
      <Button variant="contained" size="large" onClick={getCurrentWeather}>
        {status}
      </Button>
    </section>
  );
}
export default Home;
