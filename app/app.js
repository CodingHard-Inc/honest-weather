import React from 'react'
import ReactDOM from 'react-dom'
import Temperature from './components/temperature'
import Description from './components/description'
import handleDesc from './handledesc'
import style from './style.less'

import storeWeatherInfo from './store'

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
    storeWeatherInfo(city);
    this.setState({
      temp: localStorage.getItem('temp'),
      desc: handleDesc(localStorage.getItem('descID'))
    });
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