import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      email:'',
      deal:''
    }
  }

  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  componentDidMount(){
    axios.get('http://localhost:5000/deals/')
      .then(response => {
        if (response.data.length > 0){
          this.setState({
            deal: response.data[0].deal
          })
        }
      })
  }

  onSubmit(e){
    e.preventDefault();
    const email = {
      email: this.state.email
    }
    console.log(email);
    axios.post('http://localhost:5000/emails/add', email)
      .then(res => console.log(res.data));

    window.location = '/';  
  }

  render()
  {
    return(
      
      <div className="App">
        
        <div className="container-contact100">
          <div className='title'>One Foodaholic Deal. Every Single Day.</div>
          <div className='wrap-contact101'>
            <div className='contact101-form-title'>Today's Deal Partner:</div>
    <div className='container-contact101-form-btn haha'>{this.state.deal}</div>
          </div>
		      <div className="wrap-contact100" >
			      <form onSubmit={this.onSubmit}className="contact100-form validate-form">
				    <span className="contact100-form-title">
              Get Today's Deal?
				    </span>
            <div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz"type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>
					    <input className="input100" type="text" onChange ={this.onChangeEmail} value = {this.state.email} name="email" placeholder="Plug in ur email <3"/>
					    <span className="focus-input100"></span>
				  </div>


				<div className="container-contact100-form-btn">
					<div className="wrap-contact100-form-btn">
						<div className="contact100-form-bgbtn"></div>
						<button className="contact100-form-btn">
							<span>
							Send me the Secret Code
								<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
							</span>
						</button>
					</div>
				</div>
			</form>
      
		</div>
	</div>
      
      
      
      </div>
      
      );
  }
}

export default App;
