import React from 'react'

class Modal extends React.Component {
  componentDidMount(){
    //this.refs.autofocus.getDOMNode().focus();
    //document.getElementsByClassName('searchText').focus();
  }

  isOpen(){
    if (this.props.isOpen){
      document.getElementsByClassName('modal').addClass('active');
    }  
  }

  render(){
    return (
      <div className="modal">
      </div>
    )
  }
}

export default Modal