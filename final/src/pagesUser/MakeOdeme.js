import React,{useState} from 'react';
import axios from 'axios';
import {Card, CardBody, CardHeader, Col,Row, InputGroup,Button,Input,Label,CardFooter} from 'reactstrap'; 
import { createBrowserHistory } from 'history';
import UserHome from '../components/UserHome';
import {useParams} from 'react-router-dom';

function MakeOdeme(){
    const [krediNo,setKrediNo]=useState();
    const [expDate,setexpDate]=useState();
    const [cvv,setCvv]=useState();
    const [isimSoyisim,setIsimSoyisim]=useState();
    const [success,setSuccess] = useState();
    const {id} = useParams();
    const {amount} = useParams();

    let tok = sessionStorage.getItem("token");
    
    
    const sendInfo = () =>{
      const GetData = async () => { 

        const configHeader = {
            headers: { Authorization: `Bearer ${tok}` }
        };
        const configBody = {
            cardNumber: krediNo,nameSurname:isimSoyisim,expirationDate:expDate,cvv:cvv,money:amount
        };
        await axios.post(`http://localhost:5119/api/v1/Payment/WithdrawMoney`,configBody,configHeader).then((result)=>{
          if(result.data==true){
              GetData2();
              createBrowserHistory().push('/userGetFatura');
              window.location.reload();
          }else{
            alert("Bakiye yetersiz veya bilgiler yanlış!");
          }
        }); 
        

        };
        GetData();
        const GetData2 = async ()=>{
          const configHeader = {
            headers: { Authorization: `Bearer ${tok}` }
        };
        const configBody = {
            odendi: true
        };
        const result = await axios.patch(`http://localhost:5133/api/Fatura/${id}`,configBody,configHeader);
        };

        };
        
    
    return(
        <div>
        <div>
        <UserHome />
        </div>
        <div className="animated fadeIn" style={{marginLeft:'10rem',display:'flex',justifyContent:'center'}}>  
      <Row style={{width:'50%'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Ödeme Yap 
              </CardHeader>  
            <CardBody style={{display:'flex',flexDirection:'column'}}> 
            <img style={{width:'20rem',height:'15rem',marginLeft:'6rem'}} src={require('../creditCard.png')}></img>
            <Label>İsim-Soyisim:</Label>
            <InputGroup style={{width:'60%'}}>
                
                <Input value={isimSoyisim} onChange={(e)=>setIsimSoyisim(e.target.value)}/>
                
                </InputGroup> 
                <Label>Kredi Kart Numarası:</Label>
                <InputGroup style={{width:'60%'}}>
                
                <Input  value={krediNo} onChange={(e)=>setKrediNo(e.target.value)}/>
                
                </InputGroup> 
                <Label>Son Kullanma Tarihi:</Label>
                <InputGroup style={{width:'60%'}}>
                
                <Input value={expDate} onChange={(e)=>setexpDate(e.target.value)}/>
                
                </InputGroup> 

                <Label>CVV:</Label>
                <InputGroup style={{width:'60%'}}>
                
                <Input value={cvv} onChange={(e)=>setCvv(e.target.value)}/>
                </InputGroup> 
                <CardFooter className="p-4" style={{marginTop:'1rem'}}>  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button onClick={sendInfo} className="btn btn-info mb-1" block><span>Kaydet</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" block onClick={()=>{createBrowserHistory().push('/userGetFatura');window.location.reload();}}><span>İptal</span></Button>  
                            </Col>  
                          </Row>  
                        </CardFooter>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div>  
    </div>

    );
    
};

export default MakeOdeme;
