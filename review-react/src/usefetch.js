import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
 

      try {
        console.log("useEffect is ran");
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Could not fetch the data for that resource");
        }

        const data = await response.json();
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {

          console.log(err.message);
          setIsPending(false);
          setError(err.message);
              }
    };

    fetchData();

  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
