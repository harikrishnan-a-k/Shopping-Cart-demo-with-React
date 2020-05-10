import React,{useState,useEffect} from 'react';
import CartItem from './CartItem';
import CartHeading from './CartHeading';
import './Cart.css';

const Cart=({initialItems})=>{
    const localStorageItems=JSON.parse(window.localStorage.getItem('cartItems')) ;
    const [items,setItems]=useState(localStorageItems||initialItems);
    const grandTotal=items.reduce((total,item)=>{
        return total+(item.price*item.qty);
    },0).toFixed(2);
    const updateQty=(id,newQty)=>{
        const newItems=items.map((item)=>{
            if(item.id===id){
                return {...item,qty:newQty};
            }
            return item;
        });
        setItems(newItems);
    
    }


    // useEffect to update localstorage in state change of items
    useEffect(()=>{
        window.localStorage.setItem('cartItems',JSON.stringify(items));
    },[items]);



    return (
        <div className="Cart">
            <h1 className="Cart-title">shopping cart</h1>
            <CartHeading/>
            <div className="Cart-Items">
                {items.map((item)=>{
                    return <CartItem key={item.id} {...item} updateQty={updateQty}/>
                })}
            </div>
            <div>
            <h2 className="Cart-total">grand total: Rs.{grandTotal}</h2>
            </div>
        </div>
    )
}
export default Cart;