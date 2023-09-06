import { useEffect, useState } from "react";

interface FetchThenEasyInterface {
  id: number;
  title: string;
  body: string;
}

function FetchThenEasy() {
  const [data, setData] = useState<FetchThenEasyInterface[]>([]);

  //The requestOptions object is typed as RequestInit, which is the type for the options parameter of the fetch function:

  useEffect(() => {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("Error:", error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchThenEasy;
