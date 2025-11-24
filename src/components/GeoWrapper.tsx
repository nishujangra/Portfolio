import { useState, useEffect } from "react";

const GeoWrapper = ({ children }: { children: React.ReactNode }) => {
  const [_location, setLocation] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ip_location");

    // If already cached, use it and avoid API call
    if (saved) {
      setLocation(JSON.parse(saved));
      return;
    }

    // Fetch once
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        localStorage.setItem("ip_location", JSON.stringify(data));
      })
      .catch((err) => console.error("Location fetch error:", err));
  }, []);

  // Log AFTER location updates
  // useEffect(() => {
  //   if (location) {
  //     console.log(location.ip, location.country_name);
  //   }
  // }, [location]);

  return (
    <div>
        {children}

    </div>
  );
};

export default GeoWrapper;
