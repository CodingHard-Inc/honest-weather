import React from 'react'
import SearchCity from './searchCity'

class City extends React.Component {

  handleSubmit() {
    var newCity = this.newCity.value
    this.newCity.value = ''
    this.props.changeCity(newCity)
  }

  setRef(ref) {
    this.newCity = ref
  }

  render(){
    return (
      <div>
        <h1 className="city">{this.props.city}</h1>
          <input className="searchText" type="text" ref={this.setRef.bind(this)} />
          <button type="submit" onClick={this.handleSubmit.bind(this)}>asd</button>
        {/*<SearchCity/>*/}
      </div>
    )
  }
}

export default City