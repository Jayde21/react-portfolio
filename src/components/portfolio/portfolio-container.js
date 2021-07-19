import React, {Component} from "react"

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        this.state = {
            pageTitle: "Welcome to my portfolio"
        }
    }

    PortfolioItems(){
        const data = ["hello", "it's me", "I was wondering if after all these years you'd like to meet"];

        return data.map(item => {
            return <PortfolioItem title={item} url={"google.com"}/>;
        })
    }

    render(){
        //hi there
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.PortfolioItems()}
            </div>
        )
    }
}