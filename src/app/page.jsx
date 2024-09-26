import Header from "../components/Header/Header";
import Login from "../components/Login/LoginPage";

export default function App() {
  console.log("app component is rendering")

  return (
      
      <div className = "body">
        <h1>i am the div text</h1>
        <Header/>
          <div> 
            <Login/>
          </div>
      </div>
    
    
  );
}
