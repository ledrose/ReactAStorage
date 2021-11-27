import React, {Component} from 'react';
import '../css/adminFiles.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';


export default class AdminFiles extends Component {

    render() {
      return (
        <div className = 'container-table'>
            <div className = "name__all-files" >
                <b>Все файлы</b>
            </div>
          <BootstrapTable classname = 'table-responsive' trClassName='td-admin-files' height='450' hover data={this.props.data} options={ this.options } scrollTop={ 'Bottom' }>
            <TableHeaderColumn isKey filter={ { type: 'TextFilter', delay: 1000 } } dataField='id' width='10%'>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn dataField='img' width='10%'>
              Файл
            </TableHeaderColumn>
            <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } width='34%' dataField='whenAdd'>
              Дата добавления
            </TableHeaderColumn>
            <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } }  width='34%' dataField='whoAdd'>
              Пользователь
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }


  /*constructor(props) {
        super(props);
    
        this.options = {
          defaultSortName: 'name',  // default sort column name
          defaultSortOrder: 'desc'  // default sort order
        };
      }
*/