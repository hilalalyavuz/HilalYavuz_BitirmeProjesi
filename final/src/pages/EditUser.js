import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input,Label, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
import { createBrowserHistory } from 'history';
import AdminHome from '../components/AdminHome';
function EditUser() {  
        const [user, setuser]= useState({Id:'',Name: '', LName: '', Email: '', Phone: '', DaireId: '' });  
        const {id} = useParams();
        let tok = sessionStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${tok}` }
        };
          
        
        useEffect(() => {  
          const GetData = async () => {  
            await axios(`http://localhost:5133/api/User/${id}`,config).then((response)=>{
                setuser({Id:response.data.id, Name:response.data.name, LName:response.data.lName,Email:response.data.email,Phone:response.data.phone,DaireId:response.data.daireId})
                return response;
            });
          };  
         

          GetData();
          
        }, []);  
        
        const UpdateUser = (e) => {  
          e.preventDefault();  
          const data = {Id:id, Name:user.Name, LName: user.LName, Email:user.Email, Phone:user.Phone, DaireId: user.DaireId};  
          axios.patch(`http://localhost:5133/api/User/${id}`, data,config);
          createBrowserHistory().push('/getAllUsers');
          window.location.reload();
          
              
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setuser({...user, [e.target.name]: e.target.value});  
        }  
        
        return (  <div>
            <div>
                <AdminHome />
            </div>

        
                <div className="app flex-row align-items-center">  
                <Container>  
                  <Row className="justify-content-center">  
                    <Col md="12" lg="10" xl="8">  
                      <Card className="mx-4">  
                        <CardBody className="p-4">  
                          <Form onSubmit={UpdateUser}>  
                            <h1>Kullanıcı Güncelle</h1>  
                            <Label for='Name' >
                                İsim:
                            </Label>
                            <InputGroup className="mb-3">  
            
                              <Input type="text" name="Name" id="Name" value={user.Name} onChange={ onChange }  />  
                            </InputGroup> 
                            <Label for='LName' >
                                Soyisim:
                            </Label> 
                             <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="LName" name="LName" id="LName" value={user.LName} onChange={ onChange }/>  
                            </InputGroup> 
                            <Label for='Email' >
                                Email:
                            </Label> 
                            <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="Email" name="Email" id="Email"  value={user.Email} onChange={ onChange }  />  
                            </InputGroup> 

                            <Label for='Phone' >
                                Telefon:
                            </Label> 
                            <InputGroup className="mb-4">  
            
                              <Input type="text" placeholder="Phone" name="Phone" id="Phone" value={user.Phone} onChange={ onChange }  />  
                            </InputGroup>  
                            <Label for='DaireId' >
                                DaireID:
                            </Label>
                            <InputGroup className="mb-4">  
            
                              <Input type="text" placeholder="DaireId" name="DaireId" id="DaireId" value={user.DaireId} onChange={ onChange } />  
                            </InputGroup>    
                             
                      <CardFooter className="p-4">  
                          <Row>  
                            <Col xs="12" sm="6">  
                              <Button type="submit" className="btn btn-info mb-1" block><span>Kaydet</span></Button>  
                            </Col>  
                            <Col xs="12" sm="6">  
                              <Button className="btn btn-info mb-1" block><span>İptal</span></Button>  
                            </Col>  
                          </Row>  
                        </CardFooter>  
                          </Form>  
                        </CardBody>                 
                      </Card>  
                    </Col>  
                  </Row>  
                </Container>  
              </div>  
              </div>
        )  
}  
  
export default EditUser; 