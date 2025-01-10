import React from "react";
function LetDemo(){
    function example(){
        let x = 10;
        if(true){
            let y = 20 ;
            console.log(x);
            console.log(y);
        }
        console.log(x);
    }

    example();
}

export default LetDemo;