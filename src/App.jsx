import React from 'react'
import Navebar from './Navebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'
import Lastpage from './Lastpage'
import Firstpage from './Firstpage'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path='/' element={<Firstpage />}></Route>
          <Route path='/secondpage' element={<Secondpage />}></Route>
          <Route path='/thirdpage' element={<Thirdpage />}></Route>
          <Route path='/lastpage' element={<Lastpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App