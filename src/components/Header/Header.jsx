import { Box, Link, Typography } from '@material-ui/core'
import './Header.css'

function Header() {

  return (
    <Box component='header' className="Header">
      <Box className='left'>
        <p>LastPass</p>
      </Box>

      <Box >
        <Box component='ul' className='right'>
          <Box component='li'><Link href="#" underline="hover">Inicio</Link></Box>
          <Box component='li'><Link href="#" underline="hover">Inicio</Link></Box>
          <Box component='li'><Link href="#" underline="hover">Inicio</Link></Box>
        </Box>
      </Box>


    </Box>
  )
}

export default Header