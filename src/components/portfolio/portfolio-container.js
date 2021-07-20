import React, {Component} from "react"

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log("Portfolio container had rendered");
    }

    PortfolioItems(){
        const data = ["YellowNotFound", "OrangeNotfound", "GreenNotFound"];

        return data.map(item => {
            return <PortfolioItem title={item} />;
        })
    }
        //hello
    render(){
        //hi there
        return (
            <div>
                <h2>Portfolio items go here...</h2>

                {this.PortfolioItems()}
            </div>
        )
    }
}