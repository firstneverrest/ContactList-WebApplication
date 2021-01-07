import React from 'react';

const List = ({people, deleteContact}) => {
  return (
    <>
      {people.map((person) => {
        const {id,name,phone,image} = person;
        return (
          <article key={id} className='person'>
            <div className="delete" onClick={() => deleteContact(id)}>X</div>
            <img src={image} alt={name}/>
            <div className="data">
              <h4>{name}</h4>
              <p>{phone}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;