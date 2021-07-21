import React, {Component} from "react"

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container had rendered");
    }

    PortfolioItems(){
        const data = ["Yellow.exeNotFound", "Orange.exeNotfound", "Green.exeNotFound", "replace Green.exe with Blue.exe and Purple.exe", "replace Orange.exe with Red.exe", "replace yellow.exe with Pink.exe"];
 
        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"}/>;
        })
    }

    render(){
        //hi there
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                {this.PortfolioItems()}
            </div>        )
    }
}