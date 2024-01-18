import React from "react";

class Home extends React.Component{


    render(){
        return(
            <>

                        <div className="menu-bar">
                            <div className="sub-menu"  id={this.props.activeItem=="Music"? "active": null } onClick={()=> this.props.handleMusic()}>Music <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
                            <div className="sub-menu"  id={this.props.activeItem=="Games"? "active": null } onClick={()=> this.props.handleGames()}>Games <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
                            <div className="sub-menu"  id={this.props.activeItem=="CoverFlow"? "active": null } onClick={()=> this.props.handleCoverflow()}>Cover Flow <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
                            <div className="sub-menu"  id={this.props.activeItem=="Settings"? "active": null } onClick={()=> this.props.handleSettings()}>Setting <img src="https://cdn-icons-png.flaticon.com/128/11488/11488622.png"/></div>
                        </div>



            
            </>
        )
    }
}

export default Home;