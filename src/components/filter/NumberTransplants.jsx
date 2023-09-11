import { useContext } from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { FilterContext } from '../../App';

const NumberTransplants = () => {
  const { checked, setChecked } = useContext(FilterContext);

  const handleChange1 = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1], checked[2], checked[3]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked, checked[2], checked[3]]);
  };

  const handleChange4 = (event) => {
    setChecked([checked[0], checked[1], event.target.checked, checked[3]]);
  };

  const handleChange5 = (event) => {
    setChecked([checked[0], checked[1], checked[2], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Без пересадок"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="1 пересадка"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="2 пересадки"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
      <FormControlLabel
        label="3 пересадки"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
      />
    </Box>
  );

  return (
    <div>
      <FormControlLabel
        label="Все"
        control={
          <Checkbox
            checked={checked[0] && checked[1] && checked[2] && checked[3]}
            indeterminate={
              checked[0] !== checked[1] ||
              checked[0] !== checked[2] ||
              checked[0] !== checked[3] ||
              checked[1] !== checked[2] ||
              checked[1] !== checked[3] ||
              checked[2] !== checked[3]
            }
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
  );
};
export default NumberTransplants;
