import React from 'react' ; 
import {Card, CardBody, CardHeader, Col,Row, Table,Button, Label} from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react';
import UserHome from '../components/UserHome';
import {createBrowserHistory} from 'history';

function GetFatura() {  
  const [data, setData] = useState([]);
  let tok = sessionStorage.getItem("token");
  let rol = sessionStorage.getItem("role");
  let ml = sessionStorage.getItem("email");

  const config = {
    headers: { Authorization: `Bearer ${tok}` }
};
  
  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios.get(`http://localhost:5133/api/Fatura/${ml}`,config);

      setData(result.data);
      
    };  
  
    GetData();  
  }, []); 

   const makeOdeme = (id,amount) =>{
    createBrowserHistory().push(`/userGetFatura/makeOdeme/${id}/${amount}`);
    window.location.reload();
  };
  return (  
    
    <div> 
    <div>
        <UserHome />
    </div>
     <div className="animated fadeIn">
      <Row style={{width:'52%',marginLeft:'27rem'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Fatura Listem 
              </CardHeader>  
            <CardBody>  
              <h6 style={{color:'red'}}>Ödenmemiş</h6>
              <Table hover striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Tip</th>
                    <th class="col-sm-1">Ay</th>   
                    <th class="col-sm-1">Yıl</th> 
                    <th class="col-sm-1">Ödendi</th>  
                    <th style={{textAlign:'center'}} class="col-sm-1">Miktar</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Öde</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                  
                    data.map((item, idx) => {  
                      if(item.odendi==0){
                      return <tr>  
                        <td>{item.id}</td>  
                        <td>{item.tip}</td> 
                        <td>{item.ay}</td> 
                        <td>{item.yıl}</td>  
                        <td>ödenmedi</td>  
                        <td style={{textAlign:'center'}}>{item.miktar}</td>  
                       <td style={{display: 'flex',justifyContent:'center'}}><button style={{width:'5rem'}} className='btn btn-warning' onClick={()=>{makeOdeme(item.id,item.miktar)}}>Öde</button></td>
                        
                      </tr>  
                    }})}  
                </tbody>  
              </Table>  
              <h6 style={{color:'green'}}>Ödenmiş</h6>
              <Table hover striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Tip</th>
                    <th class="col-sm-1">Ay</th> 
                    <th class="col-sm-1">Yıl</th>   
                    <th class="col-sm-1">Ödendi</th>  
                    <th class="col-sm-1">Miktar</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                  
                    data.map((item, idx) => {  
                      if(item.odendi==1){
                      return <tr>  
                        <td>{item.id}</td>  
                        <td>{item.tip}</td> 
                        <td>{item.ay}</td>
                        <td>{item.yıl}</td>   
                        <td>ödendi</td>  
                        <td>{item.miktar}</td>  
                        
                      </tr>  
                    }})}  
                </tbody>  
              </Table>  
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
      </div>
    </div>  
  )  
}  
  
export default GetFatura; 