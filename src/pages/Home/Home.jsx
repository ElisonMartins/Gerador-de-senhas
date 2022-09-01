import Header from '../../components/Header/Header.jsx'
import Pass from '../../components/Titles/Pass.jsx'
import ConfigPass from '../../components/ConfigPass/ConfigPass.jsx'
import { Box, Link, Typography } from '@material-ui/core'
import './Home.css'

function Home() {

  return (
    <div className="Home">
        <Header />
        <Typography variant='h3'>Gerador de senhas</Typography>
        <Typography variant='h6'>Gere suas senhas gratuitamente</Typography>
        <Box className='container'>
            <Pass className='c2'/>
            <ConfigPass />
        </Box>
        
        
    </div>
  )
}

export default Home