import React from "react"
import Header from "./components/header"
import Meme from "./components/Meme"

export default function App() {
  // function handel(){
  //   console.log("clickede");
  // }
    return (
        <div>


          {/* <div> <button onClick={handel}> click me</button> */}
          {/* <button onMouseOver={handel}> click me</button> </div> */}

                  
            <Header />
            <Meme />
        </div>
    )
}
