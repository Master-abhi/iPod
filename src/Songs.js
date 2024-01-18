
import React from "react";
import Play from "./Play";

class Songs extends React.Component{


    render(){

        return(
            <>
                <Play/>
            </>
        )
        

    }



}
{/* <div className="menu-bar">
    
{
    this.state.songs.map((e) => (
        
        <div className="sub-menu"   id={this.props.activeItem=="Song1"? "active": null } >{e.name} <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
    ))
}

            
</div> */}
// id={this.props.activeItem=="Song1"? "active": null }
{/* <div className="menu-bar">

{
    this.state.map((e) => (
        <div className="sub-menu"   >{e.name} <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
    ))
}

            
</div> */}
export default Songs;