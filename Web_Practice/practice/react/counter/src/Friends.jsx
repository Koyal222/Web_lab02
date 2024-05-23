import { useState } from "react";

function Friends(){
    const [friend, setFriend]=useState("");
    const [Friends, setFriends]=useState([])
    const [Friendtype, setFriendtype]=useState("Acha")
return(
    <>
    <input 
    type="text" 
     value={friend}
     onChange={(e)=> {setFriend(e.target.value);}}     
      placeholder="koyal" ></input> 
      <select
      title = "friend type"
      value={Friendtype}
      onChange={(e)=>{
        setFriendtype(e.target.value)
      }} >
        <option value="Acha">Acha</option>
        <option value="Nuetral">Neutral</option>
        <option value="Bura">Bura</option>
      </select>


    <button
     onClick={() => {
        setFriends((prev) => [...prev, { name: friend, type: Friendtype }]);
      }}
    >Add</button>

    Friends
    <div>
        Achay Dost:
        {
        Friends.filter((FriendItem)=> FriendItem.type==="Acha")
        
        .map((FriendItem) => (
  <li>
    {FriendItem.name} ({FriendItem.type})
  </li>
))}
<hr/>
Buray dost:
{
Friends.filter((FriendItem)=> FriendItem.type === "Bura")
        
        .map((FriendItem) => (
  <li>
    {FriendItem.name} ({FriendItem.type})
  </li>
))
}
<hr/>
Neutral dost
{
Friends.filter((FriendItem)=> FriendItem.type=="Nuetral")
        
        .map((FriendItem) => (
  <li>
    {FriendItem.name} ({FriendItem.type})
  </li>
))
}


    </div>
    </>



)
}
export default Friends; 