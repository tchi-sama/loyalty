import { collection, doc, onSnapshot, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import Avatar from "./components/Avatar";
import Canvas from "./components/Canvas";
import { db } from "./firebase";


const cx = window.innerWidth / 2;
const cy = window.innerHeight / 2;

function App() {
  const [users, setUsers] = useState([]);
  const [userId , setUserId] = useState("H5t9hfKJgSiciyu8ZkAt");
  const [usersPosition, setUsersPosition] = useState([])
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
     const q = query(collection(db, "users"));
     const get = onSnapshot(q, (querySnapshot) => {
      let userArr = [];
      querySnapshot.forEach((doc) => {
          userArr.push({...doc.data(),id:doc.id})
      });
      setUsers(userArr);
      console.log(userArr);
     })
     return ()=> get();
  },[])

  useEffect(() => {
    let getuser = users.filter(user => user.id === userId) 
    setUserInfo(getuser[0])
    console.log(getuser[0])
  }, [users]);


  useEffect(()=>{
    let usersPossitionCalc = users.map(user => {
      return {...user,x:user.x -userInfo.x,y:user.y - userInfo.y}
    });
    setUsersPosition(usersPossitionCalc);
  },[userInfo])

  const move =async (e)=>{
    console.log(e)
    await updateDoc(doc(db, "users", userId),{
      x:userInfo.x+e.clientX-cx,
      y:userInfo.y+e.clientY-cy
    } )
  }
  return (
    <div className="relative h-[100vh]">

    <div className="overflow-hidden" onClick={e=>move(e)} style={container}>
        <div className="z-10 absolute w-[300px] h-[300px] border-2 border-blue-500 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full"></div>
        {
          usersPosition&&
          usersPosition.map((user, index) => (
              <Avatar key={user.id} user={user} />
          ))
        }
    </div>
    </div>
  );
}
export default App

const container ={
  backgroundColor:"#eee",
  position:"relative",
  minHeight: "100vh",
};

