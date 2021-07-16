import React, {Component} from "react"

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    construct() {
        console.log("Portfolio container had rendered")
    }
    render(){
        //hi there
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                <PortfolioItem/>
            </div>
        )
    }
}