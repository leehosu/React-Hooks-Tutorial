import React, { useState, useEffect } from 'react';

const Info = () => {
  const [name,setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    console.log('effect');
    return() => {
      console.log('clean up!');
    }
  });

  const onChangeName = e => {
    setName(e.target.value);
  }

  const onChangeNickname = e => {
    setAge(e.target.value);
  }
  return(
    <div className = "info">
      <div className = "info-header">
        <input value = {name} onChange = {onChangeName} />
        <input value={age} onChange={onChangeNickname} />
      </div>
      <div className = "info-body-name">
        <b> 이름 : </b> {name}
      </div>
      <div className="info-body-nickname">
        <b> 나이 : </b> {age}
      </div>
    </div>
  )
};

export default Info;