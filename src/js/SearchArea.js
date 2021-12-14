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
            data: null,
            total: 0
        }
    }

    size = 0;
    pageIndex = 0;

    componentDidMount() {
        this.loadQuestionData()
    }
    buildRequestBody = (startIndex,length,text) => {
        return JSON.stringify({
            "draw": 0,
            "start": startIndex,
            "length": length,
            "columns": [
              {
                "name": "text",
                "searchable": true,
                "orderable": true,
                "search": {
                  "value": text,
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

    loadQuestionData = async () => {

        var filter = document.getElementById("text_filter")

        var text ='';

        if(filter!=null)
            text=filter.value;

        var response = await fetch(mainLink+'/Files/Table',{
            method: "POST",
            headers: {
                'Authorization': curToken.token,
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: this.buildRequestBody(this.pageIndex,10,text)
        })

        var resp = await response.json();
        if (response.status===200) {
            this.setState({
                dataLoaded:true,
                data: resp['data'],
                total: resp['recordsFiltered']
            })
        }
        else {
            throw Error(await response.text())
        }
    }

    imageFormatter(cell, row){
       // var table = document.getElementById('table');
       // var tr = table.children[row*3 + cell];
        // var id = document.getElementsByTagName('td')[(row)*3 + cell - 1];
        return '<img class="img-fluid img-thumbnail" src="https://bfs-astorage.somee.com/api/v1/Files/' + cell+ '"/>';
      }

    render() {
        return (
            <div>
                <Navbar />
                <div className = 'col-md-12 container-table containe-fluid'>
                    <div className = "name__all-files" >
                        <b>Просмотр файлов</b>
                    </div>
                    <div><h1>{parseInt(this.state.total/10 + 1)}</h1></div>
                    <div class="card text-black bg-wite">
                    <div class="form-group">
                      <label for="">Введите текст запроса  </label>
                      <input type="text" name="" class="form-control" id="text_filter" onChange={() =>{ this.pageIndex = 0; this.componentDidMount()}} style={{padding:2}}/>
                    </div>
                    {/* {
                    (this.state.dataLoaded)
                        ? this.state.data.map(element => {
                            console.log(element)
                            return <Question question={element}/>
                        })
                        :null
                    } */}
                    <BootstrapTable id="table" trClassName='table table-image' height='460' hover data={this.state.data} options={ this.options } scrollTop={ 'Bottom' }>
                        <TableHeaderColumn columnClassName='col' isKey dataField='id' data width='26%' dataSort>ID
                        </TableHeaderColumn>
                        <TableHeaderColumn columnClassName='w-25' width='37%' dataField='id' dataFormat={this.imageFormatter}>Файл
                        </TableHeaderColumn>
                        <TableHeaderColumn columnClassName='col'  width='37%' dataField='user[userName]'>Пользователь
                        </TableHeaderColumn>
                    </BootstrapTable>
                    <div class="row">
                            {
                                Array.from(Array(parseInt(this.state.total/10 + 1)).keys()).map((i)=>
                                <input type="button" onClick={()=>{this.pageIndex=i*10; this.componentDidMount()}} value={i+1}/>
                                )
                            }
                        </div>
                    </div>
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