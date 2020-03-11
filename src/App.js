//changed routes on get request in app.js
//changed css
//added emails/count api endpoint

import React, { Component } from 'react';
import './App.css';
import './bootstrap.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state ={
      email:'',
      deal:'',
      count:0
    }
  }

  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }

  componentDidMount(){
    
    axios.get('https://dealotd.live/api/deals/')
      .then(response => {
        if (response.data.length > 0){
          this.setState({
            deal: response.data[0].deal
          })
        }
      })
    
    axios.get('https://dealotd.live/api/emails/count')
    .then(response => {
        this.setState({
          count: response.data.count
        })
    })
  }

  onSubmit(e){
    e.preventDefault();
    const email = {
      email: this.state.email
    }
    console.log(email);
    axios.post('https://dealotd.live/api/emails/add', email)//https://dealotd.live/api/emails/add
      .then(res => console.log(res.data));
    window.location = '/';  
  }

  render()
  {
    return(
      <div className="App">
        <div className="d-none d-md-block container-fluid background_gradient">
          <div className="row margin-top-2">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-align-center">
              <div className='new-title'>One Foodaholic Deal. Every Single Day.</div>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row margin-top-6">
            <div className="col-md-6">
              <div className="new-wrap-contact100">
                <form onSubmit={this.onSubmit} className="contact100-form validate-form">
                  <span className="new-contact100-form-title">
                    Get Today's Deal?
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>
                    <input className="new-input100" type="text" onChange={this.onChangeEmail} value={this.state.email} name="email" placeholder="Plug in ur email <3" />
                    <span className="focus-input100"></span>
                  </div>


                  <div className="container-contact100-form-btn">
                    <div className="wrap-contact100-form-btn">
                      <div className="contact100-form-bgbtn"></div>
                      <button className="new-contact100-form-btn">
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
            <div className="col-md-6">
              <div className='new-wrap-contact101'>
                <div className='new-contact101-form-title'>Today's Deal Partner:</div>
    <div className='new-container-contact101-form-btn haha'><a href="https://mu.oregonstate.edu/north-porch-cafe">{this.state.deal}</a></div>
              </div>
            </div>
          </div>
    <div className='new-contact101-form-footer'>Hop in with  &nbsp; <span className="haha1">{this.state.count}</span>  &nbsp; others to grab the Deal of the Day!</div>
          {/* newly added line */}
        </div>
        
        
        <div className="d-block d-md-none container-fluid background_gradient">
          <div className="row margin-top-15">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 text-align-center">
              <div className='new-title-mobile'>One Foodaholic Deal. Every Single Day.</div>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row margin-top-15">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className='new-wrap-contact101-mobile'>
                <div className='new-contact101-form-title-mobile'>Today's Deal Partner:</div>
                <div className='new-container-contact101-form-btn-mobile new-container-contact101-form-btn haha'><a href="https://mu.oregonstate.edu/north-porch-cafe">{this.state.deal}</a></div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row margin-top-10">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <div className="new-wrap-contact100-mobile">
                <form onSubmit={this.onSubmit} className="contact100-form validate-form">
                  <span className="new-contact100-form-title-mobile new-contact100-form-title">
                    Get Today's Deal?
                  </span>
                  <div className="wrap-input100-mobile validate-input" data-validate="Valid email is required: ex@abc.xyz" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>
                    <input className="new-input100-mobile new-input100" type="text" onChange={this.onChangeEmail} value={this.state.email} name="email" placeholder="Plug in ur email <3" />
                    <span className="focus-input100"></span>
                  </div>


                  <div className="container-contact100-form-btn">
                    <div className="wrap-contact100-form-btn">
                      <div className="contact100-form-bgbtn"></div>
                      <button className="new-contact100-form-btn">
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
            {/* <div className='new-contact101-form-footer'>Hop in with  &nbsp; <span class="haha1">{this.state.count}</span>  &nbsp; others to grab the Deal of the Day!</div> */}
            <div className="col-sm-2"></div>
          </div>
          <div className='new-contact101-form-footer-mobile'>Hop in with  &nbsp; <span className="haha1-mobile">{this.state.count}</span>  &nbsp; others to grab the Deal of the Day!</div>

        </div>
        
      </div>

/* <div className="App">
<div className="container-fluid container-contact100">
  <div className='title'>One Foodaholic Deal. Every Single Day.</div>
  <div className='wrap-contact101'>
    <div className='contact101-form-title'>Today's Deal Partner:</div>
    <div className='container-contact101-form-btn haha'>{this.state.deal}</div>
  </div>
  <div className="wrap-contact100" >
    <form onSubmit={this.onSubmit} className="contact100-form validate-form">
      <span className="contact100-form-title">
        Get Today's Deal?
    </span>
      <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz" type="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required>
        <input className="input100" type="text" onChange={this.onChangeEmail} value={this.state.email} name="email" placeholder="Plug in ur email <3" />
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
</div> */
      );
  }
}

export default App;
