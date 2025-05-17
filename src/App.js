import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
 import {useState} from "react";
import './App.css'
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";
import Footer from "./Components/Footer";
function App() {
  const [foodData,setFoodData] = useState([]);
  const [foodId,setFoodId] = useState("715415")
  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>
      <Container>
        <InnerContainer>
        <FoodList setFoodId={setFoodId} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}/>
        </InnerContainer>
      </Container>
      <Footer/>

    </div>
  );
}

export default App;
