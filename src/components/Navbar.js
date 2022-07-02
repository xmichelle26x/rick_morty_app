import React from 'react';
 
const styleBar = {justifyContent:'flex-end'}
const styleForm = {display:'flex', justifyContent:'flex-end'}
const styleInput = {paddingLeft:'10px'}
const styleButton = {marginLeft:'10px'}

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
            <div className='container'>
                <a className="navbar-brand" href="#">Rick and Morty</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse"  id="navbarTogglerDemo02" style={styleBar}>

                    <div className="form-inline my-2 my-lg-0" style={styleForm}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" style={styleInput} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style={styleButton}>Search</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;