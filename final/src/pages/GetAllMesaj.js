import React from 'react' ; 
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react';
import AdminHome from '../components/AdminHome';
import {createBrowserHistory} from 'history';

function GetAllMesaj() {  
  const [data, setData] = useState([]);
  let tok = sessionStorage.getItem("token");
  let rol = sessionStorage.getItem("role");
  const config = {
    headers: { Authorization: `Bearer ${tok}` }
};
  
  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios.get('http://localhost:5133/api/Mesaj',config);
        
      setData(result.data);
      console.log(result.data);
      
    };  
  
    GetData();  
  }, []);  

  const deletemesaj = async (id) => {  
     
    await axios.delete(`http://localhost:5133/api/Mesaj/${id}`,config)  
      .then((result) => {  
        console.log(result);
        console.log(result.data); 
        window.location.reload(); 
      });  
  };  

  const response = async (id) =>{
    const confBody = {Id:id,Okundu:'Okundu'};
    await axios.patch(`http://localhost:5133/api/Mesaj/${id}`,confBody,config).then((result) => {
      createBrowserHistory().push(`/getAllMesaj/mesajDetay/${id}`);
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
              <i className="fa fa-align-justify"></i>Okunmayan Mesajlar   
              </CardHeader>  
            <CardBody>  
              <Table hover striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Durumu</th>  
                    <th class="col-sm-2">İçerik</th>  
                    <th style={{textAlign:'center'}}  class="col-sm-1">Kullanıcı ID</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Cevapla</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Sil</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      if(item.okundu=="Okunmadı"){
                      return <tr>  
                        <td>{item.id}</td>  
                        <td>{item.okundu}</td> 
                        <td>{item.icerik}</td>
                        <td style={{textAlign:'center'}}>{item.userId}</td>   
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"lightgreen","border-color":"green"}} onClick={() => { response(item.id) }}>Cevapla</button>  
                        </div>
                        </td>
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"red","border-color":"red"}} onClick={() => { deletemesaj(item.id) }}>Sil</button>  
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
      <Row style={{width:'65%',marginLeft:'20rem',marginTop:'3rem'}}>  
        <Col>  
          <Card>  
            <CardHeader>  
              <i className="fa fa-align-justify"></i> Okunan Mesajlar  
              </CardHeader>  
            <CardBody>  
              <Table hover striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Durumu</th>  
                    <th class="col-sm-2">İçerik</th>  
                    <th style={{textAlign:'center'}}  class="col-sm-1">Kullanıcı ID</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Cevapla</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Sil</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      if(item.okundu=="Okundu"){
                      return <tr>  
                        <td>{item.id}</td>  
                        <td>{item.okundu}</td> 
                        <td>{item.icerik}</td>
                        <td style={{textAlign:'center'}}>{item.userId}</td>   
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"lightgreen","border-color":"green"}} onClick={() => { response(item.id) }}>Cevapla</button>  
                        </div>
                        </td>
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"red","border-color":"red"}} onClick={() => { deletemesaj(item.id) }}>Sil</button>  
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
  
export default GetAllMesaj; 