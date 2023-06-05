import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../styles/home.css";
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const People = () => {
  return (
   
      

function Cards(props) {
  return (
     <div className="scrollmenu">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="info">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    
        //    <div>
        //     <img src="https://picsum.photos/id/13/200/300" />
        //     <p>title="Card Title"</p>
        //     <p>
        //       "Some quick example text to build on the card title and make up
        //       the bulk of the card's content."
        //     </p>
        //   </div>

        //   <div>
        //     <img src="https://picsum.photos/id/27/200/300" />
        //     <p>title="Card Title"</p>
        //     <p>
        //       "Some quick example text to build on the card title and make up
        //       the bulk of the card's content."
        //     </p>
  )})};
