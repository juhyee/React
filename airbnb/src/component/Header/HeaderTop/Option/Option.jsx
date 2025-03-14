import React, {useState} from 'react';
import './Option.css'

const Option = () => {
    const [option, setOption] = useState('숙소');
    
    return (
      <>
        <div className='option'>
            <button className={`option__button ${option === '숙소' ? 'on' : ''}`} onClick={() => setOption('숙소')}>숙소</button>
            <button className={`option__button ${option === '체험' ? 'on' : '' }`} onClick={() => setOption('체험')}>체험</button>
        </div>
      </>
    );
};

export default Option;