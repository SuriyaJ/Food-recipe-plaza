import './RApp.css';
//import "./key";
import Axios from "axios";
import{useState} from "react";
import RecipeTile from './RecipeTile';



function App() {

const[query, setquery]= useState("");
const[recipes, setrecipes]= useState([]);
const[healthlabel, sethealthlabel]= useState("vegan");

const YOUR_APP_ID = "c5238b88";
const YOUR_APP_KEY = "d4db412710eda71f42b23f451417035b";

  var url=`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabel}`;
  
  async function getRecipies(){
    var result= await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  
  const onsubmit=(e)=>{
    e.preventDefault();
    getRecipies();
  };
  
  return (
    <div className="app">
      <form action="" className="app_searchform" onSubmit={onsubmit}>
        <input type="text" className="app_input" placeholder= "enter ingridients" value={query} onChange={(e)=>setquery(e.target.value)}/>
        <input type="submit" className='app_submit' value="search" />
        <select className='app_healthlabel'>
          <option onClick={()=> sethealthlabel("vegan")}>vegan</option>
          <option onClick={()=> sethealthlabel("vegetaran")}>vegetaran</option>
          <option onClick={()=> sethealthlabel("paleo")}>paleo</option>
          <option onClick={()=> sethealthlabel("dairy-free")}>dairy-free</option>
          <option onClick={()=> sethealthlabel("wheat-free")}>wheat-free</option>
          <option onClick={()=> sethealthlabel("low-sugar")}>low-sugar</option>
          <option onClick={()=> sethealthlabel("egg-free")}>egg-free</option>
          <option onClick={()=> sethealthlabel("peanut-free")}>peanut-free</option>
          <option onClick={()=> sethealthlabel("tree-nut-free")}>tree-nut-free</option>
          <option onClick={()=> sethealthlabel("soy-free")}>soy-free</option>
          <option onClick={()=> sethealthlabel("fsh-free")}>fish-free</option>
          <option onClick={()=> sethealthlabel("shellfish-free")}>shellfish-free</option>
        </select>
      </form>

      <div className='app_recipes'>{recipes.map((recipe)=>
      {
        return <RecipeTile recipe={recipe}/>;
      })}</div>
    </div>
  );
}

export default App;
