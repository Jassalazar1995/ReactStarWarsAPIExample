import { useState } from "react"

export default async function swAPIFetch(setState){


    let url ='https://swapi.dev/api/starships/'

        try{
            let response = await fetch(url)
            let data = await response.json()
            
            setState(data)
  
            console.log(data)
        } catch(error){
          console.log(error)
        }
  

}