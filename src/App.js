import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    colors: [
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
      "white",
    ],
    clickCount: 0,
    clickOrder: [],
  };

  boxClicked = (index) => {
    const { colors, clickCount, clickOrder } = this.state;

    if (colors[index] === "white") {
      colors[index] = "green";
      clickOrder.push(index);

      this.setState({
        colors: colors,
        clickCount: clickCount + 1,
      });

      if (clickCount + 1 === 9) {
        this.changeBoxColorToOrange();
      }
    }
  };

  changeBoxColorToOrange = () => {
    const { colors, clickOrder } = this.state;

    for (let i = 0; i < clickOrder.length; i++) {
      const index = clickOrder[i];
      setTimeout(() => {
        colors[index] = "orange";
        this.setState({ colors: colors });
      }, i * 550);
    }
  };

  render() {
    const { colors } = this.state;
    return (
      <div className="matrix-app">
        <h1 className="main-heading">3x3 Matrix App</h1>
        <div className="matrix">
          {colors.map((color, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundColor: color }}
              onClick={() => this.boxClicked(index)}
            >
              <p>{index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
