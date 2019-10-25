import React, {Component} from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    // minWidth: 650,
    width: '100%',

    overflowX: 'auto',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]
const classes = useStyles;

export class Tablex  extends React.Component{
    constructor(props) {
    super(props);
    this.state={
      business:[]
    }
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
    edit(p) {
     
          
      console.log(p.name)
      // let {name}= this.state.business
      // console.log("nameintablex",name)
      let isedit=true
          this.props.dummy(p.name,p.age,p.gender,p.mobile_no,p.address,isedit,p._id)
  }
  
    delete(p) {
      console.log(p)
      axios.delete('http://localhost:4000/business/delete/'+p)
          .then(console.log('Deleted'))
          .catch(err => console.log(err))
          window.location.reload()
  }
  
  
render(){

  return(
    
       <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.business.map((row) =>{return (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.mobile_no}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.edit} <button type="submit" onClick={e => this.edit(row)} >Edit</button> </TableCell>
              <TableCell align="right"><button type="submit" onClick={e=>this.delete(row._id)} >Delete</button></TableCell>        
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </Paper>
    
  )
}

}

export default Tablex;

