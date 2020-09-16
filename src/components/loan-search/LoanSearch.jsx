import React, { useState } from 'react'
import './LoanSearch.css'
import { Row, Form, Col, Button, Table, Alert } from 'react-bootstrap'
import axios from 'axios'

import { useForm } from 'react-hook-form'

const LoanSearch = props => {

  const fillerURl='http://localhost:8082/loan/data/filter'
    const [data,setData]=useState([])
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState(false)
    const [inputLength, setInputLength] = useState(0);
    const [notFound, setNotFound] = useState(false)
    const [narrowDown, setNarrowDown] = useState(false)

    const validate = () => {
        let length = 0
        let err = false

        let borrower = document.getElementById("borrower-input").value
        let loan = document.getElementById("loan-input").value
        let ammount = document.getElementById("ammount-input").value

        length += borrower.toString().trim().length
        length += loan.toString().trim().length
        length += ammount.toString().trim().length

        if (length > 0) {
            if (loan.toString().trim().length > 0) {
                if (loan < 0)
                    err = true

            }
            if (ammount.toString().trim().length > 0) {
                if (ammount < 0)
                    err = true
            }
        }
        setError(err)
        setInputLength(length)
    }

    const onSubmit = data => {
        console.log(data)
         let param={};

       if( data.borrower.length>0){
           param['borrower']=data.borrower
       }if( data.loan>0 ){
        param['number']=data.loan
       }if(data.amount>0){
        param['amount']=data.ammount
       }
           
        if (!data.borrower.trim() && !data.loan <= 0 && !data.amount <= 0) {
            setError(true)
        
            return
        } else {
                              
                axios.get(fillerURl,{params:param})
                .then( (response)=> {
                                  console.log(response.data);
                                  setData(response.data)
                                  setNarrowDown(false)
                                  setError(false)
                                  if(data.length>0)
                                  {
                                      setNarrowDown(true)
                                  }
                                 setNotFound(false)
        
                                 
  
                }, [setData])
                .catch((error)=> {
                  console.log(error);
                  setData([])
                  setNarrowDown(false)
                  setNotFound(true)
                });   
            
            console.log(!data.borrower.trim(), !data.loan <= 0, !data.ammount <= 0)
        }

    }

    return (<Row data-testid="loan-search">

        <Col xs={12}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="p-3">
                    <Col md={4}><Form.Group className="search-formgroup">
                        <Form.Label>Borrower Full Name</Form.Label>
                        <Form.Control data-testid="borrower-input" id="borrower-input" name="borrower" ref={register()} type="text" placeholder="Enter Borrower Full Name"
                            onInput={validate} />
                    </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="search-formgroup">
                            <Form.Label>Loan Number</Form.Label>
                            <Form.Control data-testid="loan-input" id="loan-input" name="loan" ref={register()} type="number" placeholder="Enter loan number"
                                min={0} onInput={validate} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="search-formgroup">
                            <Form.Label>Loan Ammount</Form.Label>
                            <Form.Control data-testid="ammount-input" id="ammount-input" name="ammount" ref={register()} type="number" placeholder="Enter loan ammount"
                                min={0} onInput={validate}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={12} className="pt-3 justify-content-center d-flex">
                        <Button data-testid="search-button" type="submit" disabled={inputLength <= 0 || error}>Search Loan</Button>
                    </Col>
                </Row>
            </form>
        </Col>

        <Col xs={12} className="search-results">
            <Alert variant="warning" show={notFound} className="text-center"> No Results Found!</Alert>
        </Col>
        <Col xs={12} className="search-results">
            <Alert variant="warning" show={narrowDown} className="text-center"> Please Narrow Down Your Search </Alert>
        </Col>
        
        <Col xs={12} className="search-results">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Loan Number</th>
                        <th>Borrower Name</th>
                        <th>Loan Amount</th>
                    </tr>
                </thead>
                <tbody>
                {
                    
                    data.map(  obj => 
                             
                               { return (<tr key = {obj.loanNumber}>
                                  <td> {obj.loanNumber}</td> 
                                 <td> {obj.borrowerName}</td>   

                                 <td> {obj.loanAmount}</td>   
                                
                            </tr>)}
                        )

                    } 
                </tbody>
            </Table>
        </Col>

    </Row>)
}

export default LoanSearch

