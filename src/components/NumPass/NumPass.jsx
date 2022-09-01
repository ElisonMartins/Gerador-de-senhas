import { Box, Link, Typography, FormGroup, FormControlLabel, Checkbox, TextField,  Slider} from '@material-ui/core'
import './NumPass.css'

function Num_Pass() {

  return (
    <Box className="NumPass">
        <Typography variant='h6'>Número de caracteres da senha</Typography>
        <Box className='Num'>
            <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
                shrink: true,
            }} 
            />
            <Slider defaultValue={14} min={1} max={50}aria-label="Default" valueLabelDisplay="auto" />
        </Box>
    </Box>
  )
}

export default Num_Pass