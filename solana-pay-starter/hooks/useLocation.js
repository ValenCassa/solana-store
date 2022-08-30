import axios from "axios";
import { useEffect, useState } from "react";

const getLocation = async ({ lat, lng }) => {
  const response = await axios.get(
    `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&addressdetails=1&format=json`
  );
  const data = response.data.address;

  return {
    country: data.country,
    place: data.city ? data.city : data.town ? data.town : data.village,
    country_code: data.country_code.toUpperCase(),
  };
};

export const useLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const { latitude, longitude } = pos.coords;
        getLocation({ lat: latitude, lng: longitude }).then((data) => {
          setLocation(data);
        });
      });
    }
  }, []);

  return location;
};
