import React from "react";
import Home from "./Home";
import Music from "./Music";
import Games from "./Games";
import CoverFlow from "./CoverFlow";
import Settings from "./Settings";
import Songs from "./Songs";
import Artists from "./Artists"


class Display extends React.Component{


    render(){
        return(
            <>
            <div style={styles.mainContainer}>
                <div className="display">
                    {this.props.activePage==='Home'?<Home activeItem={this.props.activeItem}/> : null}
                    {this.props.activePage==='Music'?<Music activeItem={this.props.activeItem}/> : null}
                    {this.props.activePage==='Games'?<Games /> : null}
                    {this.props.activePage==='CoverFlow'?<CoverFlow /> : null}
                    {this.props.activePage==='Settings'?<Settings /> : null}
                    {this.props.activePage==='Songs'?<Songs/> : null}
                    {this.props.activePage==='Artists'?<Artists /> : null}
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
        borderRadius: "10px 10px 0px 0px"
      
      }
      
}

export default Display;