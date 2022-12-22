import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons'
function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img alt="logo" src={LogoS} />
        <img className="sub-logo" alt="logo" src={LogoSubtitle} />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/ilyes-ben-aicha-a40b3b15a/'>
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='https://github.com/ilyesbenaicha'>
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
          </a>
        </li>
        <li>
          <a target="_blank" rel='noreferrer' href='skype:live:ilyesbenaicha09'>
            <FontAwesomeIcon icon={faSkype} color="#4d4d4e"/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
