import React, {Component}from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Modal, Button ,Card,Input,Radio,Row,Col,Table} from 'antd';
import Table1 from './Table';
import Formx from './Form'
const { Header, Content, Footer, } = Layout;

export default class Layout1  extends Component{
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true, 
    });
  }; 

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render(){
    return(
      <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}> 
      
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
<div style={{textAlign:'right' }}>
        <Button type="primary" onClick={this.showModal}>
          Add New
        </Button>
        </div>
        <Modal
          title="Basic Details"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        
        >
          
  
    <br/>
  <div >
  <Card
     
    
       style={{
       width:'auto',backgroundColor:'#f9f9f9' }}>       
       
<br/>
<Formx />    
    </Card>    
   </div>

        </Modal>
      
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

        <Table1 />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
    )
  }
} 

const headerStyle={
  background: '#9900EF',
  color: '#FFFFFF',
  textAlign:'center',
  padding: '2px'
 } 
