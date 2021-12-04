import React from 'react'
import { Layout } from '../../components/Layout';
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import { Input } from '../../components/UI/Input';
/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  return(
    <Layout>
        <Container>
            <Row style = {{ marginTop: '50px' }}>
                <Col md={{span:6, offset:3}}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Input
                                    label="First Name"
                                    placeholder="First Name"
                                    value=""
                                    type="text"
                                    onChang={() => {}}
                                />
                            </Col>
                            <Col md={6}>
                            <Input
                                    label="Last Name"
                                    placeholder="Last Name"
                                    value=""
                                    type="text"
                                    onChang={() => {}}
                                />
                            </Col>
                        </Row>

                        
                        <Input
                            label="Email"
                            placeholder="Email"
                            value=""
                            type="email"
                            errorMessage="We'll never share your email with anyone else."
                            onChang={() => {}}
                        />
                        <Input
                            label="Pssword"
                            placeholder="Password"
                            value=""
                            type="password"
                            onChang={() => {}}
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        
        </Container>
    </Layout>
   )

 }