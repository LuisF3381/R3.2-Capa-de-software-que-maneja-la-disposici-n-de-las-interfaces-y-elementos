import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Image, ListGroup, Modal, Button, Form} from 'react-bootstrap';
import BankComponent from '../components/generals/upVar';


function MenuATM() {

    return (
        <Container fluid className="vh-100 d-flex justify-content-center align-items-center" style={{ background: '#f7f7f7' }}>
            <Card style={{ width: 800, height: 550, background: 'white' }} className="p-1">
                <Container>
                <BankComponent/>
                <div>CACHUDA EL QUE LEE</div>

                </Container>
            </Card>
        </Container>

        );
    }
    
    export default MenuATM;