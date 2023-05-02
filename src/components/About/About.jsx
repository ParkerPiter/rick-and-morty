import s from "./About.module.css"
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {className:"titulos"}
    }

    // handleClick = ()=>{
    //     this.state = ({className:"blur"});
    //     console.log(this.state)
    //}

    render(){
        return(
            <div className={s.titulos}>
                <h1 className={s.titulos}>Esta Web de Rick & Morty fue diseñada por:</h1>
                <h2 className={s.titulos}>Crismar Chaparro</h2>
                <button  onClick={this.handleClick}
                >Picale de prueba</button>
                {console.log(this.state)}
            </div>
        );
    }
}

export default About;