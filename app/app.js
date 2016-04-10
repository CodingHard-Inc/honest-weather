import React from 'react'
import ReactDOM from 'react-dom'
import City from './components/city'
import Temperature from './components/temperature'
import Description from './components/description'
import handleDesc from './handledesc'
import style from './style.less'
import logo from './static/codinghard-logo.png'

import storeWeatherInfo from './store'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: 'london',
      temp: null,
      desc: '',
      unit: '°C'
    }
  }

  componentDidMount(){
    this.init(this.state.city);
  }

  componentWillUnmount(){

  }

  init (city) {
    var a = this; // kontrol et.. dogru yapilan yolunu bul!
    storeWeatherInfo(city, function (){
      a.setState({
      city: city,
      temp: localStorage.getItem('temp'),
      desc: handleDesc(localStorage.getItem('descID'))
    })});
    this.setState({
      city: city,
      temp: localStorage.getItem('temp'),
      desc: handleDesc(localStorage.getItem('descID'))
    });
  }


  changeCity(newCity) {
    this.init(newCity)
  }

  cityChanged(){
    this.setState({
      city: city,
      temp: localStorage.getItem('temp'),
      desc: handleDesc(localStorage.getItem('descID'))
    });
  }
  render(){
    console.log('rendered')
    return (
      <div>
        <div className="container">
          <div className="left-side">
            <City city={this.state.city} changeCity={this.changeCity.bind(this)}/>
            <Description desc={this.state.desc} />
          </div>
          <div className="right-side">
            <Temperature temp={this.state.temp} unit={this.state.unit}/>
          </div>
        </div>
          <div className="footer">
            <a href="https://codinghard.com"><img src={logo}/></a>
          </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)