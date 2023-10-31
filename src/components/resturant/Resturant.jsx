import React,{useEffect, useState} from 'react'

function Resturant() {
 
let [pizza , setPizza] = useState([])
let [onion , setOnion] = useState([])
let [salad , setSalad] = useState([])

const getsPizza = async ()=> {
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    let data = await response.json();
    setPizza(data);
}

const getsOnion = async ()=> {
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=onion");
    let data = await response.json();
    setOnion(data);
}

const getsSalad = async ()=> {
    let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=salad");
    let data = await response.json();
    setSalad(data);
    console.log(data)
    console.log(data.recipes)
}
useEffect( ()=>{
    getsPizza();
    getsOnion();
    getsSalad();
}, [])


return (
    <div className="resturant">
        
        <section className='row'>
            <div>
                <h2>Pizza for You!</h2>
            </div>
            {pizza.recipes?.map((ele) => {
                return (
                    <>
                        
                        <div className='col-md-3' key={ele.recipe_id}>
                            <h4>{ele.title}</h4>
                            <p>{ele.publisher}</p>
                            <img src={ele.image_url} alt={ele.publisher} className="w-100"/>
                            <pre>{ele.recipe_id}</pre>
                        </div>
                    </>
                )
            })}
        </section>
         <section className='row'>
            <div>
               <h2>Onion for You!</h2>
            </div>
         
            {onion.recipes?.map((ele) => {
                return (
                    <>
                        <div className='col-md-3' key={ele.recipe_id}>
                            <h4>{ele.title}</h4>
                            <p>{ele.publisher}</p>
                            <img src={ele.image_url} alt={ele.publisher} className="w-100"/>
                            <pre>{ele.recipe_id}</pre>
                        </div>
                    </>
                )
            })}
        </section>
        <section className='row'>
            <div>
               <h2>Salad for You!</h2>
            </div>
         
            {salad.recipes?.map((ele) => {
                return (
                    <>
                        <div className='col-md-3' key={ele.recipe_id}>
                            <h4>{ele.title}</h4>
                            <p>{ele.publisher}</p>
                            <img src={ele.image_url} alt={ele.publisher} className="w-100"/>
                            <pre>{ele.recipe_id}</pre>
                        </div>
                    </>
                )
            })}
        </section>
    </div>
  )
}

export default Resturant