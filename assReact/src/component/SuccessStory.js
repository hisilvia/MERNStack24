import React from "react";


//export default class SuccessStory extends Component {
export default function SuccessStory(props) {

        return (
            <>
            <div className="header"> 
                {props.title}
                {props.author}
                
                <br/><br/>
                <button onClick={()=>props.callBackEvent("New Value")} >Send To Parent</button>
               
                
            </div>
            </>
            
        )
    
}