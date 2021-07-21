import { useEffect, useState } from "react";

const apiEndpointURL = "https://jsonplaceholder.typicode.com/posts/1";

const EffectWithFetchComponent = () => {
  const [data, setData] = useState("");

  useEffect(() => getData());

  async function getData() {
    const obj = await fetch(apiEndpointURL);
    const json = await obj.json();
    setData(JSON.stringify(json));
  }

  return (
    <div>
      <h1>UseEffect with fetch exemple</h1>
      <pre>{data}</pre>
    </div>
  );
};

export default EffectWithFetchComponent;
