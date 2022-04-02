import "./App.css";
import Nevabaar from "./componets/Nevabaar";
import News from "./componets/News";
import Newsitem from "./componets/Newsitem";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Nevabaar />
      <div className="App">
      <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}

          <Route exact path="/" element={ <News category ="everything"/>} />
          <Route exact path="/Business" element={ <News category ="Business"/>} />
          <Route exact path="/Sport" element={ <News category ="sport"/>} />
          <Route exact path="/General" element={ <News category ="General"/>} />
          <Route exact path="/Entertainment" element={ <News category ="Entertainment"/>} />
          <Route exact path="/Health" element={ <News category ="Health"/>} />
          <Route exact path="/Science" element={ <News category ="Science"/>} />
          <Route exact path="/Technology" element={ <News category ="Technology"/>} />
          
        </Routes>
        </div>
      
    </>
  );
}

export default App;
