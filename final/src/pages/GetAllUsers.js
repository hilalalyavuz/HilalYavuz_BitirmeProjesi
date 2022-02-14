import React from 'react' ; 
import { Badge, Card, CardBody, CardHeader, Col,Row, Table,Button,Modal,ModalHeader,ModalBody} from 'reactstrap';  
import axios from 'axios';  
import { useState, useEffect } from 'react';
import AdminHome from '../components/AdminHome';
import { createBrowserHistory } from 'history';

function GetAllUsers() {  
  const [data, setData] = useState([]);
  const [aa,setAa] = useState();
  let tok = sessionStorage.getItem("token");
  let rol = sessionStorage.getItem("role");
  const config = {
    headers: { Authorization: `Bearer ${tok}` }
};
  
  useEffect(() => {  
   
    const GetData = async () => {  
      const result = await axios.get('http://localhost:5133/api/User',config);
        
      setData(result.data);
      console.log(result.data);
      
    };  
  
    GetData();  
  }, []);  

  const deleteuser = async (id) => {  
     
    await axios.delete(`http://localhost:5133/api/User/${id}`,config)  
      .then((result) => {  
        console.log(result);
        console.log(result.data); 
        window.location.reload(); 
      });  
  }; 
  const addFatura = (ids,did) =>{
    createBrowserHistory().push(`/getAllUsers/addFatura/${ids}/${did}`);
    window.location.reload();
    
  };
  const edituser = (ids) =>{
    createBrowserHistory().push(`/getAllUsers/editUser/${ids}`);
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
              <i className="fa fa-align-justify"></i> Kullanıcı Listesi 
              </CardHeader>  
            <CardBody>  
              <Table 
  hover
  size="sm"
  striped>  
                <thead>  
                  <tr>  
                    <th class="col-sm-1">ID</th>  
                    <th class="col-sm-2">İsim</th>  
                    <th class="col-sm-2">Soyisim</th>  
                    <th class="col-sm-2">Email</th>
                    <th class="col-sm-1">DaireID</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Sil</th>
                    <th style={{textAlign:'center'}} class="col-sm-1">Güncelle</th>
                    <th style={{textAlign:'center'}} class="col-sm-2">Fatura Ata</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr>  
                        <td>{item.id}</td>  
                        <td>{item.name}</td>  
                        <td>{item.lName}</td>  
                        <td>{item.email}</td>  
                        <td style={{textAlign:'center'}}>{item.daireId}</td>  
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"red","border-color":"red"}} onClick={() => { deleteuser(item.id) }}>Sil</button>  
                        </div>
                        </td>
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" style={{"background-color":"lightgreen","border-color":"green"}} onClick={() => { edituser(item.id) }}>Güncelle</button>  
                        </div>
                        </td>
                        <td>
                        <div class="btn-group" style={{display:'flex',alignItems:'center'}}> 
                        <button className="btn btn-warning" onClick={() => { addFatura(item.id,item.daireId) }}>Fatura Ata</button>  
                        </div>
                        </td>
                      </tr>  
                    })}  
                </tbody>  
              </Table>  
              <Button color='primary' onClick={()=>{createBrowserHistory().push('/getAllUsers/addUser');window.location.reload();}}>Kullanıcı Ekle</Button>
            </CardBody>  
          </Card>  
        </Col>  
      </Row>  
      
    </div>
    </div> 
  )  
}  
  
export default GetAllUsers; 