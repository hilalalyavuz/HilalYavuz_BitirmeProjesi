import React,{useEffect, useState} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col,Row, InputGroup,Button,Label} from 'reactstrap'; 
import { createBrowserHistory } from 'history';
import AdminHome from '../components/AdminHome';
import {useParams} from 'react-router-dom';

function SendResponse(){
    const [message, setMessage] = useState('');
    let tok = sessionStorage.getItem("token");
    let rol = sessionStorage.getItem("role");
    let ml = sessionStorage.getItem("email");
    const [icerik,seticerik] = useState();
    const {id} = useParams();
    const configHeader = {
      headers: { Authorization: `Bearer ${tok}` }
    };
    useEffect(()=>{
      const getMesajDetail = async()=>{
        await axios.get(`http://localhost:5133/api/Mesaj/Detay/${id}`,configHeader).then((result)=>{
        seticerik(result.data.icerik);
        console.log(result.data.icerik);

        });
      };
      getMesajDetail();

  },[]);

    
    const sendInfo = () =>{
      const GetData = async () => { 

        const configBody = {
            Response:message
        };
        const result = await axios.patch(`http://localhost:5133/api/Mesaj/${id}`,configBody,configHeader); 
        console.log(result);
        createBrowserHistory().push('/getAllMesaj');
        window.location.reload();

        };
        GetData();
    };
    
    return(
        <div>
        <div>
        <AdminHome />
        </div>
        <div className="animated fadeIn" style={{marginTop:'5rem',marginLeft:'10rem',display:'flex',justifyContent:'center'}}>  
      <Row style={{width:'50%'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Mesajı Cevapla 
              </CardHeader>  
            <CardBody style={{display:'flex',alignItems:'center',flexDirection:'column'}}>  

                <h5>Mesaj Detayı:</h5>
                <Label>{icerik}</Label>
                <InputGroup style={{width:'85%',margin:'1rem'}}>
                
                <textarea style={{width:'100%'}} placeholder='Cevap' value={message} onChange={(e)=>setMessage(e.target.value)} rows="5"/>
                
                </InputGroup>
                
                <InputGroup style={{width:'25%'}}>
                <Button color='primary' onClick={sendInfo} style={{width:'-webkit-fill-available'}}>
                    Gönder
                </Button>
                <Button style={{marginTop:'1rem'}} onClick={()=>{createBrowserHistory().push('/getAllMesaj'); window.location.reload();}} className="btn btn-info mb-1" block><span>İptal</span></Button>  
                </InputGroup>

            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
    </div>

    );
    
};

export default SendResponse;
