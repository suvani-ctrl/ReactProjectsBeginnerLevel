import { useEffect, useState } from "react";
import createConnection from "./chat";

function ChatRoom({serverUrl,roomId})
{

  useEffect(() =>{
    const connection = createConnection(serverUrl,roomId);
    connection.connect();

    return () =>{
      connection.disconnect();
    }
  },[serverUrl,roomId]);
  return <div> Connected to {roomId} </div>
}



function App()
{
  const [roomId,setRoomId] = useState("Travel");
  const [serverUrl,setServerUrl] = useState("http://localhost:1234");
  const [show,setShow] = useState(false)


  function handleChange(e){
    setRoomId(e.target.value)
  }

  function handleUrlChange(e)
  {
    setServerUrl(e.target.value);
  }

  return(<>
  <ChatRoom serverUrl={serverUrl} roomId={roomId} />
  

  <label>
    hello welcome to the server roomId

    <select value={roomId}
    onChange={handleChange}>

      <option value="Travel"> Travel </option>
      <option value="Music">Music</option>
      <option value="Food">Food</option>

    </select>
  </label>

  <label>
    

  <select value={serverUrl}
      onChange={handleUrlChange}>
      <option value="http://localhost:1234">server 1</option>
      <option value="http://localhost:4321">server 2</option>
    </select>
  </label>


 <button onClick={() => setShow(!show)}>

  {show? "Hide Url":"show Url"}
 </button>

 

 {show && (<div>
  <input 
    type="text" 
    value={serverUrl} 
    onChange={handleUrlChange} 
  />

  {serverUrl === "http://localhost:1234" 
    ? <p>Server 1: Welcome to Server 1</p> 
    : <p>Server 2: Welcome to Server 2</p>}
</div>

  )}
  </>)

}


export default App;
