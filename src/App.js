import React from 'react'
import Riad from './components/Riad/Riad';
// import Datas from '../src/dummy.json'
import Datas from '../src/dummy.json';
import Dair from './components/Dair/Dair';
import Demo from './components/Demo/Demo';
import CardDetails from './components/Card/CardDetails';
import RArticles from './components/RelatedArticles/RelatedArticles';
import RelatedArticles from './components/RelatedArticles/RelatedArticles';
import AppRoute from "./router/AppRoute";
import {BrowserRouter} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <AppRoute/>
</BrowserRouter>
    // <div>
    // {/* <Dair></Dair>  */}
    //  {/* <Demo></Demo> */}
    //   <Dair></Dair>
    //   <CardDetails></CardDetails>
    //   <RelatedArticles></RelatedArticles>

    //   {
    //   // Datas.map(data => <Riad Datas={data} key={data.id}></Riad>) 
    //   }


    //   </div>
  ) 
}

export default App;