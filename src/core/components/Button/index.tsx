import React from 'react';
import './styles.scss';

type Props = {
    text:string
}

const ButtonGen = ({ text}: Props) => (
        <button className="btn-custom" type="submit">
         {text}
        </button>
        
);

export default ButtonGen