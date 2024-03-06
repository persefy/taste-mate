import { useState } from 'react'
import DataContext  from "./DataContext"
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [searchMealQuery, setSearchMealQuery] = useState('')

  return (
    <>
      <DataContext.Provider value={{searchMealQuery, setSearchMealQuery}}>
        <Header/>
        <Main/>
      </DataContext.Provider>
      <Footer/>
    </>
  )
}

export default App
