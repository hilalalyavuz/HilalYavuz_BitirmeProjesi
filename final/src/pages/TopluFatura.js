import React,{useState} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col,Row, InputGroup,Button,Input} from 'reactstrap'; 
import { createBrowserHistory } from 'history';
import AdminHome from '../components/AdminHome';

function TopluFatura(){
    const [tip,setTip]=useState();
    const [miktar,setMiktar]=useState();
    const [ay,setAy] = useState();
    const [yıl,setYıl] = useState();

    let tok = sessionStorage.getItem("token");
    
    
    const sendInfo = () =>{
    
      const GetData = async () => { 

        const configHeader = {
            headers: { Authorization: `Bearer ${tok}` }
        };
        const configBody = {
            Tip: tip,Odendi:false,Miktar:miktar,Ay:ay,Yıl:yıl
        };
        const result = await axios.post('http://localhost:5133/api/Fatura/TopluFatura',configBody,configHeader); 
        console.log(result);

        };
        GetData();
        createBrowserHistory().push('/getAllFatura');
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
              <i className="fa fa-align-justify"></i> Toplu Fatura Ekle 
              </CardHeader>  
            <CardBody style={{display:'flex',alignItems:'center',flexDirection:'column'}}> 
            <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='Fatura Tipi' value={tip} onChange={(e)=>setTip(e.target.value)}/>
                
                </InputGroup>  
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='Miktar' value={miktar} onChange={(e)=>setMiktar(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='Ay' value={ay} onChange={(e)=>setAy(e.target.value)}/>
                
                </InputGroup>

                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='Yıl' value={yıl} onChange={(e)=>setYıl(e.target.value)}/>
                
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

export default TopluFatura;
