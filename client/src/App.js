import React, { Component } from "react";
// import { GoogleLogin } from "react-google-login";
// import Axios from "axios";
// import jwt_decode from "jwt-decode";
// import { clientId } from "./config";
import Main from "./components/Main";
import Login from "./components/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      error: "",
      user: null,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({
      isAuthenticated: false
    });
    // if (localStorage.jwt) {
    //   const authInfo = jwt_decode(localStorage.jwt);
    //   if (authInfo.exp < new Date() / 1000) {
    //     this.logout();
    //     return;
    //   } else {
    //     this.setState({
    //       loading: true
    //     });

    //     Axios.get("/auth/google/validate", {
    //       headers: { Authorization: `Bearer ${localStorage.jwt}` }
    //     })
    //       .then(res => {
    //         if (!res.data) {
    //           this.setState({
    //             loading: false
    //           });
    //           return;
    //         }
    //         this.setState({
    //           isAuthenticated: true,
    //           user: res.data,
    //           loading: false,
    //           error: ""
    //         });
    //       })
    //       .catch(err => {
    //         this.setState({
    //           error: JSON.stringify(err.response.data),
    //           loading: false
    //         });
    //       });
    //   }
    // }
  }

  // logout = () => {
  //   localStorage.removeItem("jwt");
  //   this.setState({
  //     user: null,
  //     isAuthenticated: false
  //   });
  // };

  // responseGoogle = response => {
  //   if (response.error) {
  //     this.setState({
  //       error: response.error
  //     });
  //     return;
  //   }
  //   this.setState({
  //     loading: true
  //   });
  //   Axios.post(`/auth/google/validate`, { access_token: response.accessToken })
  //     .then(res => {
  //       this.setState({
  //         isAuthenticated: true,
  //         loading: false,
  //         user: res.data.user,
  //         error: ""
  //       });
  //       localStorage.setItem("jwt", res.data.jwt);
  //     })
  //     .catch(err => {
  //       this.setState({
  //         error: JSON.stringify(err.response.data),
  //         loading: false
  //       });
  //     });
  // };

  render() {
    // if logged in> render Login.js, else render Main.js
    return this.state.isAuthenticated ? <Main /> : <Login />;
  }
}

export default App;
