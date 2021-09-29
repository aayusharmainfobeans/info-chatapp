import { Button } from "bootstrap";
import react, { useState } from "react";
import Chatbox from "./Chatbox";
import "./style.css";

const Sidebar = () => {
  const chat = [
    { name: "faizee", message: "Lorem ipsum dolor sit amet", class: "incoming message" },
    { name: "aayush", message: "Lorem ipsum dolor sit amet", class: "outgoing message" },
    { name: "faizee", message: "Lorem ipsum dolor sit amet", class: "incoming message" },
    { name: "aayush", message: "Lorem ipsum dolor sit amet", class: "outgoing message" },
    { name: "faizee", message: "Lorem ipsum dolor sit amet", class: "incoming message" },
    { name: "aayush", message: "Lorem ipsum dolor sit amet", class: "outgoing message" },
  ];
  const [data, setData] =useState([]);
//   const list = document.querySelector("");
//   console.log(list);
//   list.addEventListener("click",()=>{
//       console.log("Gkatare");
//   })
const fun = () =>{
    setData(chat);
}

  return (
    <div className="container">
      <div className="row">
    <div className="col-3">
      <div class="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
        <a
          href="/"
          class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
        >
          <span class="fs-5 fw-semibold">Rocket Chat</span>
        </a>
        <ul class="list-unstyled ps-0">
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#home-collapse"
              aria-expanded="true"
            >
              Incoming Chat
            </button>
            <div class="collapse show" id="home-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a  onClick={fun} className="link-dark rounded">
                      faize
                  </a>
                </li>
                <li>
                  <a onClick={fun} className="link-dark rounded">
                    Aayush
                  </a>
                </li>
                <li>
                <a onClick={fun} className="link-dark rounded">
                  Geetanjali</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard-collapse"
              aria-expanded="false"
            >
              Previous chat
            </button>
            <div class="collapse" id="dashboard-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    First
                  </a>
                </li>
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    Second
                  </a>
                </li>
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    Third
                  </a>
                </li>
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    Fourth
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="mb-1">
            <button
              class="btn btn-toggle align-items-center rounded collapsed"
              data-bs-toggle="collapse"
              data-bs-target="#orders-collapse"
              aria-expanded="false"
            >
              Current chat
            </button>
            <div class="collapse" id="orders-collapse">
              <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    Thor
                  </a>
                </li>
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    Jony
                  </a>
                </li>
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    Captain
                  </a>
                </li>
                <li>
                  <a onClick={fun} class="link-dark rounded">
                    Rahul
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="border-top my-3"></li>
        </ul>
      </div>
      
    </div>
    {
        data.length>0 && (<div className="col chat">
        <Chatbox data={data} />
          </div>)
    }
    </div>
    </div>
  );
};
export default Sidebar;