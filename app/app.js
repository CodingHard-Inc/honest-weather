import React from 'react'
import ReactDOM from 'react-dom'
import getWeatherInfo from './weatherApi'
import Temperature from './components/temperature'
import Description from './components/description'
import handleDesc from './handledesc'
import style from './style.less'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      city: 'nicosia',
      temp: null,
      desc: '',
      unit: '°C'
    }
  }

  componentWillMount(){
    this.init(this.state.city);
  }

  init (city) {
    getWeatherInfo(city)
      .then(function (res) {
        console.log(res.data.base);
        this.setState({
          temp: res.data.main.temp,
          desc: handleDesc(res.data.weather[0].id)
        });
      }.bind(this));
  }


  render(){
    console.log('rendered')
    return (
      <div className="container">

        <div className="left-side">
          <h1 className="city">{this.state.city}</h1>
          <Description desc={this.state.desc} />
        </div>

        <div className="right-side">
          <Temperature temp={this.state.temp} unit={this.state.unit}/>
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)