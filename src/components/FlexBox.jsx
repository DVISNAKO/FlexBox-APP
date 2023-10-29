import React from 'react';
import { useState } from 'react';

const FlexBox = () => {
    const [flexy, setFlexy] = useState('');
    const [just, setJust] = useState('');
    const [aligy, setAligy] = useState('');
  
    const flex = 'flex';
    const flexNot = 'flexNot-none';
  
    const justStart = 'justStart';
    const justCenter = 'justCenter';
    const justEnd = 'justEnd';
  
    const aligStart = 'aligStart';
    const aligCenter = 'aligCenter';
    const aligEnd = 'aligEnd';
  
  
    return (
      <>
        Flex Box
        <div className={`${flexy} ${just} ${aligy} output`}>
          <div className='block'>1</div>
          <div className='block'>2</div>
          <div className='block'>3</div>
        </div>
      <div className='btn'>
        <div className='display'>
        <button onClick={() => setFlexy(flex)}>display: flex</button>
        <button onClick={() => setFlexy(flexNot)}>display: none</button>
        </div>
       
        <div className='just'>
        <button onClick={() => setJust(justStart)}>justify-content: flex-start</button>
        <button onClick={() => setJust(justCenter)}>justify-content: center</button>
        <button onClick={() => setJust(justEnd)}>justify-content: flex-end</button>
        </div>
  
        <div className='align'>
        <button onClick={() => setAligy(aligStart)}>align-items: flex-start</button>
        <button onClick={() => setAligy(aligCenter)}>align-items: center</button>
        <button onClick={() => setAligy(aligEnd)}>align-items: flex-end</button>
        </div>
      </div>
      </>
    );
  }

export default FlexBox;