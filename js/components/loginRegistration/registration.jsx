var React =require('react');
var Backbone = require('backbone');
var Reg = require('../../models/registration');


module.exports = React.createClass({
    getIntialState: function(){
        return {
            username: null,
            first_name: null,
            password: null,
            passwordConfirmation: null,
            email: null
        }
    },
    _submit: function(e) {
        e.preventDefault();

        var test = new Reg;

        test.set({
            first_name: this.state.first_name,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        });
       test.save();
      $('#register').hide();
    },
    _handleFirstName: function(e){
        e.preventDefault();
        this.setState({first_name: e.target.value})
    },
    _handleUsername: function(e){
      e.preventDefault();
      this.setState({username: e.target.value})
    },
    _handlePassword: function(){
      e.preventDefault();
      this.setState({password: e.target.value})
    },
    _handleConfirmation: function() {
      e.preventDefault();
      this.setState({passwordConfirmation: e.target.value})
    },
    _handleEmail: function() {
      e.preventDefault();
      this.setState({email: e.target.value})
    },
    _close: function(e) {
        $('#register').hide();
    },
    render: function() {
        return(
            <div id="registrationContainer">
                <form onSubmit={this._submit}>
                <span id="close" onClick={this._close}>X</span>
                <h1>Register</h1>
                    <label htmlFor="first_name">First Name:</label>
                    <input id="first_name" onChange={this._handleFirstName}/>
                    <label htmlFor="username">Username</label>
                        <input  id="username" type="text" onChange={this._handleUsername}/>
                    <label htmlFor="password">Password</label>
                        <input type="password" id="passwordReg" onChange={this._handlePassword}/>
                    <label htmlFor="passwordConfirmation">Confirm Password</label>
                        <input type="password" id="passwordConfirmation" />
                    <label htmlFor="email">Email</label>
                    <input id="email" onChange={this._handleEmail}/>
                    <button id="submitReg" type="submit">Submit</button>
                </form>
            </div>
            )
    }
})
