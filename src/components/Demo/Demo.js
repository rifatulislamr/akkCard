import React from 'react'
import Riad from './Demo.json';

function Demo() {
   
    return (
        <div>
 {
            Riad.map(({title,picture,des})=> { 
                
    
                return (
                    <div>
                      <h1>{title}</h1>
                    <img src={picture} alt="" />
                     <h3>{des}</h3>
                     <h3>{des}</h3>
                    </div>
                   
                    
                )
                  
                   
                  
            })
}
        </div>
        
          
       
       
      
    )
}

export default Demo