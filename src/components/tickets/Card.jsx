import PropTypes from 'prop-types';
import { useContext } from 'react';
import { FilterContext } from '../../App';

function Card({ data }) {
  const { alignment } = useContext(FilterContext);
  const currencyRates = {
    rub: 1,
    usd: 0.01,
    euro: 0.0097,
  };
  function formatDate(inputDate) {
    const date = new Date(inputDate);

    const months = [
      'янв',
      'фев',
      'мар',
      'апр',
      'мая',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек',
    ];
    const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayOfWeek = date.getDay();

    const formattedDate = `${day} ${months[month]} ${year}, ${daysOfWeek[dayOfWeek]}`;

    return formattedDate;
  }

  function convertPrice(price) {
    if (alignment) {
      const convertedPrice = price * currencyRates[alignment];
      return convertedPrice.toFixed(0);
    } else {
      return price;
    }
  }
  return (
    <div className="tickets-card">
      <div className="button">
        <img
          src="https://aeronautica.online/wp-content/uploads/2017/05/Turkish-Airlines-Logo.jpg"
          alt="img"
        />
        <button onClick={() => alert('Спасибо за покупку!')}>
          Купить за {convertPrice(data.price)}
          {alignment === 'euro' ? '€' : alignment === 'usd' ? '$' : '₽'}
        </button>
      </div>
      <div className="title">
        <div className="from">
          <h2>{data.departure_time}</h2>
          <p>
            {data.origin}, {data.origin_name}
          </p>
          <span>{formatDate(data.departure_date)}</span>
        </div>
        <span>
          {data.stops > 1
            ? `${data.stops} пересадки`
            : data.stops === 0
            ? 'Без пересадки'
            : `${data.stops} пересадка`}
        </span>
        <div className="to">
          <h2>{data.arrival_time}</h2>
          <p>
            {data.destination_name}, {data.destination}
          </p>
          <span>{formatDate(data.arrival_date)}</span>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    departure_time: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    origin_name: PropTypes.string.isRequired,
    departure_date: PropTypes.string.isRequired,
    stops: PropTypes.number.isRequired,
    arrival_time: PropTypes.string.isRequired,
    destination_name: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    arrival_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
