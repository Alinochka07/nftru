import React from 'react';
import search_icon from "../../images/icons/search.png";

export const Filters = () => {
    return (
        <div className='d-flex justify-content-between mt-5' style={{width: '708px'}}>
            <select className="form-select py-0 me-3 bg-transparent" style={{width: '155px', height: '30px'}}>
                <option selected>Фильтры</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <form className="flex justify-content-around">
                <img alt="search-icon" src={search_icon} style={{marginRight: '-30px'}}/>
                <input className="bg-transparent border border-1 border-secondary rounded-pill h-100 ps-5 me-2" style={{width: '326px', height: '40px'}} placeholder="Поиск..."/>
            </form>
            <select className="form-select py-0 me-3" style={{width: '155px', height: '30px'}}>
                <option selected>По умолчанию</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>
    );
};

