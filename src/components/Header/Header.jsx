import React from 'react';
import logo from "../../images/logo.png";
import search_icon from "../../images/icons/search.png";
import ivleeva from "../../images/Rectangle 124.png";
import zador from "../../images/Rectangle 125.png";
import makeeva from "../../images/Rectangle 126.png";

export const Header = () => {
  return (
    <div className="header d-flex align-items-center bg-image" style={{width: '708px', height: '59px'}}>
        <img alt="logo" src={logo} className="me-4"/>
        <form style={{height: '40px', width: '100%'}} className="flex justify-content-around">
          <img alt="search-icon" src={search_icon} style={{marginRight: '-30px'}}/>
          <input className="bg-transparent border border-1 border-secondary rounded-pill h-100 ps-5 me-2" style={{width: '264px'}} placeholder="Поиск..."/>
          <button className="border border-warning bg-transparent rounded-pill h-100 w-25 me-2 fw-bold">Вход</button>
          <button className="border border-warning bg-warning rounded-pill h-100 w-25 fw-bold">Регистрация</button>
          <div className="position-absolute d-flex flex-column bg-white border border-1 border-secondary rounded z-3" style={{width: '568px', height: '203px', marginTop: '-41px', marginLeft: '-12px'}}>
            <div className="d-flex align-flex-start" style={{height: '53px'}}>
              <img alt="search-icon" className="ms-3 mt-3" style={{width: '24px', height: '24px'}} src={search_icon}/>
              <p className="mt-2 ms-2 pt-2">Анастасия</p>
            </div>
            <ul className="list-group">
                <li className="list-group-item lh-lg fw-bold bg-warning-subtle">
                  <img alt="search-avatar" className="me-2" style={{width: '24px', height: '24px'}} src={ivleeva}/>
                    Анастасия Ивлеева</li>
                <li className="list-group-item lh-lg">
                  <img alt="search-avatar" className="me-2" style={{width: '24px', height: '24px'}} src={zador}/>
                    Анастасия Задорожная</li>
                <li className="list-group-item lh-lg">
                  <img alt="search-avatar" className="me-2" style={{width: '24px', height: '24px'}} src={makeeva}/>
                    Анастасия Макеева</li>
              </ul>
          </div>
        </form>
      </div>
  )
}


