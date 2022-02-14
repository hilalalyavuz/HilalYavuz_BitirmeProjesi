import React,{useState} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col,Row, InputGroup, InputGroupText,Input,Button,Form} from 'reactstrap'; 
import { createBrowserHistory } from 'history';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token,setToken] = useState("token");
    const [role,setRole] = useState("role");
    
    
    const sendInfo = () =>{
      const GetData = async () => { 
        const result = await axios.post('http://localhost:5133/Auth/login'," ",
        {headers:{'Email':email,'Password':password}}).catch(function (error) {
          if (error.response) {
            alert("Girdiğiniz şifre hatalı veya kayıtlı değilsiniz!");
          }
      
        });;  
        setToken(result.data[0]);
        sessionStorage.setItem("token", result.data[0]);
        setRole(result.data[1]);
        sessionStorage.setItem("role", result.data[1]);
        sessionStorage.setItem("email",email);
        if(result.status == 200){
          if(result.data[1]=="User"){
             createBrowserHistory().push('/userHome');
             window.location.reload();
          
          }else if(result.data[1]=="Admin"){
            createBrowserHistory().push('/adminHome');
            window.location.reload();
          }
        }
        
        };
        GetData();
    };
    
    return(
        <div className="animated fadeIn" style={{marginTop:'5rem',display:'flex',justifyContent:'center'}}>  
      <Row style={{width:'50%'}}>  
        <Col>  
          <Card style={{display:'flex',alignItems:'center',flexDirection:'column'}}>  
            <CardHeader style={{width: '-webkit-fill-available'}}>  
              <i className="fa fa-align-justify"></i> Sign In  
              </CardHeader>  
            <CardBody>  
                <InputGroup style={{marginTop:'1rem'}}>
                <InputGroupText>
                <box-icon name='mail-send' size="1.2rem"></box-icon>
                </InputGroupText>
                <Input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" />
                
                </InputGroup>
                
                <InputGroup style={{marginTop:'1rem'}}>
                <InputGroupText>
                <box-icon name='key' size="1.2rem"></box-icon>
                </InputGroupText>
                <Input placeholder='Şifre' type='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
                
                </InputGroup>
                
                <InputGroup style={{marginTop:'1rem'}}>
                <Button color='primary' onClick={sendInfo} style={{width:'70%',marginLeft:'2rem'}}>
                    Giriş Yap
                </Button>
                </InputGroup>
               
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  

    );
    
};

export default Login;
