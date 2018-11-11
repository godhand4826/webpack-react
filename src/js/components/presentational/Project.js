import React, { Component } from "react";

export default class Project extends Component {
    render() {

        return (
             <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.project.full_name}</h5>
                    <p className="card-text">{this.props.project.description}}</p>
                    <a href={this.props.project.html_url} className="btn btn-outline-primary">Check in Github</a>
                </div>
            </div>
        )

    }
}