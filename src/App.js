import { useEffect, useState } from "react";
import Avatar from "./components/Avatar";
import Canvas from "./components/Canvas";


function App() {
  const [users, setUsers] = useState([{id:1,x:50,y:150},{id:2,x:100,y:100}]);
  const [userId , setUserId] = useState(1);
  const [usersPosition, setUsersPosition] = useState([])
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    let getuser = users.filter(user => user.id === userId) 
    setUserInfo(getuser[0])
  }, [users]);
  useEffect(()=>{
    let usersPossitionCalc = users.map(user => {
      return {...user,x:user.x -userInfo.x,y:user.y - userInfo.y}
    });
    setUsersPosition(usersPossitionCalc);
  },[(userInfo)])

  return (
    <div style={container}>
        <div className="absolute w-[300px] h-[300px] border-2 border-blue-500 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full"></div>
        {
          usersPosition&&
          usersPosition.map((user, index) => (
              <Avatar key={user.id} user={user} />
          ))
        }
    </div>
  );
}

const container ={
  backgroundColor:"#eee",
  position:"relative",
  minHeight: "100vh",
};


export default App;
