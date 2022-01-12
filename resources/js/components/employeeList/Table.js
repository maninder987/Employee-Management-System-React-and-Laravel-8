import React, {Component} from 'react';
import TableRow from "./TableRow";
import CreateModal from "./Modals/CreateModal";

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        }

        // Binding Function if don't use arrow function.
        //this.getEmployeeList = this.getEmployeeList.bind(this);

    }

    // Life cycle method.
    componentDidMount() {
        this.getEmployeeList();
    }

    // Get employee list.

    getEmployeeList = () => {
        let self = this;
        axios.get('/get/employee/list').then(function(response){
            self.setState({
                employees: response.data
            });
        });
    }

    render(){
        return(
            <>
                <CreateModal/>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col" width="100px">#</th>
                        <th scope="col" width="100px">Name</th>
                        <th scope="col" width="100px">Salary</th>
                        <th scope="col" width="100px" className="text-center">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.employees.map(function (x, i) {
                        return <TableRow key={i} data={x}/>;
                    })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default Table;


