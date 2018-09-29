//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ClickCard from "./components/ClickCard";
import peeps from "./peeps.json";
import "./App.css";


class App extends Component {
  state = {
    peeps,
    clickedPeeps: [],
    score: 0
  };

  imageClick = event => {
    const currentPeeps = event.target.alt;
    const PeepsAlreadyClicked =
      this.state.clickedPeeps.indexOf(currentPeeps) > -1;
    
    if (PeepsAlreadyClicked) {
      this.setState({
        peeps: this.state.peeps.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPeeps: [],
        score: 0
      });
      alert("You Blew It");

    } else {
      this.setState(
        {
          peeps: this.state.peeps.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPeeps: this.state.clickedPeeps.concat(
            currentPeeps
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Great Job!");
            this.setState({
              peeps: this.state.peeps.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPeeps: [],
              score: 0
            });
          }
        }
      );
    }
  }


  render() {
    return (
      <div>
        <Navbar
        score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.peeps.map(peeps => (
            <div className="bg">
            <ClickCard
              imageClick={this.imageClick}
              id={peeps.id}
              key={peeps.id}
              image={peeps.image}
            />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
export default App;
