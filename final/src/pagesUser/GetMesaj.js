import React from 'react' ; 
import {Card, CardBody, CardHeader,Table,Row,Col } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react';
import UserHome from '../components/UserHome';

function GetMesaj() {  
  const [data, setData] = useState([]);
  let tok = sessionStorage.getItem("token");
  let rol = sessionStorage.getItem("role");
  let ml = sessionStorage.getItem("email");

  const config = {
    headers: { Authorization: `Bearer ${tok}` }
};
  
  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios.get(`http://localhost:5133/api/Mesaj/${ml}`,config);

      setData(result.data);
      
    };  
  
    GetData();  
  }, []);  
  
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
              <i className="fa fa-align-justify"></i>  Mesaj Listem  
              </CardHeader>  
            <CardBody>  
              <Table hover striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Okundu</th>  
                    <th class="col-sm-2">İçerik</th>  
                    <th class="col-sm-2">Cevap</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                  
                    data.map((item, idx) => {  
                      let colorr="red";
                      if(item.okundu=="Okundu"){
                          colorr="lightgreen";
                      }
                      return <tr style={{backgroundColor:`${colorr}`}}>  
                        <td>{item.id}</td>  
                        <td>{item.okundu}</td>  
                        <td>{item.icerik}</td>  
                        <td>{!item.response ?"cevap bekleniyor":item.response}</td>  
                        
                      </tr>  
                    })}  
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
  
export default GetMesaj; 