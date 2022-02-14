import React from 'react';
import {NavItem, Nav, NavLink,Button} from 'reactstrap';
import "../css/UserHome.css";
import {Link} from 'react-router-dom';

function AdminHome(){
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
                            <box-icon name='user-pin' size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                            <Link className="links" to={'/getAllUsers'} style={{'textDecoration':'none'}}>
                            Kullanıcılar
                            </Link>
                            
                               
                            </NavLink>
                            
                        </NavItem>
                        <NavItem>
                        <NavLink>
                            <box-icon name='buildings' size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                            <Link className="links" to={'/getAllDaire'} style={{'textDecoration':'none'}}>
                            Daireler
                            </Link>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink>
                            <box-icon name='message-dots' animation='tada-hover' size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                            <Link className="links" to={'/getAllMesaj'} style={{'textDecoration':'none'}}>
                            Mesajlar
                            </Link>
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                            <box-icon name='money' size="1.2rem" style={{"margin-right":'0.5rem'}}></box-icon>
                            <Link className="links" to={'/getAllFatura'} style={{'textDecoration':'none'}}>
                            Faturalar
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

export default AdminHome;