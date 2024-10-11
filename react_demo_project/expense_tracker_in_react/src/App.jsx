import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Expensecard from './components/Expensecard'
import Newtrangasan from './components/Newtrangasan'
import Tranjasanhhistoy from './components/Tranjasanhhistoy'
import { countercontext } from './context/context'
import { Container, Grid, Paper, Typography } from '@mui/material';


function App() {
  const [useramount, setuseramount] = useState(0)

  return (
    <>
     <countercontext.Provider value={{ useramount, setuseramount }}>
     <Container className="min-h-screen bg-gray-100 p-4">
      <Typography variant="h4" className="font-bold text-center text-gray-800 mb-16">
        Expense Tracker
      </Typography>

      <Grid container spacing={2}>
        {/* First Component */}
        <Grid item xs={12} md={8}>
          <Paper className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <Expensecard />
            <Newtrangasan />
          </Paper>
        </Grid>

        {/* Second Component */}
        <Grid item xs={12} md={4}>
          <Paper className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <Tranjasanhhistoy />
          </Paper>
        </Grid>
      </Grid>
    </Container>

</countercontext.Provider>
</>
  )
}

export default App
