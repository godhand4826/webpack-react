import React, { Component } from "react";
import ProjectList from "./ProjectList";

class GithubTabContent extends Component {
    constructor() {
        super()
        this.state = { projects: [] }
        this.keyDown = this.keyDown.bind(this)
        this.query = this.query.bind(this)
    }

    query() {
        const queryString = $("#query").val()
        $.getJSON(`https://api.github.com/search/repositories?q=${queryString}&page=1&per_page=10&sort=stars`)
            .then((res) => {
                this.setState({ projects: res.items })
            })

    }

    keyDown(event) {
        const ENTER = 13;
        if (event.keyCode == ENTER) {
            this.query()
        }
    }

    render() {
        return (
            <div>
                <div>GithubApp</div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" id="query" placeholder="Query in Github" aria-label="Query in Github" aria-describedby="input query string search" onKeyDown={this.keyDown} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.query}>Go</button>
                    </div>
                </div>
                <div id="result">
                    <ProjectList
                        projects={this.state.projects}
                    />
                </div>
            </div>)
    }
}

export default GithubTabContent;