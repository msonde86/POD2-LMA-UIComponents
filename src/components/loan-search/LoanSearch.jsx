import React from 'react'
import './LoanSearch.css'
import { Row, Form, Col, Button, Alert, Table } from 'react-bootstrap'


const LoanSearch = props => {
    return (<Row>

        <Col xs={12}>
            <form>
                <Row className="pt-4 p-3">
                    <Col md={4}><Form.Group controlId="formLoanNumber">
                        <Form.Label>Borrower Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Borrower Full Name" />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formLoanNumber">
                            <Form.Label>Loan Number</Form.Label>
                            <Form.Control type="number" placeholder="Enter loan number" />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group controlId="formLoanAmmount">
                            <Form.Label>Loan Ammount</Form.Label>
                            <Form.Control type="number" placeholder="Enter loan ammount" />
                        </Form.Group>
                    </Col>
                    <Col xs={12} className="justify-content-center d-flex">
                        <Button>Search Loan</Button>
                    </Col>
                </Row>
            </form>
        </Col>

        <Col xs={12}>
            <Alert variant="danger" className="text-center"> No Results Found!</Alert>
        </Col>

        <Col xs={12}>
            <Alert variant="warning" className="text-center">Please Narrow Down Your Search!</Alert>
        </Col>
        <Col xs={12}>
            <Alert variant="success" className="text-center">Loan Found!</Alert>
        </Col>

        <Col xs={12}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Borrower Name</th>
                        <th>Loan Number</th>
                        <th>Loan Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>6545</td>
                        <td>54654</td>
                    </tr>
                </tbody>
            </Table>
        </Col>

    </Row>)
}

export default LoanSearch