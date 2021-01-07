import React, { useState } from 'react';
import data from './data';
import List from './List';
import Input from './Input';

function App() {
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(4);
  const [style, setStyle] = useState('none');
  
  function addContact(name, phone, image){
    var result = [{'id': count, 'name': name,'phone': phone,'image': image}];
    people.push(result[0])
    setCount(count+1);
  }

  function deleteContact(id) {
    const updatedContact = people.filter((person) => person.id !== id);
    setPeople(updatedContact);
  }
  
  function changeStyleFlex(){
    setStyle('flex');
  }

  function changeStyleNone(){
    setStyle('none');
  }
  
  return (
    <section className="container">
      <h2>Contact List ({people.length})</h2>
      <hr/>
      <List people={people} deleteContact={deleteContact}/>
      <hr/>
      <button id="addContact" onClick={() => changeStyleFlex()}>add</button>
      <button onClick={() => setPeople([])}>clear all</button>
      <div className="modal" style={{display: style}}>
        <div className="modal-content">
          <div className="close" onClick={() => changeStyleNone()}>x</div>
          <Input addContact={addContact} changeStyleNone={changeStyleNone}/>
        </div>
      </div> 
    </section>
  );
}

export default App;
