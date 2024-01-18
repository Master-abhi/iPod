import React from "react";

class CoverFlow extends React.Component{


    render(){
        return(
            <>

                <div style={styles.coverflow}>
                    <img style={styles.img} src="https://cdn-icons-png.flaticon.com/128/11034/11034233.png"/>
                    <p>Cover Flow</p>
                </div>

            </>
        )
    }
}

const styles = {
    coverflow:{
        height: "12rem",
        width: "14.5rem",
        borderRadius: "4px",
        backgroundColor : "white",
        color: "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "13px"
    },
    img:{
        height: "70px",

    }
    
}
export default CoverFlow;