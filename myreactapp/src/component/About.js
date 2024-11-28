import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

let About = ()=>{
    let [authorName, setAuthorName] = useState("Mark")

    let params= useParams();
    let uid = params && params["id"] ? params["id"]: "No User id"; 
    
    const navigate = useNavigate();

    onclick = (evt) => {
        setAuthorName("Robin Wieruch")

        evt.preventDefault();
    }


    return (
    
            <div className="about">
                <h3>id: {uid}</h3>
                <hr/>

                <button onClick={onclick}>Change author name</button>
                <h4>{authorName}</h4>
                <hr/>

                <button onClick={()=> navigate(-1)}>Go Back Home</button>
            </div>
        
        
        
    )

}
export default About;