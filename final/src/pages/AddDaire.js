import React,{useState} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col,Row, InputGroup,Button,Input} from 'reactstrap'; 
import { createBrowserHistory } from 'history';
import AdminHome from '../components/AdminHome';

function AddDaire(){
    const [blok,setBlok]=useState();
    const [durumu,setDurumu]=useState();
    const [tipi,setTipi]=useState();
    const [kat,setKat]=useState();
    const [daireNo,setDaireNo]=useState();

    let tok = sessionStorage.getItem("token");
    
    
    const sendInfo = () =>{
      const GetData = async () => { 

        const configHeader = {
            headers: { Authorization: `Bearer ${tok}` }
        };
        const configBody = {
            Blok: blok,Durumu:durumu,Tipi:tipi,Kat:kat,DaireNo:daireNo
        };
        const result = await axios.post('http://localhost:5133/api/Daire',configBody,configHeader); 
        console.log(result);

        };
        GetData();
        createBrowserHistory().push('/getAllDaire');
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
              <i className="fa fa-align-justify"></i> Daire Ekle 
              </CardHeader>  
            <CardBody style={{display:'flex',alignItems:'center',flexDirection:'column'}}> 
            <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='blok' value={blok} onChange={(e)=>setBlok(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='durumu' value={durumu} onChange={(e)=>setDurumu(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='tipi' value={tipi} onChange={(e)=>setTipi(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='kat' value={kat} onChange={(e)=>setKat(e.target.value)}/>
                
                </InputGroup> 
                <InputGroup style={{width:'60%',marginTop:'1rem'}}>
                
                <Input placeholder='daire No' value={daireNo} onChange={(e)=>setDaireNo(e.target.value)}/>
                
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

export default AddDaire;
