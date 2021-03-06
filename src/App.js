
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './All-components/Header/Header';
import Main from './All-components/Main/Main';
import { useState } from 'react';
import Footer from './All-components/Footer/Footer';


function App() {

  const [count, setCount]=useState(0)

  function updateCount(){
    setCount(count+1)
  }

  return (
    <div className='main-section'>
      <Header counts={count}></Header>
      <Main countUpdate={updateCount}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
