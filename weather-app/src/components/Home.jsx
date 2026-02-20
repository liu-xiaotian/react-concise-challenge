import { Button } from "@mui/material";
import Welcome from "./Welcome";
import useCurrentWeather from "../hooks/useCurrentWeather";
import CurrentWeather from "./CurrentWeather";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

function Home({ getPosition, status, setIsHome }) {
  // const [data, setData] = useState(null);

  // const { trigger, data, isMutating, error } = useSWRMutation(API_URL, fetcher);

  // async function getCurrentWeather() {
  //   const position = await getPosition();
  //   const { latitude: lat, longitude: lon } = position;
  //   await trigger({ path: "weather", lat, lon, apiKey: API_KEY });
  // }

  const { data, isMutating, getCurrentWeather } =
    useCurrentWeather(getPosition);

  if (data) {
    return <CurrentWeather data={data} status={status} setIsHome={setIsHome} />;
  }

  return (
    <>
      <Welcome>{isMutating ? "Loading..." : "Welcome To Weather App"}</Welcome>
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {status}
      </Button>
    </>
  );
}
export default Home;
