import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addJobToPreferred,
  ADD_PREFERRED_COMPANY,
  removeJobToPreferred,
  REMOVE_PREFERRED_COMPANY,
} from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button
          className="btn-primary my-2"
          onClick={() => dispatch(addJobToPreferred(data))}
        >
          Aggiungi a preferiti
        </Button>
        <Button
          className="btn-danger my-2"
          onClick={() => dispatch(removeJobToPreferred(data))}
        >
          Rimuovi dai preferiti
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
