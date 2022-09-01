import { Box, Link, Typography, FormGroup, FormControlLabel, Checkbox  } from '@material-ui/core'
import './ConfigPass.css'

function Config() {

  return (
    <Box component='header' className="Config">
        <Typography variant='h4' className='personalize'>Personalize sua senha</Typography>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Letra Maiuscula" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Letra minuscula" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Numeros" />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Simbolos" />
        </FormGroup>

    </Box>
  )
}

export default Config