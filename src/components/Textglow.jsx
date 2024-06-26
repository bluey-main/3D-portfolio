import React from 'react';
import { styles } from '../styles';

const TextGlow = ({extraStyles, text, color = 'blue', shade = '500' }) => {
  return (
    <span className={`
      text-[#22D3EE]
      ${extraStyles}
      font-bold
      text-2xl
  
      filter
   
    `}>
      {text}
    </span>
  );
};

export default TextGlow;