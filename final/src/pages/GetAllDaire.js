import React from 'react' ; 
import { Badge, Button, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react';
import AdminHome from '../components/AdminHome';
import { createBrowserHistory } from 'history';

function GetAllDaire() {  
  const [data, setData] = useState([]);
  let tok = sessionStorage.getItem("token");
  let rol = sessionStorage.getItem("role");
  const config = {
    headers: { Authorization: `Bearer ${tok}` }
};
  
  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios.get('http://localhost:5133/api/Daire',config);
        
      setData(result.data);
      console.log(result.data);
      
    };  
  
    GetData();  
  }, []);  

  const deletedaire = async (id) => {  
     
    await axios.delete(`http://localhost:5133/api/Daire/${id}`,config)  
      .then((result) => {  
        console.log(result);
        console.log(result.data); 
        window.location.reload(); 
      });  
  }; 
  
  const editdaire = async(id)=>{
    createBrowserHistory().push(`/getAllDaire/editDaire/${id}`);
    window.location.reload();
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
              <i className="fa fa-align-justify"></i> Daire Listesi  
              </CardHeader>  
            <CardBody>  
              <Table hover  striped responsive size="sm">  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-1">Blok</th>  
                    <th class="col-sm-1">Durumu</th>  
                    <th style={{textAlign:'center'}} class="col-sm-1">Kat</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Daire No</th>
                    <th class="col-sm-1">Kullanıcı ID</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Sil</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Güncelle</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr>  
                        <td>{item.id}</td>  
                        <td>{item.blok}</td>  
                        <td>{item.durumu ? "dolu":"boş"}</td>  
                        <td style={{textAlign:'center'}}>{item.kat}</td>  
                        <td style={{textAlign:'center'}} >{item.daireNo}</td> 
                        <td style={{textAlign:'center'}} >{item.userId}</td>   
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"red","border-color":"red"}} onClick={() => { deletedaire(item.id) }}>Sil</button>  
                        </div>
                        </td>
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"lightgreen","border-color":"green"}} onClick={() => { editdaire(item.id) }}>Güncelle</button>  
                        </div>
                        </td>
                        
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
              <Button color='primary' onClick={()=>{createBrowserHistory().push('/getAllDaire/addDaire');window.location.reload();}}>Daire Ekle</Button>
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
    </div> 
    </div> 
  )  
}  
  
export default GetAllDaire; 