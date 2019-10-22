import React, {Component} from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table } from "antd";
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class Table1  extends Component{
  constructor(props) {
    super(props);
    this.state = {business: []};
  }
  componentDidMount(){
    axios.get('http://localhost:4000/business')
      .then(response => {
        this.setState({ business: response.data });
        console.log(this.state.business)
      })
      .catch(function (error) {
        console.log(error);
      })
  }


    render(){
  
    
      
      // console.log(localStorage.getItem('Name'));
      // let name = localStorage.getItem('name')
      // let age = localStorage.getItem('age')
      // let gender = localStorage.getItem('gender')
      // let mobile = localStorage.getItem('phoneNo')
      // let address = localStorage.getItem('address')


 
      // console.log(Name,"name1")
const columns = [
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Age",
      dataIndex: "age"
    },
    {
      title: "Gender",
      dataIndex: "gender"
    },
    {
      title: "Mobile ",
      dataIndex: "mobile_no"
    },
    {
      title: "Address",
      dataIndex: "address"
    },
    {
        title: 'Action',
        dataIndex: '_id',
        render: (i) =>      
               <Link to={"/edit/"+this.state.business.i._id} className="btn btn-primary">Edit</Link>
        ,
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Delete</a>,
      },
  ];
//   const data = [
//     {
//       key: "1",
//       name: name,
//       age: age,
//       gender: gender,
//       mobile: mobile,
//       address: address 
//     }
//   ];


  
  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: record => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name
    })
  };



        return(
            <div>
            <Table rowSelection={rowSelection} 
            columns={columns}
            dataSource={this.state.business}
            scroll={{ x: true, }} />,
            </div>
        )}

}

