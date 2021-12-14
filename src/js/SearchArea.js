import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import '../css/SearchArea.css';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import { curToken, mainLink } from './App';

export default class ContentMain extends Component {

    constructor(props) {
        super(props);
        this.state={
            dataLoaded:false,
            data: null
        }
    }

    componentDidMount() {
        this.loadQuestionData(0,10)
    }
    buildRequestBody = (startIndex,length) => {
        return JSON.stringify({
            "draw": 0,
            "start": startIndex,
            "length": length,
            "columns": [
              {
                "name": "string",
                "searchable": true,
                "orderable": true,
                "search": {
                  "value": "string",
                  "regex": true
                },
              },
            ],
            "search": {
              "value": "string",
              "regex": true
            },
            "order": [
              {
                "column": 0,
                "dir": "string"
              },
            ],
          });
    }

    loadQuestionData = async (startIndex,length) => {
        var response = await fetch(mainLink+'/Files/Table',{
            method: "POST",
            headers: {
                'Authorization': curToken.token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: this.buildRequestBody(startIndex,length)
        })
        if (response.status===200) {
            this.setState({
                dataLoaded:true,
                data: (await response.json())['data']
            })
        }
        else {
            throw Error(await response.text())
        }
    }



    render() {
        return (
            <div>
                <Navbar />
                <div className = 'col-md-12 container-table containe-fluid'>
                    <div className = "name__all-files" >
                        <b>База данных</b>
                    </div>
                    {/* {
                    (this.state.dataLoaded)
                        ? this.state.data.map(element => {
                            console.log(element)
                            return <Question question={element}/>
                        })
                        :null
                    } */}
                    <BootstrapTable trClassName='td-admin-files' height='460' hover data={this.state.data} options={ this.options } scrollTop={ 'Bottom' }>
                        <TableHeaderColumn columnClassName='responsiveColumn' isKey filter={ { type: 'TextFilter', delay: 1000 } } dataField='id' width='26%' dataSort>ID
                        </TableHeaderColumn>
                        <TableHeaderColumn columnClassName='responsiveColumn' filter={ { type: 'TextFilter', delay: 1000 } } dataField='fileName' width='37%'>Файл
                        </TableHeaderColumn>
                        <TableHeaderColumn columnClassName='responsiveColumn' filter={ { type: 'TextFilter', delay: 1000 } }  width='37%' dataField='averageAnswers'>Пользователь
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        ) 
    }
}


// class Question extends Component {
//     render() {
//         return <div>
//             <img src={'https://bfs-astorage.somee.com/api/v1.0/Files/'+this.props.question['id']} />
//         </div>
//     }
// }