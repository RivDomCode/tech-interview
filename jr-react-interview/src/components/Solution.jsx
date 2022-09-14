import React, { useEffect, useState } from "react";

const Solution = () => {

  const [fact, setFact] = useState("");
  const [gif, setGif] = useState("");

  const catFactApicall = async () => {
    const url = "https://catfact.ninja/fact";
    const resp = await fetch(url);
    const data = await resp.json();
    setFact(data.fact);
    const threeFirstWords = data.fact.split( " ", 3).join( " " );
    getGif(threeFirstWords);
  };


    const getGif = async(string) =>{
      const gifUrl = `https://api.giphy.com/v1/gifs/search?q=${ string }&limit=1&api_key=2UEqkCGMfmsYTANAO1h3tmpZw0QoW3m0`;
      await fetch(gifUrl)
        .then((resp) => resp.json())
        .then((data) => setGif(data.data[0].images.downsized_medium.url))
    }


  useEffect(() => {
    catFactApicall();
  }, []);

  const reload = () => { location.reload()};

  return (
    <div className="solution">
      <img src={gif} alt="cat-gif" />
      <p> {fact}</p>
      <button onClick={reload}>Reload</button>
    </div>
  );
};

export default Solution;
