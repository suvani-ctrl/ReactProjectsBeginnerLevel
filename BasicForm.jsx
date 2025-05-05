//A NESTED FORM IN JAVASCRIPT REACT

import { useState } from "react";


function App()
{

  const [name,setName] = useState("John Doe");
  const [title,setTitle] = useState("Give any title here ");
  const [city, setCity] = useState("Name any city please")
  const [image, setImage] = useState("Please insert an image URL")
  const [show, setShow] = useState(false)


 

  function handleNameUpdate(e)
  {
    setName(e.target.value)
  }

  function handleTitleUpdate(e)
  {
    setTitle(e.target.value)
  }

  function handleCityUpdate(e)
  {
    setCity(e.target.value)
  }

  function handleImageUpdate(e)
  {
    setImage(e.target.value)
  }
  function handleClick(e)
  {
      setShow(!show)
      
  }
  return(<>
  
  
{
  show &&(
    <div>
    <h5>Your name is: {name}</h5>
    <h5>Your title is: {title}</h5>
    <h5>Your city is: {city}</h5>
   {image && <img src={image} alt="user provided image"/>}
  </div>
  )
}

  <input 
  className="NameInput"
  value={name}
  onChange={handleNameUpdate}
  />

  <br/>

  <input
  className="TitleInput"
  value={title}
  onChange={handleTitleUpdate}
  />

  <br/>

  <input
  className="cityInput"
  value={city}
  onChange={handleCityUpdate}
  />
    <br/>

    <input
  className="imageInput"
  value={image}
  onChange={handleImageUpdate}
  />


    <br/>


    <button
    className="styleButton"
    onClick={handleClick}
    >
      Show Info
    </button>
  </>
  )


}

export default App;
