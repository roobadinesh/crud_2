import React, { Component } from 'react'
import {Input,Radio,Button,Card,Form} from 'antd';
const plainOptions = ['Male', 'Female'];
export class Form1 extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',age:'',phoneno:'',gender:'',address:''
        }
        
    }

    formsubmit=()=>{
        // console.log(this.state.name,"name")
        console.log('sdcjdghchs')
        localStorage.setItem('Name', this.state.name);
        localStorage.setItem('Age', this.state.age);
        localStorage.setItem('gender', this.state.gender);
        localStorage.setItem('phone No', this.state.phoneno);
        localStorage.setItem('Address', this.state.address); 
        
    } 
  
    getdetails=()=>{
        console.log('uwgsdudvs')
        console.log(localStorage.getItem('Name'));
        console.log(localStorage.getItem('Age'));
        console.log(localStorage.getItem('gender'));
        console.log(localStorage.getItem('phone No'));
        console.log(localStorage.getItem('Address')); 
    }
    handlevalue(e){
        // this.setState({name:e.target.value}

        this.setState({[e.target.name]:e.target.value})
        console.log(this.state.name,"sinker")
        console.log(this.state.age,"2")
        console.log(this.state.phoneno,"3")
        console.log(this.state.gender,"4")

    }

    render() {
        return (
            <Card
     
    
       style={{
       width:'auto',backgroundColor:'#f9f9f9' }}> 
            <div >
            <Form>
            Name : <Input type="text" value={this.state.name}name="name"onChange ={this.handlevalue.bind(this)}/><p></p> 
             Age : <Input name="age" value={this.state.age } onChange ={this.handlevalue.bind(this)}/> <p></p>
              Gender : <Radio.Group options={plainOptions} name="gender"onChange ={this.handlevalue.bind(this)}/><p></p>
               Phone No : <Input pattern="{0-9}{10}" name="phoneno" max={10} onChange ={this.handlevalue.bind(this)}/> <p></p>
                Address : <Input name="address" value={this.state.address} onChange={this.handlevalue.bind(this)}/> <p></p>
        
           <div style =
           
           {{ textAlign: 'center'}}>
                   
          <Button type="Save" onClick={this.formsubmit}>Save</Button> <Button type="Cancel">Cancel</Button> 
          <br/> <Button type="Save" onClick={this.getdetails}>Get details</Button>
          
          </div>   
          </Form> 
         </div> 
         
         </Card >
        )
    }
}

export default Form1
