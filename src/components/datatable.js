import React, {Component} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'
import './datatable.css';

export default class datatable extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  columns = [
    {
      name: 'Cod. Interno',
      selector: 'codinterno',
      sortable: true,
    },
    {
      name: 'Nome',
      selector: 'nome',
      sortable: true,
    },
    {
      name: 'Descricao',
      selector: 'descricao',
      sortable: true,
    },
    {
      name: 'Medida',
      selector: 'medida',
      sortable: true,
    },
    {
      name: 'Peso',
      selector: 'peso',
      sortable: true,
    },
    {
      name: 'Cod. Barras',
      selector: 'codbarras',
      sortable: true,
    },
    {
      name: 'Categoria',
      selector: 'categoria',
      sortable: true,
    },
    {
      name: 'Valor',
      selector: 'valor',
      sortable: true,
    },
    {
      name: 'Data Aquisição',
      selector: 'dtaquisicao',
      sortable: true,
    },
    {
      name: 'Imagem',
      selector: 'imgprod',
      sortable: true,
      cell: row => <img height="40px" width="40px" alt={row.nome} src={row.imgprod} />,
    }
  ];

  componentDidMount() {
    this.getCustomerData();
  }

  getCustomerData() {
    axios.get('assets/samplejson/produtos.json').then(response => {
      this.setState({itensList: response.data})
    })
  };

  render() {
    if (!this.state.itensList)
      return (<p>Loading Itens</p>)
    return (
      <DataTable        
        columns={this.columns}
        data={this.state.itensList}
        pagination
      />
    )
  }
};