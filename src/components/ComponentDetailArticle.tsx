import { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const ComponentDetailArticle = () => {
  const [singleArticle, setSingleArticle] = useState<ISingleArticle[]>();

  const fetchSingleArticle = async () => {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/22591"
      );
      if (response.ok) {
        const singleResponse = await response.json();
        console.log(singleResponse);
        setSingleArticle(singleResponse);
      }
    } catch (error) {
      console.log("Errore nella chiamata");
    }
  };
  useEffect(() => {
    fetchSingleArticle();
  });
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{singleArticle.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ComponentDetailArticle;
