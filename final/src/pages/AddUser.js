import React,{useState} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col,Row, InputGroup,Button,Input} from 'reactstrap'; 
import { createBrowserHistory } from 'history';
import AdminHome from '../components/AdminHome';

function AddUser(){
    const [name,setName]=useState();
    const [surname,setSurname]=useState();
    const [email,setEmail]=useState();
    const [tcNo,setTcNo]=useState();
    const [phone,setPhone]=useState();
    const [password,setPassword]=useState();
    const [daireId,setDaireId]=useState();
    const [roleId,setRoleId]=useState();

    let tok = sessionStorage.getItem("token");
    
    const generateSifre = ()=>{
      setPassword(Math.ceil(Math.random()*1000000+1000));
    };
    
    const sendInfo = () =>{
      const GetData = async () => { 

        const configHeader = {
            headers: { Authorization: `Bearer ${tok}` }
        };
        const configBody = {
            Name: name,LName:surname,Email:email,TcNo:tcNo,Phone:phone,DaireId:daireId,RoleId:roleId
        };
        const result = await axios.post('http://localhost:5133/api/User',configBody,configHeader); 
        console.log(result);

        };

        const GetData2 = async ()=>{
            let flag = false;
            if(roleId==1){
                flag = true;
            }
            const configBody2 = {
                Email: email,Password:password,Admin:flag
            };
    
            const result2 =  await axios.post('http://localhost:5133/Auth/create',configBody2);
            console.log(result2);
        };
       
        GetData();
        GetData2();
        createBrowserHistory().push('/getAllUsers');
        window.location.reload();
    };
    
    return(
        <div>
        <div>
        <AdminHome />
        </div>
        <div className="animated fadeIn" style={{marginLeft:'10rem',display:'flex',justifyContent:'center'}}>  
      <Row style={{width:'50%'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Kullanıcı Ekle 
              </CardHeader>  
            <CardBody style={{display:'flex',alignItems:'center',flexDirection:'column'}}> 
            <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='isim' value={name} onChange={(e)=>setName(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='soyisim' value={surname} onChange={(e)=>setSurname(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='tcNo' value={tcNo} onChange={(e)=>setTcNo(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='telefon' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                
                </InputGroup>
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='daireId' value={daireId} onChange={(e)=>setDaireId(e.target.value)}/>
                
                </InputGroup>
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='roleId' value={roleId} onChange={(e)=>setRoleId(e.target.value)}/>
                
                </InputGroup>
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input type='password' placeholder='şifre' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Button onClick={generateSifre}>Şifre Üret</Button>
                </InputGroup>
                <InputGroup style={{width:'40%',marginTop:'1rem'}}>
                <Button style={{width:'-webkit-fill-available'}} color='primary' onClick={sendInfo}>
                    Gönder
                </Button>
                </InputGroup>
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
    </div>

    );
    
};

export default AddUser;
