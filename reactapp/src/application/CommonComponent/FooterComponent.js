import React from "react";

//functional component

export default function Footer(props) { //props - a data object to share data from parent to child component

    //return - creates a virtual dom for Footer and gets merged if change is there in props to actual dom after diffing
    //
    return(

        <>
            <div>
                <b><hr/>{props.name}</b>
            </div>
            {props.children}
            <div>

            </div>
        </>
    )
}