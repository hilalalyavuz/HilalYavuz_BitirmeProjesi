import React from 'react';
import {NavItem, Nav, NavLink,Button} from 'reactstrap';
import "../css/UserHome.css";
import {Link} from 'react-router-dom';
import 'boxicons'
<script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script>

function UserHome(){
    const logout = () =>{
        sessionStorage.clear();
        window.location.href = '/';
    };

    return(
        <>
        <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        <NavItem>
                            <h5 style={{marginLeft:'3rem',color:'black'}}>Hoşgeldiniz</h5>
                            <NavLink>
                            <box-icon name='money' size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                            <Link className="links" to={'/userGetFatura'} style={{'textDecoration':'none'}}>
                                Faturalarım
                            </Link>
                            </NavLink>
                            
                        </NavItem>
                        <NavItem>
                        <NavLink>
                            <box-icon name='message-dots' animation='tada' size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                            <Link className="links" to={'/userGetMesaj'} style={{'textDecoration':'none'}}>
                            Mesajlarım
                            </Link>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                            <box-icon name='send'  size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                            <Link className="links" to={'/userCreateMesaj'} style={{'textDecoration':'none'}}>
                            Mesaj Gönder
                            </Link>
                            </NavLink>
                        </NavItem>

                        <NavItem style={{    "display": "flex",
    "justify-content": "end",
    "align-items": "end",
    "flex": "1"}}>
                            
                            <Button color='primary' onClick={logout} style={{width:'-webkit-fill-available',margin:'1rem',marginTop:'10rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <box-icon name='log-out' color="white" size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                                Çıkış Yap
                            </Button>
                        </NavItem>


                    </ul>

                </div>
        </Nav>
        
        </>

    );

}

export default UserHome;