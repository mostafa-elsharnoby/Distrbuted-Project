import React from 'react';
import { Layout } from '../../components/Layout';
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import { Input } from '../../components/UI/Input';
import { login } from "../../actions";
import { useDispatch } from "react-redux";
/**
* @author
* @function Signin
**/

export const Signin = (props) => {

    const dispatch = useDispatch();

    const userLogin = (e) => {

        e.preventDefault();

        const user ={
            email: 'mostafaelsharnobi@gmail.com',
            passwrod: '123456'
        }
        dispatch(login(user));
    }

  return(
    <Layout>
        <Container>
            <Row style = {{ marginTop: '50px' }}>
                <Col md={{span:6, offset:3}}>
                    <Form onSubmit={ userLogin }>
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