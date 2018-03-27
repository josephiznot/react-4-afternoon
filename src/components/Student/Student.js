import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {},
      classroom: ""
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data.class);
        this.setState({
          studentInfo: res.data,
          classroom: res.data.class
        });
      });
  }
  render() {
    console.log(this.props);
    let { studentInfo, classroom } = this.state;
    return (
      <div className="box">
        <Link to={`/classlist/${classroom}`}>
          <button>Back</button>
        </Link>
        <h1>Student</h1>
        <h1>{studentInfo.first_name}</h1>
        <h1>{studentInfo.last_name}</h1>
        <h3>Grade: {studentInfo.grade}</h3>
        <h3>Email: {studentInfo.email}</h3>
      </div>
    );
  }
}
