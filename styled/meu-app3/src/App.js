import React, {Component} from 'react';
import 'primereact/resources/primereact.min.css';
import './App.css';
import Header from './components/header';
import Footer from './component/footer';
import {Menubar} from 'primereact/menubar'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const DivMain=styled.h1`
color:black;
font-size10px;
`;

class App extends Component {
  render() {
    const menuitems = [
      {
        label:'Home',
        comand:() => this.props.history.push('/')
      },
      {
        label:'Sobre',
        command:() => this.props.history.push('/sobre')
      },
      {
        label:'Contato',
        command:() => this.props.history.push('/contato')
      } 
    ];
    return (
      <div className="App">
        <Menubar model={menuitems}/>
        <Headers/>
        <DivMain>
          <main>
            <div className="content" id="content">
                  {this.props.children}
            </div>
          </main>
        </DivMain>
        <Footer/>
      </div>
    );
  }
}

export default whithRouter(App);