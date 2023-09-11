import Currency from './Currency';
import NumberTransplants from './NumberTransplants';

function Filter() {
  return (
    <aside className="filter">
      <div className="currency">
        <h2>Валюта</h2>
        <Currency />
      </div>
      <div className="number_transplants">
        <h2>Количество пересадок</h2>
        <NumberTransplants />
      </div>
    </aside>
  );
}

export default Filter;
