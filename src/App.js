import React, {Component} from "react";
import Welcome from './components/Welcome';
import DataJ from './components/info.json'
import Img0 from './images/download.png'
import './components/style.css'
import Img1 from  './images/download (1).png'
import Img2 from  './images/download(2).png'
import Img3 from  './images/download(3).png'
import Img4 from  './images/download(4).jpg'
import Img5 from  './images/download(5).png'
class App extends Component {
  render(){
    return (
    <div className="wrapper">  
    <div className="TCS">
        <div className="name">
        <Welcome name={DataJ[0]["Company Name"]} /></div>
        <div className="services">
        <Welcome services={DataJ[0]["Offers"].map(val=>{return<h1>{val}</h1>})} /></div>
        <img src={Img0} className="logo" />
    </div>   
    <div className="TCS">
        <div className="name">
        <Welcome name={DataJ[1]["Company Name"]} /></div>
        <div className="services">
        <Welcome services={DataJ[1]["Offers"].map(val=>{return<h1>{val}</h1>})} /></div>
        <img src={Img1} className="logo"/>    
    </div> 
    <div className="TCS">
    <div className="name">
        <Welcome name={DataJ[2]["Company Name"]} /></div>
        <div className="services">
        <Welcome services={DataJ[2]["Offers"].map(val=>{return<h1>{val}</h1>})} /></div>
        
    <img src={Img2} className="logo" />
    </div> 
    <div className="TCS">
    <div className="name">
        <Welcome name={DataJ[3]["Company Name"]} /></div>
        <div className="services">
        <Welcome services={DataJ[3]["Offers"].map(val=>{return<h1>{val}</h1>})} /></div>
        <img src={Img3} className="logo" />
    </div> 
    <div className="TCS">
    <div className="name">
        <Welcome name={DataJ[4]["Company Name"]} /></div>
        <div className="services">
        <Welcome services={DataJ[4]["Offers"].map(val=>{return<h1>{val}</h1>})} /></div>
        <img src={Img4} className="logo" />
    </div> 
    <div className="TCS">
    <div className="name">
        <Welcome name={DataJ[5]["Company Name"]} /></div>
        <div className="services">
        <Welcome services={DataJ[5]["Offers"].map(val=>{return<h1>{val}</h1>})} /></div>
    <img src={Img5} className="logo" />
    </div> 
    </div>
    )
  }
}
export default App