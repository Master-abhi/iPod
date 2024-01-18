import React from "react";

class Games extends React.Component{


    render(){
        return(
            <>
            
            <div style={styles.games}>
                    <img style={styles.img} src="https://cdn-icons-png.flaticon.com/128/1374/1374723.png"/>
                    <p>Games</p>
                </div>

            </>
        )
    }
}

const styles = {
    games:{
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
export default Games;