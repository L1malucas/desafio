import React, { useState } from "react";
import "./style.css";

function Home() {
  const [file, setFile] = useState(null);
  console.log(`file${file}`);

  return (
    < div id="container-home">
      <aside>
        {/* <img src="https://www.erural.net/assets/logos/erural_color-29185a2792a68a60c53900c8e4b9d1cf8486c1cb2d6bfbde78ee28a037e5ebb.svg" /> */}
        <h1>Salas</h1>
        <ul>
          <li>Aula </li>
          <li>Aula </li>
          <li>Aula </li>
        </ul>
      </aside>
      <div className="body">
        <div>
          <div className="preview">{file?.name}</div>
          <input
            type="file"
            id="file"
            name="file"
            accept="video/mp4,video/x-m4v,video/*"
            onChange={(e) => setFile(e.target.files[0])}
          />

          <label htmlFor="file">enviar</label>
        </div>
      </div>
    </div>
  );
}
export { Home };
