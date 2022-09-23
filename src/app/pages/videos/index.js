import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./style.css";

function Videos() {
  return (
    <div className="container-videos">
      {/* // colocar um CTA (botao) para retornar a pagina "/"
        // o Link se comporta como o <a> </a>mass, ele nao recarrega a pagina */}
      <Link to="/">Voltar</Link>

      <div className="body">
        <h1>titulo do video</h1>
        <ReactPlayer
          className="player"
          // agora apareceu o player, mas o video nao roda
          controls="true"
          url="https://www.youtube.com/watch?v=7sDY4m8KNLc&t=75s"
        />
      </div>
    </div>
  );
}

export { Videos };

//Instalou o ReactPlayer?
