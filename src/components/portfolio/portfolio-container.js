import React, {Component} from "react"

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        console.log("Portfolio container had rendered");
    }

    render(){
        //hi there
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
            </div>
        )
    }
}