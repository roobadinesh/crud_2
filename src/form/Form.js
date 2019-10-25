import React, { Component } from 'react';
import {Card,Input,Radio,Button,Row,Col,Form} from 'antd';
import axios from 'axios';

const plainOptions = ['Male', 'Female'];
export default class Formx extends Component{ 
  constructor(props){ super(props)
  this.state={ name:'',age:'',mobile_no:'',gender:'',address:''}
  
}
// formsubmit=()=>{
//   // console.log(this.state.name,"name")
//   console.log('sdcjdghchs')
//   localStorage.setItem('name', this.state.name);
//   localStorage.setItem('age', this.state.age); 
//   localStorage.setItem('gender', this.state.gender);
//   localStorage.setItem('phoneNo', this.state.phoneno);
//   localStorage.setItem('address', this.state.address); 
  
// } 
  
onSubmit =async(e)=> {
  if(this.props.isedit == true){
    const obj = {
      name: this.state.name,
      age: this.state.age,
     gender:this.state.gender,
     mobile_no:this.state.mobile_no,
     address:this.state.address
    };
    
    axios.put('http://localhost:4000/business/update/'+this.props.item.id,{obj:obj})
    .then(console.log('Edited'))
    .catch(err => console.log(err))
    this.setState({
      name: '',
     age: '',
      gender: '',
      mobile_no:'',
      address:''
    })
  }
  else{
  e.preventDefault();
  const obj = {
    name: this.state.name,
    age: this.state.age,
   gender:this.state.gender,
   mobile_no:this.state.mobile_no,
   address:this.state.address
  };
  console.log(obj,"form data")
 await axios.post('http://192.168.29.199:4000/business/add', {obj:obj})
      .then(res => console.log(res.data,'res.data'));
      window.location.reload()
  this.setState({
    name: '',
   age: '',
    gender: '',
    mobile_no:'',
    address:''
  })
}
}
async componentDidMount(){
  console.log(this.props.item,"itemsentby props")
  await this.setState({name:this.props.item.name, age:this.props.item.age, gender:this.props.item.gender, mobile_no:this.props.item.mobile_no,address:this.props.item.address})

}
getdetails=()=>{
  console.log('uwgsdudvs')
  console.log(localStorage.getItem('name'));
  console.log(localStorage.getItem('age'));
  console.log(localStorage.getItem('gender'));
  console.log(localStorage.getItem('phoneNo'));
  console.log(localStorage.getItem('address')); 
}
handlevalue(e){
  // this.setState({name:e.target.value}

  this.setState({[e.target.name]:e.target.value})
  console.log(this.state.name,"sinker")
  console.log(this.state.age,"2")
  console.log(this.state.mobile_no,"3")
  console.log(this.state.gender,"4")
  
}
handleCancel = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};

  render()

{

  return(
     <div >
  
  <Row className="mainStyle">
  {/* <Col lg={{span:8,offset: 8}} sm={{span:16,offset: 2}} md={{span:12,offset: 6}}> */}

    <br/>
      <header style = {headerStyle}>
    <h1 style={{ 
      color: '#FFFFFF'
    }}>Contact form</h1>
   
  </header><div >
  <Card
     
    
       style={{
       width:'auto',backgroundColor:'#f9f9f9' }}>       
       
<br/>

   <div >

            Name : <Input type="text" value={this.state.name}name="name"onChange ={this.handlevalue.bind(this)}/><p></p> 
             Age : <Input name="age" value={this.state.age } onChange ={this.handlevalue.bind(this)}/> <p></p>
              Gender : <Radio.Group value={this.state.gender } options={plainOptions} name="gender"onChange ={this.handlevalue.bind(this)}/><p></p>
               Phone No : <Input value={this.state.mobile_no} pattern="{0-9}{10}" name="mobile_no" max={10} onChange ={this.handlevalue.bind(this)}/> <p></p>
                Address : <Input name="address" value={this.state.address} onChange={this.handlevalue.bind(this)}/> <p></p>
        
       <div style =
       
       {{ textAlign: 'center'}}>
             
               <Button type="Save" onClick={this.onSubmit}>Save</Button> <Button type="Cancel" onClick={this.handleCancel} >Cancel</Button> 
          {/* <br/> <Button type="Save" onClick={this.getdetails}>Get details</Button> */}
                </div>    
     </div>     
    </Card>    
   </div>
   {/* </Col> */}
    </Row>
   
  </div>  
 )
       }
      }     
 const headerStyle={
  background: '#9900EF',
  color: '#FFFFFF',
  textAlign:'center',
  padding: '2px'
 }
