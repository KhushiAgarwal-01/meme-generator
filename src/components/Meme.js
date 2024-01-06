import React from "react"
// import memedata from "../components/memedata.js"


export default function Meme() {




    // const[imgurl,seturls]=React.useState("https://i.imgflip.com/261o3j.jpg")
    const[meme,setmeme] = React.useState({
                                        toptext: "",
                                        bottomtext: "",
                                        randomimage: "https://i.imgflip.com/261o3j.jpg"
                                        })

     const[allmemesimages,setallmemesimages]=React.useState([])

React.useEffect(()=>{ 
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then (data => setallmemesimages(data.data.memes))

    // const res= await fetch("https://api.imgflip.com/get_memes") //make the above func async   .....we cannot use async await like this  
    // const data = await res.json()
    // setallmemesimages(data.data.memes)
},[])


//if we want to use async await insteas of .then we have to make another function inside of useEffect
// React.useEffect(()=>{
//     async function getmeme(){
//         const res=await fetch("https://api.imgflip.com/get_memes")
//         const data= await res.json()
//         setallmemesimages(data.data.memes)
//     }
//     getmeme()

//     // return function(){ // it can have a clean up function 

//     // }
// },[])



    function GetMemeImage() {
        // const memearray=allmemesimages.data.memes

        const memearray=allmemesimages
        const randomnum=Math.floor(Math.random() * memearray.length)
        const urln=memearray[randomnum].url
       
        // console.log(urln);
        // let newtoptext=document.getElementById("top").value
        // let newbottomtext=document.getElementById("bottom").value
        setmeme(prevmeme=>{
            return ({ 
                ...prevmeme,
                randomimage: urln})
        })
    }

    function handleChange(event){

        const {name,type,value,checked}=event.target

        setmeme(prevmeme=>{
            return ({
                ...prevmeme,
                [name]:value
            })
        })
    }


    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    id="top"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleChange}
                ></input>
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    id="bottom"
                    name="bottomtext"
                    value={meme.bottomtext}
                    onChange={handleChange}
                ></input>
             <button 
                    className="form--button"
                    onClick={GetMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            {/* <img className="meme-img" src={meme.randomimage} /> */}

            <div className="meme">
                <img src={meme.randomimage} className="meme-image" />
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>
            </main>
        
    )
}