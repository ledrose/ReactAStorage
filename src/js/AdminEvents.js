import React from 'react';
import '../css/adminFiles.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';


export default class AdminUsers extends React.Component {

  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'idUser',  // default sort column name
      defaultSortOrder: 'desc'  // default sort order
    };
  }
    render() {
      return (
        <div className = 'col-md-12 container-table containe-fluid'>
            <div className = "name__all-files" >
                <b>События</b>
            </div>
          <BootstrapTable trClassName='td-admin-files' height='460' hover data={this.props.data} options={ this.options } scrollTop={ 'Bottom' }>
            <TableHeaderColumn columnClassName='responsiveColumn' isKey filter={ { type: 'TextFilter', delay: 1000 } } dataField='idUser' width='26%' dataSort>
              ID
            </TableHeaderColumn>
            <TableHeaderColumn columnClassName='responsiveColumn' filter={ { type: 'TextFilter', delay: 1000 } } dataField='nameUser' width='37%'>
              Событие
            </TableHeaderColumn>
            <TableHeaderColumn columnClassName='responsiveColumn' filter={ { type: 'TextFilter', delay: 1000 } }  width='37%' dataField='roleUser'>
            Имя пользователя
            </TableHeaderColumn>
          </BootstrapTable>
        </div>
      );
    }
  }


  /*
  <TableHeaderColumn filter={ { type: 'TextFilter', delay: 1000 } } width='34%' dataField='whenAdd'>
              Дата добавления
            </TableHeaderColumn>
            constructor(props) {
        super(props);
    
        this.options = {
          defaultSortName: 'name',  // default sort column name
          defaultSortOrder: 'desc'  // default sort order
        };
      }
*/