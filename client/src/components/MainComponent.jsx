import axios from "axios";
import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";
import Ddev from "../assets/Ddev Logo.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function MainComponent() {
  const [message, setMessage] = useState("Loading...");
  const [input, setInput] = useState("Loading...");
  const [prompt, setPrompt] = useState("");
  const [promptArray, setPromptArray] = useState([]);
  const [tempPrompt, setTempPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  };
  useEffect(() => {
    axios.get("/").then((res) => {
      setMessage(res.data.message);
      setInput(res.data.input);
    });
  }, []);
  const sendPrompt = (e) => {
    e.preventDefault();
    let promptObject = {
      date: new Date(),
      prompt: prompt,
      from: "You",
    };
    setPromptArray((prevArray) => [...prevArray, promptObject]); // Append the new prompt to the existing array
    setTempPrompt(prompt);
    setPrompt("");
    sendRequest();
  };

  function sendRequest() {
    setLoading(true);
    axios.post("/", { prompt }, { headers }).then((res) => {
      let promptObject = {
        date: new Date(),
        prompt: res.data.message,
        from: "Ai",
      };
      setPromptArray((prevArray) => [...prevArray, promptObject]); // Append the new prompt to the existing array
      setLoading(false);
    });
  }
  return (
    <div className="main-container container">
      <div className="message-container">
        <div className="rounded-circle p-2 shadow" style={{border:"0.1rem solid black"}}>
          <img src={Ddev} style={{ maxWidth: "5rem",maxHeight:'5rem',minHeight:'5rem',minWidth:'5rem' }} />
        </div>
        <div>
            <br />
          <h3>{message}</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-11">
          <div>
            {promptArray.map((prompt, i) => {
              return (
                <MessageCard
                  key={i * Math.random()}
                  message={prompt.prompt}
                  from={prompt.from}
                  date={prompt.date}
                />
              );
            })}
          </div>
        </div>
        {loading && <Skeleton count={5} />}
      </div>
      <div className="input-container py-3">
        <form onSubmit={sendPrompt}>
          <div className="row">
            <div className="col col-11">
              <input
                type="text"
                className="form-control"
                placeholder={"The AI awaits your command sire"}
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                value={prompt}
              />
            </div>
            <div className="col col-1">
              <button type="submit" className="btn btn-outline-dark">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
