import React, {Component} from 'react';


var xhr;
class Hello extends Component{
	
  constructor(props){
    super(props);

    this.state = {
      company: []
    };

    this.processRequest = this.processRequest.bind(this);
  }


  componentDidMount(){

    xhr = new XMLHttpRequest();
    xhr.open("GET", "/hello", true);
    xhr.send();
    xhr.addEventListener("readystatechange", this.processRequest, false);
  }

  processRequest(){
  
  console.log(xhr); 

    if(xhr.readyState === 4 && xhr.status === 200){
      var response = JSON.parse(xhr.responseText);

      this.setState({
        company: response
      });
    }else{

      this.setState({
        company: []
      });
    }
  }


   


	render(){
    const listCompany = this.state.company.map((company) => <h1 key={company.id}>{company.rfc}</h1>);
		return (
    		<div className="App">
      			{listCompany} 
            {listCompany != null && <span>no companies yet </span>} 
    		</div>
  		);
	}
}



export default Hello;
