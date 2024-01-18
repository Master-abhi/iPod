import React from "react";

class Settings extends React.Component{


    render(){
        return(
            <>

                <div style={styles.setting}>
                    <img style={styles.img} src="https://cdn-icons-png.flaticon.com/128/900/900797.png"/>
                    <p>Settings</p>
                </div>

            </>
        )
    }
}

const styles = {
    setting:{
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
export default Settings;