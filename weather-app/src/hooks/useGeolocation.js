import { useState } from "react";

export function useGeolocation() {
  const [position, setPosition] = useState(null);
  async function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        alert("Your browser does not support geolocation");
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setPosition({ latitude, longitude });
          resolve({ latitude, longitude });
        },
        (error) => {
          // throw new Error(error.message);
          reject(error.message);
        },
      );
    });
  }
  return { getCurrentLocation };
}
