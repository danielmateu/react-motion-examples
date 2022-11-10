

import { motion } from 'framer-motion'
import './App.css'

function App() {

  return (
    <div>
      <motion.h1
      initial={{color: '#000000'}}
      transition= {{duration:3}}
      animate= {{
        y:50,
        color: '#fff000',
        }}>Hello World!</motion.h1>
    </div>
  )
}

export default App
