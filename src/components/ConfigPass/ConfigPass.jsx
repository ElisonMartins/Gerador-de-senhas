import { Box, Link, Typography, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'
import CheckBox from '../CheckBox/CheckBox.jsx'
import RadioButton from '../RadioButton/RadioButton.jsx'
import NumPass from '../NumPass/NumPass.jsx'
import './ConfigPass.css'

function Config() {

  return (
    <Box className="Config">
        <Typography variant='h4' className='personalize'>Personalize sua senha</Typography>
        <Box className='Marks'>
            <Box>
                <NumPass />
            </Box>
            <Box className='check'>
                <RadioButton />
                <CheckBox />
            </Box>
        </Box>
    </Box>
  )
}

export default Config