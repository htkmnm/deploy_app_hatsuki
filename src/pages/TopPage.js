import React, { useEffect, useContext, useState } from 'react';
// import { fetchGetData } from '../apis/index';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';
import { Store } from '../store/index';
import { GET_DATA } from '../actions/index';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondPage from './SecondPage';

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
        <Route path="/helloworld/hello"></Route>
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
                <td>{index + 1}</td>
                <td>{element.title} <br /><a href={element.url}>{element.url}</a></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div >
  );
};

export default TopPage;
