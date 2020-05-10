import React,{useState} from 'react';
import './Counter.css';

const Counter=({step=1})=>{
    const [count,setCount]=useState(0);
    const upCount=()=>setCount(count+step);
    const downCount=()=>setCount(count-step);
    const happyface='https://lh3.googleusercontent.com/proxy/F-KxEd281oOy6mrjdi8n4hjsDNMGbTXxK3J6SCKHWoxi6lPrAI2nnUqK1E_y_TITvTwlcSPtxLhqP_FNw9x4uGz2_Gt_GgJDWGQ6OjzoCD2nAXAfoe6tB2LZeciJOFDGl3wpvTfxui--VJQVItU20XPIxCyA8QWek5k';
    const sadFace='https://w2.pngwave.com/png/924/479/639/happy-face-emoji-smiley-sadness-happiness-video-crying-emoticon-facial-expression-png-clip-art.png';

    return(
        <div className="counter">
            <h2>{count}</h2>
            <button onClick={upCount}>+{step}</button>
            <button onClick={downCount}>-{step}</button>
            <img src={count%2===0?happyface:sadFace} width="100px" alt="smiley"></img>
        </div>
    )
}
export default Counter;
