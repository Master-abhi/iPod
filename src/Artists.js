
import React from "react";


class Artists extends React.Component{


    render(){
        return(
            <>
             <div style={styles.artists}>
                <img style={styles.img} src="https://cdn-icons-png.flaticon.com/128/10036/10036618.png"/>
                    <p>Artists</p>
                </div>

            </>
        )
    }
}

const styles = {
    artists:{
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

export default Artists;