import React, {useState} from "react";
import { FaStar } from "react-icons/fa"
//import 'bootstrap/dist/css/bootstrap.min.css';

let Review = ()=>{

    const [rating, setRating] = useState('');
    const [rateColor, setColor] = useState('');

    return (
   
        <div className="container-fluid">
           
            <h2>Leave a Review</h2>
            <form action="" >
                <div >
                    <label className="form-label" for="rating">Rating</label>
                    <input className="form-range" type="range" min="1" max="5" name="review[rating]" id="rating" />
                </div>
                <div>
                    {[...Array(5)].map((start, index)=>{
                        const currentRate = index +1
                        return(
                            <>
                                <FaStar size={40} 
                                        onClick={()=>setRating(currentRate)}
                                        color={currentRate <=(rateColor || rating) ? "yellow" : "grey"}
                                />
                        
                            </>)
                    })}
                </div>
                <div>
                    <label className="form-label" for="body">Review</label>
                    <textarea className="form-control" name="review[body]" id="body" cols="30" rows="3" required></textarea>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        
          
        
        </div>
        
    )
}
export default Review;