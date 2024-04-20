import React from "react";
import ReactMarkdown from "react-markdown";
import image from "../assets/cute-cool-boy-dabbing-pose-cartoon-icon-illustration-people-fashion-icon-concept-isolated-generat-ai-free-photo.jpg";
import Ddev from "../assets/Ddev Logo.png";
export default function MessageCard({ from, message, date }) {
  return (
    <React.Fragment>
      {from === "You" ? (
        <>
          <div className="row align-items-center">
            <div className="col" style={{ maxWidth: "1.5rem" }}>
              <img
                className="rounded-circle"
                src={image}
                alt="sa"
                style={{ maxWidth: "1.5rem" }}
              />
            </div>
            <div className="col">
              <h6 className="mb-0">&nbsp;YOU</h6>
            </div>
          </div>

          <div className="col align-items-center">
            <div className="card my-3">
              <div className="card-body">{message}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="row align-items-center">
            <div className="col" style={{ maxWidth: "1.5rem" }}>
              <img
                className="rounded-circle"
                src={Ddev}
                alt="sa"
                style={{ maxWidth: "1.5rem" }}
              />
            </div>
            <div className="col">
              <h6 className="mb-0">&nbsp;D Dev</h6>
            </div>
          </div>
          <div
            className="card my-3 bg-light p-3 rounded"
            style={{ border: "none" }}
          >
            <ReactMarkdown>{message}</ReactMarkdown>
          </div>
        </>
      )}
    </React.Fragment>
  );
}
