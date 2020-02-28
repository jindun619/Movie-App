import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I'm in love with {name}</h2>
      <h4>{rating}/10</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://www.platingsandpairings.com/wp-content/uploads/2014/12/Kimchi-5.jpg",
    rating: 6
  },
  {
    id: 2,
    name: "gogi",
    image:
      "https://mp-seoul-image-production-s3.mangoplate.com/835122_1516008236044549.jpg",
    rating: 9
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
