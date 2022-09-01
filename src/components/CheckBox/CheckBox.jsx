import { Box, Link, Typography, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'
import './Checkbox.css'

function CheckBox() {

  return (
    <Box component='header' className="checkBox">
        
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Letra Maiuscula" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Letra minuscula" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Numeros" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Simbolos" />
        </FormGroup>

    </Box>
  )
}

export default CheckBox