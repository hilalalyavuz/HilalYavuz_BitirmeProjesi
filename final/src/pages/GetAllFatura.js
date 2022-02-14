import React from 'react' ; 
import { Badge, Card, CardBody, CardHeader, Col,Button,Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react';
import AdminHome from '../components/AdminHome';
import {createBrowserHistory} from 'history';

function GetAllFatura() {  
  const [data, setData] = useState([]);
  let tok = sessionStorage.getItem("token");
  let rol = sessionStorage.getItem("role");
  const config = {
    headers: { Authorization: `Bearer ${tok}` }
};
  
  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios.get('http://localhost:5133/api/Fatura',config);
        
      setData(result.data);
      console.log(result.data);
      
    };  
  
    GetData();  
  }, []);  

  const deletefatura = async (id,amount) => {  
     
    await axios.delete(`http://localhost:5133/api/Fatura/${id}/`,config)  
      .then((result) => {  
        console.log(result);
        console.log(result.data); 
        window.location.reload(); 
      });  
  };  
  
  return (  
    <div>
      <div>
        <AdminHome />
      </div>
    <div className="animated fadeIn">  
      <Row style={{width:'65%',marginLeft:'20rem'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Fatura Listesi Ödenmeyenler 
              </CardHeader>  
            <CardBody>  
              <Table hover  striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Tip</th> 
                    <th class="col-sm-1">Ay</th> 
                    <th class="col-sm-1">Yıl</th>  
                    <th class="col-sm-1">Ödendi</th>  
                    <th style={{textAlign:'center'}} class="col-sm-1">Miktar</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Kullanıcı ID</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Daire ID</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Sil</th>
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
                        <td>{"ödenmedi"}</td>  
                        <td style={{textAlign:'center'}}>{item.miktar}</td>  
                        <td style={{textAlign:'center'}}>{item.userId}</td> 
                        <td style={{textAlign:'center'}}>{item.daireId}</td>   
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"red","border-color":"red"}} onClick={() => { deletefatura(item.id,item.miktar) }}>Sil</button>  
                        </div>
                        </td>
                        
                      </tr>  
                    }})}
                </tbody>  
              </Table> 
              <Button color='primary' onClick={()=>{createBrowserHistory().push('/getAllFatura/topluFatura');window.location.reload();}}>Toplu Fatura Ekle</Button> 
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div> 
    <div className="animated fadeIn" style={{marginTop:'2rem'}}>  
      <Row style={{width:'65%',marginLeft:'20rem'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Fatura Listesi Ödenenler 
              </CardHeader>  
            <CardBody>  
              <Table hover striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Tip</th>
                    <th class="col-sm-1">Ay</th>  
                    <th class="col-sm-1">Yıl</th>   
                    <th class="col-sm-1">Ödendi</th>  
                    <th style={{textAlign:'center'}} class="col-sm-1">Miktar</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Kullanıcı ID </th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Daire ID</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Sil</th>
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
                        <td>{"ödendi"}</td>  
                        <td style={{textAlign:'center'}}>{item.miktar}</td>  
                        <td style={{textAlign:'center'}}>{item.userId}</td> 
                        <td style={{textAlign:'center'}}>{item.daireId}</td>   
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"red","border-color":"red"}} onClick={() => { deletefatura(item.id) }}>Sil</button>  
                        </div>
                        </td>
                        
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
  
export default GetAllFatura; 
