import React from 'react';
import {Card,Input,Radio,Button,Row,Col} from 'antd';

function Header()

{

  return(
     <div >
  
  <Row className="mainStyle">
  <Col lg={{span:8,offset: 8}} sm={{span:16,offset: 2}} md={{span:12,offset: 6}}>

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

        Name : <Input placeholder=" "/><p></p> 
         Age : <Input placeholder=" "/> <p></p>
          Gender : <Radio value={1}>Male</Radio> <Radio value={2}>Female</Radio> <p></p>
           Phone No : <Input pattern="{0-9}{10}"  max={10}/> <p></p>
            Address : <Input placeholder=" "/> <p></p>
    
       <div style =
       
       {{ textAlign: 'center'}}>
               
      <Button type="Save">Save</Button> <Button type="Cancel">Cancel</Button> 
      </div>    
     </div>     
    </Card>    
   </div>
   </Col>
    </Row>
   
  </div>  
 )
}

 const headerStyle={
  background: '#9900EF',
  color: '#FFFFFF',
  textAlign:'center',
  padding: '2px'
 }  

 
 
export default Header;
  