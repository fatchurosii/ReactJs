import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

const Formulir = () => {
  return (
    <div className= "mt-5">
      <Row>
        <Col>
          <h4>Tambah Data</h4>
          <Form>
            <Form.Group controlId="namaMakanan">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" placeholder="Nama Makanan" />
            </Form.Group>

            <Form.Group controlId="Harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" placeholder="Harga" />
            </Form.Group>
            <Form.Group controlId="Deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
