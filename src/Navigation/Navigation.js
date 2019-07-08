import React from 'react';
import {Link} from 'react-router-dom'
import BCLogo from '../images/Fire_mascot.jpg';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Navigation.css';
import { W12UURLS, G11UURLS, Ch16UURLS } from '../TeamPage/events';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
        isOpen: true,
    };
}

// toggle() {
//     this.setState(prevState => ({
//         isOpen: !this.state.isOpen,
//     }));
// }

render() {
    const { onRouteChange } = this.props;
    return (
        <Navbar sticky={'top'} className="navbar navbar-expand-lg navbar-light bg-secondary">
          <NavbarBrand href = "/" >
            <img src={BCLogo}
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="BC logo" /> <h4 className="d-inline-block align-bottom"> 
                   Fire Fastpitch Softball </h4>
          </NavbarBrand>
          {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar > */}
            <Nav className="ml-auto" navbar >
              <NavItem >
                <NavLink tag={Link}  to="/" onClick={this.toggle}>
                  <p onClick={() => onRouteChange('home')} >
                    <br/> HOME
                  </p> 
                </NavLink>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar >
                <DropdownToggle tag="h6" nav caret ><br/>TEAMS </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem 
                    className='teams' tag={Link} to="/Team/Cholley16U"
                    onClick={this.toggle} 
                  >
                    <p onClick={() => 
                      onRouteChange('Cholley16U', Ch16UURLS)} >Fire 08</p>
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/Team/Meikle12U" onClick={this.toggle} >
                    <p onClick={() => 
                    onRouteChange('Meikle12U', W12UURLS)} >Fire Miekle 07</p>
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/Team/Gressman11U" onClick={this.toggle} >
                    <p onClick={() => 
                    onRouteChange('Gressman11U', G11UURLS)} >Fire 06</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
              {/* <NavLink tag={Link} to="/tournaments" onClick={this.toggle}>
                <p onClick={() => onRouteChange('tournaments')} >
                  <br/> TOURNAMENTS 
                </p> 
              </NavLink> */}
              {/* <NavLink tag="h6" href="/" onClick={this.toggle}>
                <a href="https://2019buckeyecharge.itemorder.com/sale" target="_blank" rel="noopener noreferrer">
                  <br/> FAN GEAR 
                </a> 
              </NavLink> */}
              {/* <NavLink tag="h6" to="/" onClick={this.toggle}>
                <p onClick={() => onRouteChange('home')} >
                  <br/> SPONSORS 
                </p> 
              </NavLink> */}
              {/* <NavLink tag={Link} to="/training" onClick={this.toggle}>
                <p onClick={() => onRouteChange('training')} >
                  <br/> TRAINING 
                </p> 
              </NavLink> */}
              <NavLink tag={Link} to="/tryouts" onClick={this.toggle}>
                <p onClick={() => onRouteChange('tryouts')} >
                  <br/> TRY-OUTS 
                </p> 
              </NavLink>
            </Nav>
          {/* </Collapse> */}
        </Navbar>
    )
  }
}

export default Navigation;