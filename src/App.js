import React from "react";
import { Header } from "./components/Header/Header";
import { Filters } from "./components/Filters/Filters";
import bg_svechenie from "./images/svechenie.png";
import bg_svechenie_mirror from "./images/svechenie-mirror.png";
import bg_svechenie_bottom from "./images/svechenie-bottom.png";
import { CardsList } from "./components/CardsList/CardsList";
import { Pagination } from "./components/Pagination/Pagination";
import { Footer } from "./components/Footer/Footer";


function App() {
  return (
    <div className="container d-flex justify-content-center fw-wrap">
      <div className="d-flex flex-wrap justify-content-center" 
        style={{width: '54vw', 
          backgroundImage: `url('${bg_svechenie}'), url('${bg_svechenie_mirror}'), url('${bg_svechenie_bottom}')`, 
          backgroundRepeat: 'no-repeat, no-repeat, no-repeat', 
          backgroundPosition: 'top left, right, bottom'}}>
        <Header/>
        <Filters/>
        <CardsList/>
        <Pagination/>
        <Footer/>
      </div>
      
    </div>
  );
}

export default App;
