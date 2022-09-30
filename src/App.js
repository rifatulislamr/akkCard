import React from 'react';
import logo from './logo.svg';
import './App.css';
import Riad from './components/Riad/Riad';
import countries from '../src/dummy.json' 

function App() {
     
  // const [countries, setCountries,] = useState([]);
  // useEffect(()=>{
  //          fetch('../src/dummy.json')
  //          .then(res=> res.json())
  //          .then(data=> setCountries(data));
  // },[])

  return (
    <div className="App">
      
      
      <h1>coutnry loaded:{countries.length} </h1>
      <ul>
      <li>
      {
        countries.map(country=><Riad country={country} key={country.id} ></Riad>)
      }
      </li>
      </ul>
     
     
      
     
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
    </div>
  );
}

export default App;































// import React, { useState } from 'react';
// import './App.css';



// function App() {

//  const Nayoks=['Anwar','bobita', 'Rahul','kobita','rifatul','kobori']
//  const products = [

  
//   // {name: 'Photoshop', price: '$90.33'},
//   // {name: 'Illustrator', price: '$90.33'},
//   // {name: 'PDF Reader', price: '$90.33'},
//   // {name: 'Primeme', price: '$90.33'}
 
//   {title:'1', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'ajke rest nite hbe'
// },
// {title:'2', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'ajke rest nite hbe'
// },
// {title:'3', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'ajke rest nite hbe'
// },
// {title:'o4', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'ajke rest nite hbe'
// },
// {title:'5', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'ajke rest nite hbe'
// },
// {title:'6', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'ajke rest nite hbe'
// },
// {title:'7', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'ajke rest nite hbe'
// },
// {title:'koi tmi', 
//   para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
//   headline:'kesariya tera ishe hein piyar'
// }


// ]


//   return (
//     <div className="App">
//       <header className="App-header">
      
//        <p>I am a React person</p>
//        <ul>
//         {
//           Nayoks.map(riad=> <li> Name : {riad}</li>)
//         }
//         {

//         products.map(product=> <li>{product.headline}</li> )
        
//         }
//         {/* <li>{ Nayoks[0]}</li>
//         <li>{ Nayoks[1]}</li>
//         <li>{ Nayoks[2]}</li>
//         <li>{ Nayoks[3]}</li> */}
//        </ul>
// {
//   products.map(product=> <Product products={product}></Product> )
// }
       
//        {/* <Product products={products[0]}></Product>
//        <Product products={products[1]}></Product> */}
 
//         {/* <Riad name="Rajib" job="worker"></Riad>
//         <Riad name="Ziad" job="Students"></Riad> */}

//       </header>
//     </div>
//   );
// }



//  function Product(props){
//   const productStyle={
//     display: 'inline',
//     color:'green',
//     border:'1px solid gray',
//     borderRadius: '5px',
//     backgroundColor: 'lightgray',
//     height: '500px',
//     width: '500px',
//     float: 'left'
//   }
// return (

// <div style={productStyle}>
// <h2>
//  {props.products.title}
// </h2>

// <h5>{props.products.para}</h5>
// <h4>{props.products.headline}</h4>

// <button>Buy Now
  
// </button>



// </div>
// )
// }




// // function Riad(props){
// //   return(
// //     <div>
// //       <h3>
// //         My Name: {props.name}
// //       </h3>
// //       <p>
// //         My Profession: {props.job}
// //       </p>
// //     </div>
// //   )
// // }


// export default App;
