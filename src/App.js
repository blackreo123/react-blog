/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['b', 'c', 'a']);
  let [hit, setHit] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [s_title, setS_title] = useState();
  let [inputData, setInputData] = useState('');

  const inputTitle = () =>{
    //deep copy
    let tmpArr = [...title];
    tmpArr.unshift(inputData);
    setTitle(tmpArr);

    tmpArr = [...hit];
    tmpArr.unshift(0);
    setHit(tmpArr);
  }

  const changeModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  const changeHit = (e) => {
    let index = e.target.getAttribute('indexkey'); 
    let tmpArr = [...hit];
    tmpArr[index] += 1;
    setHit(tmpArr); 
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        title.map((item, index) => {
          return (
            <div className="list" key={index}>
              <h3 onClick={()=>{setS_title(index)}}>{item}<span onClick={changeHit} indexkey={index}>👍</span> {hit[index]} </h3>
              <p>발행 일</p>
              <hr />
            </div>
          )
        })
      }
      
      <div className="publish">
        <input onChange={(e)=>{setInputData(e.target.value)}}></input>
        <button onClick={inputTitle}>저장</button>
      </div>
      
      <button onClick={changeModal}>모달 보이고 안 보이고</button>
      {
        //삼항연산자
        modal === true
          ? <Modal title={title} s_title={s_title}></Modal>
          // 텅빙 html이라는 뜻
          : null
      }
    <Profile></Profile>
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>{props.title[props.s_title]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

//예전 문법
class Profile extends React.Component{
  constructor(){
    super();
    this.state = {name : 'yoon'}
  }
  changeName(){
    this.setState({name : 'jiha'})
  }
  render(){
    return(
      <div>
        <h3>프로필 입니당</h3>
        <p>저는 {this.state.name}입니다</p>
        <button onClick={this.changeName.bind(this)}>버튼</button>
      </div>
    )
  }
}

export default App;
