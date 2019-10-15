import React, { Component } from 'react';
import {Card,Input,Radio,Button,Row,Col,Form} from 'antd';
const plainOptions = ['Male', 'Female'];
export default class Formx extends Component{ 
  constructor(props){ super(props)
  this.state={ name:'',age:'',phoneno:'',gender:'',address:''}
  
}
formsubmit=()=>{
  // console.log(this.state.name,"name")
  console.log('sdcjdghchs')
  localStorage.setItem('name', this.state.name);
  localStorage.setItem('age', this.state.age);
  localStorage.setItem('gender', this.state.gender);
  localStorage.setItem('phoneNo', this.state.phoneno);
  localStorage.setItem('address', this.state.address); 
  
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
  console.log(this.state.phoneno,"3")
  console.log(this.state.gender,"4")

}

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
              Gender : <Radio.Group options={plainOptions} name="gender"onChange ={this.handlevalue.bind(this)}/><p></p>
               Phone No : <Input pattern="{0-9}{10}" name="phoneno" max={10} onChange ={this.handlevalue.bind(this)}/> <p></p>
                Address : <Input name="address" value={this.state.address} onChange={this.handlevalue.bind(this)}/> <p></p>
        
       <div style =
       
       {{ textAlign: 'center'}}>
             
               <Button type="Save" onClick={this.formsubmit}>Save</Button> <Button type="Cancel">Cancel</Button> 
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
