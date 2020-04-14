import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SidebarDrawer from './SidebarDrawer';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            drawerOpen: false, //state use sidebar drawer
            headerShow: false
        }
    }

    handelScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })
        }else{
            this.setState({
                headerShow: false
            })
        }
    }

    //Sidebar drawer menu toggle
    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handelScroll)
    }

    
    render() {
        
        return (
            <div className="container-fluid">
                <div className="row">
                    <AppBar                 
                        position="fixed" 
                        style={{ 
                            boxShadow: 'none',
                            padding: '10px 0',
                            backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent' 
                        }}
                    >

                        <Toolbar>
                            <div className="header_log0 col-lg-6">
                                <div className="header_logo_venue font_righteous">The Venue</div>
                                <div className="header_logo_title">Musical Events</div>
                            </div> {/* end header logo */}

                            <div className="col-lg-6" style={{textAlign:'end'}}>
                                <IconButton  
                                    color="inherit" 
                                    aria-label="menu"
                                    onClick={() => this.toggleDrawer(true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </div> {/* end Icon Button */}
                        </Toolbar>

                        <SidebarDrawer
                            open = {this.state.drawerOpen}
                            onClose = {(value) => this.toggleDrawer(value)}
                        />

                    </AppBar>

                </div>
            </div>
        );
    }
}

export default Header;

