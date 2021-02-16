import "./App.css";
import { useEffect, useState } from "react";
import { List } from "./components/List";

function App() {
  //TODO Fetch eleje
  const [state, setState] = useState(undefined);

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "563492ad6f917000010000013bf8371728434c5eb66ba1c29adc8949",
    };
    // GET request using fetch inside useEffect React hook
    fetch("https://api.pexels.com/v1/search?query=Boston&per_page=1", { headers })
      .then((response) => response.json())
      .then((data) => setState(data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  if (state) {
    console.log(state.photos[0].src.landscape);
  }
  //TODO Fetch vége

  return (
    <div className="App">
      {state && <img src={state.photos[0].src.landscape} alt="" />} {/* Fetch */}
      <List />
    </div>
  );
}

export default App;
