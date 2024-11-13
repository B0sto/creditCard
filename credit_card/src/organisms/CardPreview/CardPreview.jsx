import React from "react";
import CardFront from '../../moleculs/CardFront/CardFront'
import CardBack from '../../moleculs/CardBack/CardBack'
import '../../App.css'

const CardPreview = () => (
  <div className="card-preview">
    <CardFront />
    <CardBack />
  </div>
);

export default CardPreview;
