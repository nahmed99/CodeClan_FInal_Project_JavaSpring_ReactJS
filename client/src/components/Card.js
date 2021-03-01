import React from 'react';

const Card = ({ anImage, anImageAlt }) => <div className="card"> <img src={anImage} alt={anImageAlt} width="245px" height="145px"></img> </div>;

export default Card;