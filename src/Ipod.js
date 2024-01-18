import React from "react";
import MenuBtns from "./MenuBtns";
import Display from "./Display";
import ZingTouch from "zingtouch"

class Ipod extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            activePage: "Home",
            activeItem: 'Music',
            count: 0,
            play: false
        };

    }

    // Handling rotate using ZingTouch rotate library.
    handleRotate = () =>{
        var targetx = document.getElementById('targetx');
        var region = new ZingTouch.Region(targetx);
        var change = 0;
        var self = this
        self.state.count = self.state.count + 1;
        if(self.state.count < 2){
            region.bind(targetx, 'rotate', function(event){
             var currAngle = event.detail.distanceFromLast;
                //For anti Clockwise
                if(currAngle < 0){
                    change++;
                    if(change === 15){
                        change = 0;
                        if(self.state.activePage === 'Home'){
                            
                            if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }else if(self.state.activeItem === 'CoverFlow'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "CoverFlow"
                                })
                            }
                           
                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'Songs'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "Songs"
                                })
                            }
                        }
                    }
                }else{
                    // For Clockwise
                    change++;
                    if(change === 15){
                        change = 0;
                        if(self.state.activePage === 'Home'){
          
                            if(self.state.activeItem === 'Music'){
                                self.setState({
                                    activeItem : "Games"
                                })
                            }else if(self.state.activeItem === 'Games'){
                                self.setState({
                                    activeItem : "CoverFlow"
                                })
                            }else if(self.state.activeItem === 'CoverFlow'){
                                self.setState({
                                    activeItem : "Settings"
                                })
                            }else if(self.state.activeItem === 'Settings'){
                                self.setState({
                                    activeItem : "Music"
                                })
                            }


                        }else if(self.state.activePage === 'Music'){
                            if(self.state.activeItem === 'Songs'){
                                self.setState({
                                    activeItem : "Artists"
                                })
                            }else if(self.state.activeItem === 'Artists'){
                                self.setState({
                                    activeItem : "Songs"
                                })
                            }
                        }
                    }
                }
                });
        }
        
    };


    handleOk= () => {

        console.log("ok")
        if(this.state.activeItem === "Music"){
            this.setState({
                activePage: this.state.activeItem,
                activeItem: "Songs"
        })}else if(this.state.activeItem === "Songs"){
            this.setState({activePage: "Songs",
            activeItem: "Song1",
            play: true,
        })
        }else if(this.state.activeItem === "Play" || this.state.activeItem === "Song1"){
            console.log("not working here")
        }
        else{
            this.setState({
                activeItem : this.state.activeItem,
                activePage : this.state.activeItem
            })
        }

        }

    handleMenu =() =>{
            console.log("menu clicked")
            if(this.state.activePage === "Music"){
                this.setState({
                    activePage: "Home",
                    activeItem: "Music"
                })
            }else if(this.state.activePage === "Songs"){
                this.setState({
                    activePage: "Music",
                    activeItem: "Songs"
                })
            }else if(this.state.activePage === "Artists"){
                this.setState({
                    activeItem: this.state.activeItem,
                    activePage: "Music",
                    
                })
            }else{
                this.setState({
                    activeItem : this.state.activeItem,
                    activePage : 'Home'
                })
            }
          }

          playnpause = () =>{

                console.log("Not working")

        }


    render(){
        return(
            <>

            <Display activeItem={this.state.activeItem} activePage={this.state.activePage}/>
            <MenuBtns handleRotate={this.handleRotate} activeItem={this.state.activeItem}
            handleOk={this.handleOk}
             activePage={this.state.activePage}
             handleMenu={this.handleMenu}
             playnpause={this.playnpause}/>
            
            </>
        )
    }
}
//     render(){
//         return(
//             <>
//                 {/* <Display handleMusic={()=> this.props.handleMusic()}
//                 handleGames={()=> this.props.handleGames()}
//                 handleCoverflow={()=> this.props.handleCoverflow()}
//                 handleSettings={()=> this.props.handleSettings()}
//                 /> */}
//                 <MenuBtns  handleMusic={()=> this.props.handleMusic()}
//                 handleGames={()=> this.props.handleGames()}
//                 handleCoverflow={()=> this.props.handleCoverflow()}
//                 handleSettings={()=> this.props.handleSettings()}
//                 handleOk= {()=>{this.props.handleOk()}}
//                 handleMenu= {()=>{this.props.handleMenu()}}/>
//             </>
//         )
//     }
// }

export default Ipod;