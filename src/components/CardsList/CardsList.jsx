import React from 'react';
import avatar from "../../images/Ivleeva_avatar.png";
import small_avatar from "../../images/Rectangle 124.png";
import check_mark from "../../images/icons/image 8.png";

const cards_info = [
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
    {image: avatar, heading: 'Без слов', sm_avatar: small_avatar, name: 'Настя Ивлеева', patronym: 'Вячеславовна', rarety: 'уникальная', price: 500},
]

export const CardsList = () => {
    return (
        <div className='d-flex flex-wrap justify-content-between mt-4' style={{width: '708px'}}>
            {cards_info.map(({image, sm_avatar, heading, name, patronym, rarety, price}) => {
            return <div style={{width: '216px', height: '436px'}} className='d-flex flex-column border border-1 border-secondary mb-4 mt-1'>
                            <div className='d-flex justify-content-center'>
                                <img alt='avatar' src={image} className='mt-2' style={{width: '199px', height: '222px'}}/>
                            </div>
                            <div className='ms-2' style={{width: '199px'}}>
                                <h5 className='fs-6 pt-2 text-start'>{heading}</h5>
                                <div className='d-flex flex-wrap mt-2' style={{width: '199px'}}>
                                    <img src={sm_avatar} style={{width: '48px', height: '48px'}} alt='small-avatar'/>
                                    <div className='ms-2'>
                                        <p className='lh-sm m-0' style={{fontSize: '14px'}}>{name} <br/> {patronym}</p>
                                        <p className='mb-0' style={{fontSize: '11px'}}>проверено<span><img className='ms-1 mb-0' alt='check-mark' src={check_mark}/></span></p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-2'>
                                    <p className='lh-sm m-0 me-3' style={{fontSize: '14px'}}>Редкость: </p>
                                    <button className='border border-warning rounded bg-transparent' style={{fontSize: '11px', width: '90px', height: '27px'}}>{rarety}</button>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-2'>
                                    <p className='lh-sm m-0 me-3' style={{fontSize: '14px'}}>Цена: </p>
                                    <button className='border border-warning rounded bg-warning' style={{fontSize: '11px', width: '76px', height: '21px'}}>от {price} ₽</button>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <button className='border border-warning rounded-4 bg-warning bg-gradient mt-2' style={{fontSize: '17px', width: '183px', height: '37px'}}>Купить</button>
                                </div>
                            </div>
                        </div>   
        })}
        </div>
    );
};

