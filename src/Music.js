
import React from "react";


class Music extends React.Component{


    render(){
        return(
            <>
            <div className="menu-bar">
                <div className="sub-menu"  id={this.props.activeItem=="Songs"? "active": null } >Songs <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
                <div className="sub-menu"  id={this.props.activeItem=="Artists"? "active": null } >Artists <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
                            
            </div>
            </>
        )
    }
}

export default Music;