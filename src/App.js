import React from "react";
import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filters/Filters";
import bg_svechenie from "./images/svechenie.png";
import { CardsList } from "./components/CardsList/CardsList";


function App() {
  return (
    <div className="container d-flex justify-content-center fw-wrap">
      <div style={{width: '50vw', backgroundImage: `url('${bg_svechenie}')`}}>
        <Header/>
        <Filters/>
        <CardsList/>
      </div>
    </div>
  );
}

export default App;
