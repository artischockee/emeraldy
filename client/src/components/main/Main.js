import './Main.sass';
import React from 'react';
import { times } from 'lodash';
import { timeout } from '../../auxiliary';
import { Plus } from '../svg';
import Button from '../generic/Button';
import Spinner from '../generic/Spinner';
import StockCard from '../stock-card';


const STOCK_CARDS_API = 'api/stock-cards';

class Main extends React.Component {
  state = {
    data: null
  };

  async componentDidMount() {
    await timeout(1000);

    fetch(STOCK_CARDS_API)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  // create = () => {
  //   const data = {
  //     name: 'Fuck you asshole',
  //     dateFrom: 'Feb 14',
  //     dateTo: 'Mar 25',
  //     imageSrc: './images/background.jpg'
  //   };
  //
  //   const init = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   };
  //
  //   fetch(STOCK_CARDS_API, init)
  //     .then((d) => console.log(d))
  //     .catch(error => console.error(error));
  // };

  render() {
    return (
      <main className="main">
        <section className="main__section-top">
          <h1 className="heading main__heading">Stock</h1>
          <div style={{ marginLeft: 'auto' }}>
            <Button
              className="button button_rounded_small main__button"
              onClick={this.create}
            >
              <Plus className="main__svg" />
            </Button>
          </div>
        </section>
        <section className="main__section-grid">
          {!this.state.data &&
            <div className="main__spinner-wrapper">
              <Spinner />
            </div>
          }
          {this.state.data
            ? this.state.data.map((item, index) => (
              <StockCard key={index} number={index + 1} {...item} />
            ))
            : times(8, (index) => (
              <StockCard key={index} prerendered />
            ))
          }
        </section>
      </main>
    );
  }
}

export default Main;
