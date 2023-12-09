const { Component } = require("react");

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
        AllRecord : this.props.data
    }
  }
  render() {
    return (
     <>
        <center>
        <table border={1}>
        <thead>
          <tr>
            <th>empid </th>
            <th>empname </th>
            <th>empemail </th>
            <th>empphone </th>
            <th>country </th>
            <th>state </th>
            <th>city </th>
            <th>area </th>
            <th>empdeg </th>
            <th>empsalary  </th>
            <th>empdepartment  </th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.AllRecord.map((val) => {
              return (
                <tr>
                  <td style={{backgroundColor:val.color}}>{val.empid}</td>
                  <td style={{backgroundColor:val.color}}>{val.empname}</td>
                  <td style={{backgroundColor:val.color}}>{val.empemail}</td>
                  <td style={{backgroundColor:val.color}}>{val.empphone}</td>
                  <td style={{backgroundColor:val.color}}>{val.empaddress.country}</td>
                  <td style={{backgroundColor:val.color}}>{val.empaddress.state}</td>
                  <td style={{backgroundColor:val.color}}>{val.empaddress.city}</td>
                  <td style={{backgroundColor:val.color}}>{val.empaddress.area}</td>
                  <td style={{backgroundColor:val.color}}>{val.empdeg}</td>
                  <td style={{backgroundColor:val.color}}>{val.empsalary}</td>
                  <td style={{backgroundColor:val.color}}>{val.empdepartment}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
        </center>
     </>
    )
  }
}

export default Child