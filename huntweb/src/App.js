import React from 'react';
import "./style.css"
import Header from "./components/header";
import Main from "./pages/main";


const App = () => (
    <div className="App">
        <Header/>
        <Main />
    </div>
)

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Juliana</h1>
//     </div>
//   );
// }

export default App;
