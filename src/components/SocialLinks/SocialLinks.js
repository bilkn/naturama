import React from 'react'
import "./SocialLinks.scss"
function SocialLinks() {
    return (
        <ul className= "social-links">
            <li className="social-links__item">
                <a href="" className="social-links__link">
                    <i className="fa fa-github social-links__icon" aria-hidden="true"></i>
                </a>
            </li>
            <li className="social-links__item">
                <a href="" className="social-links__link">
                    <i className="fab fa-linkedin social-links__icon" aria-hidden="true"></i>
                </a>
            </li>
            <li className="social-links__item">
                <a href="" className="social-links__link">
                    <i className="fas fa-at social-links__icon" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    )
}

export default SocialLinks;
