import * as React from 'react';

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@material-ui/core'

export default function RadioButtonsGroup() {
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Facil_pronunciar" control={<Radio />} label="Fácil  de Pronunciar" />
        <FormControlLabel value="Facil_ler" control={<Radio />} label="Fácil de ler" />
        <FormControlLabel value="Todos_carac" control={<Radio />} label="Todos os caracteres" />
      </RadioGroup>
    </FormControl>
  );
};