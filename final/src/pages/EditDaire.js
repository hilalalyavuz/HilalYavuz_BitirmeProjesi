import React, { useState, useEffect} from 'react';
import { useParams } from "react-router-dom";  
import axios from 'axios';  
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup,Label, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
import { createBrowserHistory } from 'history';
import AdminHome from '../components/AdminHome';
function EditDaire() {  
        const [daire, setdaire]= useState({Id:'',Blok: '', Durumu: '', Tipi: '', Kat: '', DaireNo: '',UserId:''});  
        const {id} = useParams();
        let tok = sessionStorage.getItem("token");
        const config = {
            headers: { Authorization: `Bearer ${tok}` }
        };
          
        
        useEffect(() => {  
          const GetData = async () => {  
            await axios(`http://localhost:5133/api/Daire/${id}`,config).then((response)=>{
                setdaire({Id:response.data.id, Blok:response.data.blok, Durumu:response.data.durumu, Tipi:response.data.tipi,Kat:response.data.kat,DaireNo:response.data.daireNo,UserId:response.data.userId})
                return response;
            });
          };  
         
          GetData();
          
        }, []);  
        
        const UpdateUser = (e) => {  
          e.preventDefault();  
          const data = {Id:id, Blok:daire.Blok, Durumu: daire.Durumu, Tipi:daire.Tipi, Kat:daire.Kat, DaireNo: daire.DaireNo, UserId:daire.UserId};  
          console.log(data);
          axios.patch(`http://localhost:5133/api/Daire/${id}`, data,config);
          createBrowserHistory().push('/getAllDaire');
          window.location.reload();
          
              
        };  
        
        const onChange = (e) => {  
          e.persist();  
          setdaire({...daire, [e.target.name]: e.target.value});  
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
                            <h1>Daire Güncelle</h1>  
                            <Label for='Blok' >
                                Blok:
                            </Label>
                            
                            <InputGroup className="mb-3">  
                              <Input type="text" name="Blok" id="Blok" value={daire.Blok} onChange={ onChange }  />  
                            </InputGroup>  

                            <Label for='Durumu' >
                                Durumu:
                            </Label>
                             <InputGroup className="mb-3">  
            
                              <Input type="text" placeholder="Durumu" name="Durumu" id="Durumu" value={daire.Durumu} onChange={ onChange }/>  
                            </InputGroup> 
                            
                             <Label for='Tipi' >
                                Tipi:
                            </Label>
                            <InputGroup className="mb-3"> 

                              <Input type="text" placeholder="Tipi" name="Tipi" id="Tipi"  value={daire.Tipi} onChange={ onChange }  />  
                            </InputGroup>  

                            <Label for='Kat' >
                                Kat:
                            </Label>
                            <InputGroup className="mb-4">  
            
                              <Input type="text" placeholder="Kat" name="Kat" id="Kat" value={daire.Kat} onChange={ onChange }  />  
                            </InputGroup>  

                            <Label for='DaireNo' >
                                DaireNo:
                            </Label>
                            <InputGroup className="mb-4">  
            
                              <Input type="text" placeholder="DaireNo" name="DaireNo" id="DaireNo" value={daire.DaireNo} onChange={ onChange } />  
                            </InputGroup> 
                            <Label for='UserId' >
                                UserId:
                            </Label>  
                            <InputGroup className="mb-4">  
            
                              <Input type="text" placeholder="UserId" name="UserId" id="UserId" value={daire.UserId} onChange={ onChange } />  
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
  
export default EditDaire; 