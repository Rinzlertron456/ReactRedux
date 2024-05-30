import './App.css'
import Header from './components/Header';
import Database from './components/Database';

function App() {
  let Admin=[
    {
      "username":"admin1",
      "password":"admin123",
    },
    {
      "username":"admin2",
      "password":"admin456",
    },
    {
      "username":"admin3",
      "password":"admin789",
    },
    {
      "username":"admin4",
      "password":"admin901",
    },
    {
      "username":"admin5",
      "password":"admin012",
    },
  ];
  return (
    <>
      < Header data="Admin Database" />
      < Database data={Admin}/>
      {/* {Admin.map((ele,i)=>{
        return <li key={i}>Username:- {ele.username} Password:- {ele.password}</li>
      })} */}
    </>
  )
}

export default App
