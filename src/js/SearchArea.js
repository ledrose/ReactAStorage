import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import '../css/SearchArea.css';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

export default class ContentMain extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className = 'col-md-12 container-table containe-fluid'>
                    <div className = "name__all-files" >
                        <b>База данных</b>
                    </div>

                    <BootstrapTable trClassName='td-admin-files' height='460' hover data={this.props.data} options={ this.options } scrollTop={ 'Bottom' }>
                        <TableHeaderColumn columnClassName='responsiveColumn' isKey filter={ { type: 'TextFilter', delay: 1000 } } dataField='id' width='26%' dataSort>ID
                        </TableHeaderColumn>

                        <TableHeaderColumn columnClassName='responsiveColumn' filter={ { type: 'TextFilter', delay: 1000 } } dataField='name' width='37%'>Файл
                        </TableHeaderColumn>

                        <TableHeaderColumn columnClassName='responsiveColumn' filter={ { type: 'TextFilter', delay: 1000 } }  width='37%' dataField='whoAdd'>Пользователь
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        ) 
    }
}
