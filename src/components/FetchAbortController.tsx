import { useEffect, useState } from "react";

interface FetchAbortControllerInterface {
  id: number;
  title: string;
  body: string;
}

const FetchAbortController = () => {
  const [data, setData] = useState<FetchAbortControllerInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            signal: abortController.signal,
          }
        );
        const jsonData: FetchAbortControllerInterface[] = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error: unknown) {
        if (error instanceof DOMException && error.name === "AbortError") {
          console.log("Request aborted");
        } else {
          console.log("Error fetching data:", error);
        }
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchAbortController;
