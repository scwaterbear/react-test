import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
  constructor(props) { // need a constructor to init 9 different Squares to hold their own state. If stateless, no need constructor?
    super(props); // all react components that have a constructor should start with a super(props) call
    this.state = { // is this some kind of hashmap?
      value: null,  // values can be viewed in browser using React DevTools>Components
    };
  }

  render() {
    return (
      <button className="square"
      onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
