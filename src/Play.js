
import React from "react";


class Play extends React.Component{
    constructor(){
        super();
        this.state ={

                    id: 1,
                    name: "kabhii Tumhe",
                    movie: "Shershah",
                    artists: "Javed-Mohsin, Darshan Raval",
                    song: "https://www.pagalworld.com.se/files/download/id/3397",
                    poster: "https://www.pagalworld.com.se/siteuploads/thumb/sft7/3397_4.jpg"


            
        }
 
}


    render(){

        return(
            <>
                <div style={styles.songContainer}>
                    <div style={styles.songDetails}>
                    <div style={styles.poster}> 
                        <img style={styles.poster} src="https://c.saavncdn.com/302/Kabhii-Tumhhe-From-Shershaah--Hindi-2021-20210818153329-500x500.jpg"/>
                    </div>
                    <div style={styles.details}>
                        <h4>{this.state.name}</h4>
                        <h5>Artists: {this.state.artists}</h5>
                    </div>
                    </div>
                    <div style={styles.play}>
                        <audio style={styles.audio} src="https://www.pagalworld.com.se/files/download/id/3397" controls autoPlay  />
                    </div>
                </div>

            </>
        )
        

    }



}

const styles = {
    songContainer:{
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
        fontSize: "13px",
        border: "1px solid black"
    },
    songDetails:{
        height: "12rem",
        width: "14.5rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
    },
    poster:{
        height: "6rem",
        width: "6rem",
        border: "1px solid black"
    },
    details:{
        height: "6rem",
        width: "6rem",
        color: "black",
    },
    play:{
        height: "4rem",
        width: "14.5rem",

    },
    audio:{
        height: "2rem",
        width: "11rem",
    }
}

export default Play;

// {
//     id:2,
//     name: "Maan Meri Jaan",
//     movie: "Album",
//     artists: "King"
// },
// {
//     id:3,
//     name: "Mujhe Peene Do",
//     movie: "Album",
//     artists: "Darshan Raval"
// },
// {
//     id:4,
//     name: "Zihaal-e-Miskin",
//     movie: "Album",
//     artists: "Javed-Mohsin, Vishal Mishra, Shreya Ghosal"

// }