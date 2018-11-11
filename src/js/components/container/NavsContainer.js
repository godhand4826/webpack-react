import React, { Component } from "react";
import ReactDOM from "react-dom";
import GithubTabContent from "../presentational/GithubTabContent"
import WikiTabContent from "../presentational/WikiTabContent"

export default class NavsContainer extends Component {
    render() {
        return (
            <div className="container">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-github-tab" data-toggle="tab" href="#nav-github" role="tab" aria-controls="nav-github" aria-selected="true">Github</a>
                        <a className="nav-item nav-link" id="nav-wiki-tab" data-toggle="tab" href="#nav-wiki" role="tab" aria-controls="nav-wiki" aria-selected="false">Wiki</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-github" role="tabpanel" aria-labelledby="nav-github-tab"><GithubTabContent /></div>
                    <div className="tab-pane fade" id="nav-wiki" role="tabpanel" aria-labelledby="nav-wiki-tab"><WikiTabContent /></div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                </div>
            </div>
        );
    }
}

const wrapper = document.getElementById("app-list")
wrapper ? ReactDOM.render(<NavsContainer />, wrapper) : false