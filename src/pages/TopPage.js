import React, { useEffect, useContext, useState } from 'react';
// import { fetchGetData } from '../apis/index';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Store } from '../store/index';
import { GET_DATA } from '../actions/index';
import { Table, Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopPage = () => {
  const [qiita, setQiita] = useState([]);
  const { globalState, setGlobalState } = useContext(Store);

  useEffect(() => {
    Axios.get('https://qiita.com/api/v2/items')
      .then((res) => {
        setQiita(res.data)
        setGlobalState({
          type: GET_DATA,
          data: res.data
        });
      });
  }, []);
  console.log(globalState, '---------')

  return (
    <div>
      <div>
        <h1>TopPage</h1>
        <Link to='secondpage'>SecondPageへ移動</Link>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Qiita</th>
            <th>タイトル一覧</th>
          </tr>
        </thead>
        <tbody>
          {qiita.map((element, index) => {
            return (
              <tr key={index}>
                <td>{element.created_at}</td>
                <td>{element.title} <br /><Accordion.Toggle as={Button} variant="link" eventKey="1">{element.url}</Accordion.Toggle></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TopPage;
