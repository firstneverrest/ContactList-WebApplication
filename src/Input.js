import React, { useState } from 'react';

function Input({ addContact }){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    function onChangeName(event){
        setName(event.target.value);
    }

    function onChangePhone(event){
        setPhone(event.target.value);
    }



    function onClick(){
        if(name && phone){
            var rand = Math.floor(Math.random() * 101); 
            addContact(name, phone, `https://source.unsplash.com/random?sig=${rand}`);
            setName('');
            setPhone('');
        }
    }

    return (
        <div className="input">
            <h3>Add Contact</h3>
            <input id="name"type="text" value={name} onChange={onChangeName} placeholder="Name" required/>
            <input id="phone"type="text" value={phone} onChange={onChangePhone} placeholder="Phone Number" required/>
            <button onClick={onClick} >Submit</button>
        </div>
    )
}

export default Input;
