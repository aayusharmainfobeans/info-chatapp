import React from "react";
import './Chatbox.css';

const Chatbox = ({data}) =>{
    console.log(data);
  return(
    <div class="chat__section">
        <div class="brand">
            <h1>Chat Box</h1>
        </div>
    <div class="message__area">
        {
            data.map((i)=> {
            return(
            <div className={i.class}>
                <h4>{i.name}</h4>
                <p>{i.message}</p>
            </div>
            )
                
            })
        }
        {/* <div className="incoming message">
            <h4>Aayush</h4>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="outgoing message">
            <h4>Faizee</h4>
            <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="incoming message">
            <h4>Geetanjali</h4>
            <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="outgoing message">
            <h4>Faizee</h4>
            <p>Lorem ipsum dolor sit amet </p>
        </div>
        <div className="incoming message">
            <h4>Geetanjali</h4>
            <p>Lorem ipsum dolor sit amet</p>
        </div> */}

    </div>
    <div>
        <textarea id="textarea" cols="30" rows="1" placeholder="Write a message..."></textarea>
    </div>
</div>
  )
}

export default Chatbox;