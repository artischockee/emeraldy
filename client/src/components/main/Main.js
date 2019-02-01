import './Main.sass';
import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="main__section-top">
          <h1 className="heading main__heading">Stock</h1>
          <div style={{ marginLeft: 'auto' }}>
            <button>+</button>
          </div>
        </section>
        <section className="main__section-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    );
  }
}

const Card = () => (
  <div className="card" draggable onDragOver={() => console.log('dragover')}>
    <div
      className="card__image"
      style={{backgroundImage: 'url(./images/background.jpg)'}}
    />
    <span className="card__number">01</span>
    <div className="card__data">
      <h2 className="heading card__heading">
        Econom' po-krupnomu
      </h2>
      <span className="card__date">
        17 feb - 24 apr
      </span>
      <div className="card__controls">
        <button className="text-button">
          Edit
        </button>
        <button className="text-button text-button_danger">
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default Main;
