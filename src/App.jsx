import React from 'react'
import Clients from './components/Clients'
import Landingpage from './components/Landingpage'
import Navbar from './components/Navbar'
import styles from './style'

const App = () => (
  <div className='w-full overflow-hidden'>
    <Landingpage />
    <Clients />
  </div>
)

export default App
