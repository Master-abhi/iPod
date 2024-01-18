import React from "react";


class MenuBtns extends React.Component{

    render(){
        return(
            <>
                        <div style={styles.mainContainer}>
                    <div className="menu-container" id="targetx" onMouseOver={()=> this.props.handleRotate()}>
                        <div className="menu" onClick={()=> this.props.handleMenu()}>
                        <span>MENU</span>
                        </div>
                        <div className="foreward" id="active-menu">
                        <img  src="https://cdn-icons-png.flaticon.com/128/4210/4210646.png"/>
                        </div>
                        <div className="backward" id="active-menu">
                        <img src="https://cdn-icons-png.flaticon.com/128/8451/8451419.png"/>
                        </div>
                        <div className="play-pause" id="active-menu" onClick={()=> this.props.playnpause()}> 
                        <img src="https://cdn-icons-png.flaticon.com/128/10419/10419335.png"/>
                        </div>  
                        <div className="select-container">
                            <button className="select" onClick={() => this.props.handleOk()}></button>
                        </div>
                        
                    </div>
                </div>
            
            </>
        )
    }
}

const styles = {
    mainContainer: {
        backgroundColor: "grey",
        height: "15rem",
        width: "16.5rem",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: " 0px 0px 10px 10px"
      
      }
      
}

export default MenuBtns;