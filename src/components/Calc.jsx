import React, { useState } from 'react';
import './styles/Calc.css';

const Calc = () => {

    const [width, setWidth] = useState('');
    const [height, setHeigth] = useState('');

    const changeW1 = 'change1';
    const changeW2 = 'change2';
    const changeW3 = 'change3';
    const changeW4 = 'change4';

    const changeH1 = 'changeH1';
    const changeH2 = 'changeH2';
    const changeH3 = 'changeH3';
    const changeH4 = 'changeH4';

    return (
        <>
        <div className='output'>
            <div className={`${width} ${height} box`}>Block</div>
        </div>
        <div className='btn btnPanel'>
           
            <div className='btnBlock'> 
            Change width: <br/>

            <button onClick={() => setWidth(changeW2)}>width: calc(50%);</button>
            <button onClick={() => setWidth(changeW1)}>width: calc(100% - 270px);</button>
            <button onClick={() => setWidth(changeW3)}>width: calc(50% + 170px);</button>
            <button onClick={() => setWidth(changeW4)}>width: calc(100%);</button>
            </div>
            <div className='btnBlock'>
            Change height: <br/>
            <button onClick={() => setHeigth(changeH1)}>height: calc(50%);</button>
            <button onClick={() => setHeigth(changeH2)}>height: calc(100% - 270px);</button>
            <button onClick={() => setHeigth(changeH3)}>  height: calc(50% + 170px);</button>
            <button onClick={() => setHeigth(changeH4)}>  height: calc(100%);</button>
            </div>
        </div>
        </>
    );
};

export default Calc;