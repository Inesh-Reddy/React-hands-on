import React, { useEffect, useState } from "react";

function GetData() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const url = "https://jsonplaceholder.typicode.com/users/1";
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(true);
        console.log(error);
        return;
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h2>Loading data ...</h2>
      ) : error ? (
        <h2>Error fetching data ...</h2>
      ) : (
        <div>
          {/* do not edit the code below this line */}
          <h2>Name: {data.name}</h2>
          <h2>Email: {data.email}</h2>
          <h2>Username: {data.username}</h2>
        </div>
      )}
    </>
  );
}

export default GetData;
