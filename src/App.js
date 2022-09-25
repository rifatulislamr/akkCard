import React, { useEffect, useState } from 'react';
import './App.css';



function App() {

 const Nayoks=['Anwar','bobita', 'Rahul','kobita','rifatul','kobori']
 const products = [

  
  // {name: 'Photoshop', price: '$90.33'},
  // {name: 'Illustrator', price: '$90.33'},
  // {name: 'PDF Reader', price: '$90.33'},
  // {name: 'Primeme', price: '$90.33'}
 
  {title:'1', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'ajke rest nite hbe'
},
{title:'2', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'ajke rest nite hbe'
},
{title:'3', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'ajke rest nite hbe'
},
{title:'o4', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'ajke rest nite hbe'
},
{title:'5', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'ajke rest nite hbe'
},
{title:'6', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'ajke rest nite hbe'
},
{title:'7', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'ajke rest nite hbe'
},
{title:'koi tmi', 
  para:'ajke saradin onk kahini hoyeche tai amader k onk rest nite hbe so be carefull', 
  headline:'kesariya tera ishe hein piyar'
},
{
  title:"ziad",
  para: "sdfhsfjslfdjsfjslfslkfjslfjsdfjslkfjslkfjslfjslfjslkfslkfslkfsdlfjslfsjlfsjf",
  headline: "amr mon ajke vlo nei"
}


]


  return (
    <div className="App">
      <header className="App-header">

      <Counter></Counter>
      <Dynamic></Dynamic>
       <p>I am a riad</p>
       <ul>
        {
          Nayoks.map(riad=> <li> Name : {riad}</li>)
        }
        {

        products.map(product=> <li>{product.headline}</li> )
        
        }
        <li>{ Nayoks[0]}</li>
        <li>{ Nayoks[1]}</li>
        <li>{ Nayoks[2]}</li>
        <li>{ Nayoks[3]}</li>
       </ul>
{
  products.map(product=> <Product products={product}></Product> )
}
       
       <Product products={products[0]}></Product>
       <Product products={products[1]}></Product> 
 
        <Person name="Rajib" job="worker"></Person>
        <Person name="Ziad" job="Students"></Person>
        <Person name="Ziad" job="Students"></Person>

      </header>
    </div>
  );
}

function Dynamic(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res=> res.json())
    .then (data => setUsers(data));
  },[] )

  return(
    <div>
      <h>Riad {users.name}</h>
      {console.log(users)}
      <ul>
        {users.map(users=> <h1>Name : {users.url}</h1>)}
      </ul>
    </div>

  )
}


function Counter(){
  const [count,setCount] = useState(0);
  const handleIncrease = () => setCount (count + 1);
  const handleDcrease  = () => setCount (count -1);

  return(
    <div>
      <h1>
       Counter: {count} 
       
       
      </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button  onClick={handleDcrease}>Decrease</button>
    </div>
  )
}



 function Product(props){
  const productStyle={
    display: 'inline',
    color:'green',
    border:'1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '500px',
    width: '500px',
    float: 'left'
  }
return (

<div style={productStyle}>
<h1>
 {props.products.title}
</h1>

<h5>{props.products.para}</h5>
<h4>{props.products.headline}</h4>

<button>Buy Now</button>



</div>
)
}




function Person(props){
  return(
    <div>
      <h3>
        My Name: riad
      </h3>
      <p>
        My Profession: feriowla
      </p>
    </div>
  )
}


export default App;
