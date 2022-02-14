import React,{useState} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col,Row, InputGroup,Button} from 'reactstrap'; 
import { createBrowserHistory } from 'history';
import UserHome from '../components/UserHome';

function SendMesaj(){
    const [message, setMessage] = useState('');
    let tok = sessionStorage.getItem("token");
    let rol = sessionStorage.getItem("role");
    let ml = sessionStorage.getItem("email");
    
    
    const sendInfo = () =>{
      const GetData = async () => { 

        const configHeader = {
            headers: { Authorization: `Bearer ${tok}` }
        };
        const configBody = {
            Okundu: 'Okunmadı',Icerik:message,UserEmail:ml
        };
        const result = await axios.post('http://localhost:5133/api/Mesaj',configBody,configHeader); 
        console.log(result);
        createBrowserHistory().push('/userGetMesaj');
        window.location.reload();

        };
        GetData();
    };
    
    return(
        <div>
        <div>
        <UserHome />
        </div>
        <div className="animated fadeIn" style={{marginTop:'5rem',marginLeft:'10rem',display:'flex',justifyContent:'center'}}>  
      <Row style={{width:'50%'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Mesaj Gönder 
              </CardHeader>  
            <CardBody style={{display:'flex',alignItems:'center',flexDirection:'column'}}>  
                <InputGroup style={{width:'85%',margin:'1rem'}}>
                
                <textarea style={{width:'100%'}} placeholder='mesaj' value={message} onChange={(e)=>setMessage(e.target.value)} rows="5"/>
                
                </InputGroup>
                
                <InputGroup style={{width:'25%'}}>
                <Button color='primary' onClick={sendInfo} style={{width:'-webkit-fill-available'}}>
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

export default SendMesaj;
