import Child from './Child'
const { Component } = require("react");


class Parent extends Component {
  constructor() {
    super();
    this.employee = [
      {
          empid : 1,
          empname : "abc",
          empemail : "abc@gmail.com",
          empphone : 12345,
          empaddress : {
              country : "india",
              state : "gujarat",
              city : "surat",
              area : "motavarachha"
          },
          empdeg : "junior",
          empsalary : 23000,
          empdepartment : "ui/ux",
          color : "pink"
      },
      {
          empid : 2,
          empname : "def",
          empemail : "def@gmail.com",
          empphone : 2121,
          empaddress : {
              country : "india",
              state : "rajasthan",
              city : "jaypur",
              area : "jaypurabc"
          },
          empdeg : "junior",
          empsalary : 21000,
          empdepartment : "web design",
          color : "skyblue"
      },
      {
          empid : 3,
          empname : "ghi",
          empemail : "ghi@gmail.com",
          empphone : 2212,
          empaddress : {
              country : "india",
              state : "maharashtra",
              city : "pune",
              area : "abcpune"
          },
          empdeg : "seniour",
          empsalary : 65000,
          empdepartment : "backend developer",
          color : "pink"
      },
      {
          empid : 4,
          empname : "jkl",
          empemail : "jkl@gmail.com",
          empphone : 212112,
          empaddress : {
              country : "india",
              state : "karnatak",
              city : "bengaluru",
              area : "kgf"
          },
          empdeg : "tl",
          empsalary : 150000,
          empdepartment : "frontend developer",
          color : "skyblue"
      }
  ]
  }
  render() {
    return (
      <Child 
        data={this.employee} 
      />
    )

  }
}

export default Parent;