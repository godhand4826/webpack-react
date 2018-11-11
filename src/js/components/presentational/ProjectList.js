import React, { Component } from "react";
import Project from "./Project";
export default class ProjectList extends Component {
    render() {
        return (
            <div>
                {this.props.projects.map((item, index) =>
                    <Project
                        project={item}
                        key={index}
                    />
                )}
            </div>
        )
    }
}