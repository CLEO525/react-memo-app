import { useEffect, useState } from "react";

export default function useFetch({ url }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [data, setdata] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [url]);

  return [loading, error, data];
}

// const [loading, error, data] = useFetch({ url: "/data/data.json" });
