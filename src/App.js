import './App.css';
import React, { useState } from 'react';
import Result from './components/Result';
import Search from './components/Search';


function App() {
  const [search, setSearch] = useState({
    category : "people",
    id : "1",
  });


  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <Result path="/:category/:id" search={search}/>
    </div>
  );
}

export default App;
