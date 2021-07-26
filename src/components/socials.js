import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FaTwitter } from "react-icons/fa";


export default function Social() {




    return (
        <div className="panel is-primary">
            <p className="panel-heading">Socials</p>
                <a className="panel-block is-warning">Test</a>
                    <span className="panel-icon"><FaTwitter /></span>
                <a className="panel-block">Test</a>
        </div>
    )
}