import { useContext } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { FilterContext } from '../../App';

const Currency = () => {
  const { alignment, setAlignment } = useContext(FilterContext);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform">
      <ToggleButton value="rub">RUB</ToggleButton>
      <ToggleButton value="usd">USD</ToggleButton>
      <ToggleButton value="euro">EURO</ToggleButton>
    </ToggleButtonGroup>
  );
};
export default Currency;
