import React, {Component} from "react"

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container had rendered");
    }

    PortfolioItems(){
        const data = ["a","b","c","d","e","f"];
 
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
            </div>        
            )}
}