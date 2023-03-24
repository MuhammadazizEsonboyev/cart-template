import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css"


const Cart = ({cart}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

  

    useEffect(()=>{
        handlePrice();
    })

  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img}alt="ppp"/>
                        <p>{item.title}</p>
                    </div>
                    
                    <div>
                       Price: <span>{item.price}</span>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
    </article>
  )
}

export default Cart