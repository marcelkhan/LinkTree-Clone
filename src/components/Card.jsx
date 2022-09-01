import React from "react";

function Card() {
  return (
    <div className="card">
      <div className="cardBody">

        <div className="cardHeader textCenter">
          <img src="./logo192.png" className="profile"/>
          <div className="cardHeaderContent">
            <h1>Marcel Khan</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
            invidunt ut labore et dolore magna </p>
          </div>
        </div>

        <div className="cardContent">
          <a className="btnAction" href="/some-url">
            Instagram
          </a>
        </div>

        <div className="cardContent">
          <a className="btnAction" href="/some-url">
            Facebook
          </a>
        </div>

        <div className="cardContent">
          <a className="btnAction" href="/some-url">
            TikTok
          </a>
        </div>

        <div className="cardContent">
          <a className="btnAction" href="/some-url">
            YouTube
          </a>
        </div>

      </div>
    </div>
  );
}

export default Card;