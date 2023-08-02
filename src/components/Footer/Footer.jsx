import React from 'react';
import twitter from "../../images/icons/twitter.png";
import vkontakte from "../../images/icons/vk.png";
import star from "../../images/icons/Vector.png";

export const Footer = () => {
    return (
        <div className='d-flex justify-content-center flex-wrap bg-warning mt-4' style={{width: '768px', height: '310px'}}>
            <div className='d-flex justify-content-between mt-4' style={{width: '651px', height: '139px'}}>
                <div style={{width: '119px'}}>
                    <h5 className='pb-3'>NFT</h5>
                    <p>Что такое NFT</p>
                    <p>Создайте NFT с нами</p>
                    <span><img className='me-2' alt='social-media-twitter' src={twitter}/><img alt='social-media-vk' src={vkontakte}/></span>
                </div>
                <div style={{width: '158px'}}>
                    <h5 className='pb-3'>Компания</h5>
                    <p>О нас</p>
                    <p>Отправить запрос</p>
                    
                </div>
                <div style={{width: '210px'}}>
                    <h5 className='pb-3'>Другое</h5>
                    <p>Условия использования</p>
                    <p>Политика конфиденциальности</p>
                    
                </div>
            </div>
            <div className='border border-dark mt-5' style={{width: '707px', height: '0'}}>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{width: '707px'}}>
                <img style={{width: '66px', height: '61px', marginTop: '-27px'}} src={star} alt='logo-star'/></div>
            <p className='text-secondary' style={{fontFamily: 'Rubik'}}>@ tnft.ru Company, Inc</p>
        </div>
    );
};

