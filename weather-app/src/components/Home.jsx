import { Button } from "@mui/material";
import Day from "./Day";
import styles from "./Home.module.css";
import Welcome from "./Welcome";
import useCurrentWeather from "../hooks/useCurrentWeather";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function Home({ getPosition, status }) {
  // const [data, setData] = useState(null);

  // const { trigger, data, isMutating, error } = useSWRMutation(API_URL, fetcher);

  // async function getCurrentWeather() {
  //   const position = await getPosition();
  //   const { latitude: lat, longitude: lon } = position;
  //   await trigger({ path: "weather", lat, lon, apiKey: API_KEY });
  // }

  const { data, isMutating, getCurrentWeather } =
    useCurrentWeather(getPosition);
  return (
    <section className={styles.section}>
      {data && (
        <Day
          temperature={{ max: data.main.temp_max, min: data.main.temp_min }}
          iconCode={data.weather[0].icon}
        />
      )}
      {!data && <Welcome>Welcome To Weather App</Welcome>}
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {status}
      </Button>
    </section>
  );
}
export default Home;
