import { useEffect, useState } from 'react'
import './App.css'
import swAPIFetch from './services/sw-api'

function App() {

  let [swInfo, setSwInfo] = useState(null)
  useEffect(()=> {
    swAPIFetch(setSwInfo)
  },[])


  return (
      <div className = 'space'>
        {/*  */}
        {swInfo && (<>
          {console.log(swInfo.results)}
          {swInfo.results.map((item)=>(
            <div className = 'spaceShip'>
            {item.name}
            </div>
          )
          )}
        </>)}
        
      </div>

  )
}

export default App
