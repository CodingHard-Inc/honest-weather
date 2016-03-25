import React from 'react'

class SearchCity extends React.Component {

  handleSubmit(e) {
    if(e.keyCode==13){
      var newCity = this.newCity.value
      this.newCity.value = ''
      this.props.changeCity(newCity)
      document.getElementById('changeCityModal').className = "close"
    }
  }

  handleClose(){
    document.getElementById('changeCityModal').className = "close"
  }

  setRef(ref) {
    this.newCity = ref
  }

  render(){
    return (
        <div id="changeCityModal" className="close">
          <div className="inModal">
            <h1 className="close" onClick={this.handleClose.bind(this)}>Close</h1>
            <h5 className="title">Search a city</h5>

            <input
              className="searchText"
              type="text"
              ref={this.setRef.bind(this)}
              onKeyDown={this.handleSubmit.bind(this)}
               />

            {/*<button type="submit" onClick={this.handleSubmit.bind(this)}>asd</button>*/}
          </div>
          <div className="emptySpace" onClick={this.handleClose.bind(this)}></div>
        </div>
    )
  }
}

export default SearchCity