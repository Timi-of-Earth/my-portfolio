import React from "react";
import { Button } from "react-bootstrap";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div class="jumbotron jumbotron-fluid bg-dark">
      <div class="jumbotron-background">
        <img src="https://placeimg.com/2000/1000/nature" class="blur "></img>
      </div>

      <div className="container text-white">
        <h1 className="display-4">Hey There!</h1>
        <p className="lead">
          I see I've caught youre attention. You probably want to know more
          about me and my work. Well, come on down, feel free to look around and
          explore...
        </p>
        <hr class="my-4"></hr>
        <p>Timilehin, Software Engineer</p>
        {/* <Button className="btn btn-primary btn-lg" href="#">
          ome text
        </Button> */}
      </div>
    </div>
  );
};

export default HeroSection;
