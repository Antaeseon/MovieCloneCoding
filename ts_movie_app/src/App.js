import React from 'react';
import PropTypes from 'prop-types'


function Food({name, picture, rating}){
  return(
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src = {picture} alt = {name} />
    </div>
  )
}


const foodIlike = [
  {
    id: 1,
    name : 'Kimchi',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JNs3joXdaQnOz5npvjBCBwHaEK%26pid%3DApi&f=1',
    rating : 5,
  },
  {
    id : 2,
    name : 'Samgyeopsal',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Mz1Q9GnOjEBnQgBQ4c6plwHaEK%26pid%3DApi&f=1',
    rating : 4.9,
  },
  {
    id : 3,
    name : 'bibimabap',
    image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.sg3EilfZgNZTyq-vRRfzGAHaEK%26pid%3DApi&f=1',
    rating : 4.8,
  }
];


function App() {
  return(
    <div>
      {foodIlike.map(dish=>(
        <Food key= {dish.id} name={dish.name} picture={dish.image} rating = {dish.rating}/>
      ))}
    </div> 
  )
}

Food.propTypes={
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};


export default App;
