import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Socials() {
    let iconStyles = { color: "white" };

    return (
        <nav className="level is-mobile">
            <div className="level-left">
                <a className="level-item has-text-white" href="https://www.twitter.com/ssapphyree"><FaTwitter /></a>
                <a className="level-item has-text-white" href="https://www.github.com/sapphyree"><FaGithub /></a>
                <a className="level-item has-text-white" href="https://www.instagram.com/ssapphyree"><FaInstagram /></a>
                <a className="level-item has-text-white" href="https://www.discord.com/users/126210192378429440"><FaDiscord /></a>
                <a className="level-item has-text-white" href="https://www.linkedin.com/in/victoria-tilley-09a84a1aa"><FaLinkedin /></a>
                <a className="level-item has-text-white" href="mailto:victoriartilley@gmail.com"><MdEmail /></a>
            </div>
        </nav>
    )
}