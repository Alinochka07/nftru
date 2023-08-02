import React from 'react';

export const Pagination = () => {
    return (
        <div className='d-flex justify-content-between align-items-center mb-5' style={{width: '258px', height: '40px'}}>
            <div className='fw-bold ms-2'>«</div>
            <div className='fw-bold border border-warning bg-warning rounded-circle d-flex justify-content-center align-items-center' style={{width: '40px', height: '40px'}}>1</div>
            <div className='fw-bold mx-2'>2</div>
            <div className='fw-bold mx-2'>3</div>
            <div className='fw-bold mx-2'>4</div>
            <div className='fw-bold mx-2'>5</div>
            <div className='fw-bold me-2'>»</div>
        </div>
    );
};
