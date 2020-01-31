import React, { Component } from 'react';
import logo from '../images/logo.png';
import {FaBars} from "react-icons/fa"
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    state={
        isOpen:false
      
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    
    render() {
        return <nav className="navbar active">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img className="logo" src = {logo} alt="flipr" />
                    </Link>
                    <button type="button" className="nav-btn"
                    onClick={this.handleToggle}>
                        <FaBars className="nav-icon" />
                    </button>

                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                <li>
                
                        <a className='lineh' href='/Portfolio'>Portfolio</a>
                        
                    </li>
                    <br/>
                    <li>
                    <a className='lineh' href='/Team'>Team</a>
                    </li>
                    <br/>
                    <li>
                    <a className='lineh' href='/Reach'>Reach</a>
                    </li>
                    </ul>
            </div>
        </nav>;
    }
}
