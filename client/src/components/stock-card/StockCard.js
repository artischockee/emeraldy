import './StockCard.sass';
import React from 'react';
import classNames from 'classnames';
import { padStart } from 'lodash';
import Button from '../generic/Button';

const StockCard = ({
  imageSrc, dateFrom, dateTo, name, prerendered, number
}) => (
  <div
    className={classNames(
      "card",
      { "card_prerendered": prerendered }
    )}
    draggable={!prerendered}
    onDragOver={prerendered ? null : () => console.log('dragover')}
  >
    <div
      className="card__image"
      style={{backgroundImage: `url(${imageSrc})`}}
    />
    {!prerendered &&
      <span className="card__number">
        {padStart(number, 2, 0)}
      </span>
    }
    <div className="card__data">
      <h2 className={classNames(
        "heading card__heading",
        { "card__heading_prerendered": prerendered }
      )}>
        {!prerendered && name}
      </h2>
      <span className={classNames(
        "card__date",
        { "card__date_prerendered": prerendered }
      )}>
        {!prerendered && `${dateFrom} - ${dateTo}`}
      </span>
      <div className="card__controls">
        <Button
          className={classNames(
            "text-button",
            { "text-button_prerendered": prerendered }
          )}
          content="Edit"
          disabled={prerendered}
        />
        <Button
          className={classNames(
            "text-button text-button_danger",
            { "text-button_prerendered": prerendered }
          )}
          content="Delete"
          disabled={prerendered}
        />
      </div>
    </div>
  </div>
);

export default StockCard;
