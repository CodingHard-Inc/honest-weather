import React from 'react'
import SearchCity from './searchCity'
import iSearch from '../static/i_search.png'

class City extends React.Component {
  // handleSubmit() {
  //   var newCity = this.newCity.value
  //   this.newCity.value = ''
  //   this.props.changeCity(newCity)
  // }

  // setRef(ref) {
  //   this.newCity = ref
  // }

  handleModal(){
    document.getElementById('changeCityModal').className = "active";
  }

  render(){
    return (
      <div>
        <h1 className="city" onClick={this.handleModal.bind(this)}>
	  {this.props.city}
          <img className="search-icon" src={iSearch}/>
	</h1>
        <SearchCity changeCity={this.props.changeCity}/>
      </div>
    )
  }
}

export default City
