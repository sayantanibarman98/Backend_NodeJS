import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  const [responsedata, setResponsedata] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handelSumbit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:4040/get/name",
      {
        name: data,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setResponsedata(res.data.data);
  };
  return (
    <div className="App">
      <h1>Hello Sayantani Please provide a name</h1>
      <form onSubmit={handelSumbit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter the name"
        />
        <button type="submit">Submit</button>
      </form>
      <p>name is :</p> {responsedata}
    </div>
  );
}

export default App;
