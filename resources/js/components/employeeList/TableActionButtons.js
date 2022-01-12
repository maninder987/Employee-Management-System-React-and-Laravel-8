import React, { Component } from 'react';
import ViewModal from './Modals/ViewModal';
import UpdateModal from "./Modals/UpdateModal";
import DeleteModal from "./Modals/DeleteModal";

class TableRow extends Component{

    constructor(props) {
        super(props);
        this.state = {
            currentEmployeeName: null,
            currentEmployeeSalary: null,
        }
    }

    getEmployeeDetails = (id) => {
        axios.post('/get/individual/employee/details', {
            employeeId: id
        }).then((response) => {
            this.setState({
                currentEmployeeName: response.data.employee_name,
                currentEmployeeSalary: response.data.salary,
            });
        })
    }

    render(){
        return (
            <div className="btn-group" role="group" >
                <button type="button" className="btn btn-info"
                        data-toggle="modal"
                        data-target={'#viewModal'+this.props.eachRowId}
                        onClick={() => { this.getEmployeeDetails(this.props.eachRowId)}}>
                    View
                </button>
                <ViewModal modalId={this.props.eachRowId} employeeData={this.state}/>
                <button type="button" className="btn btn-warning"
                        data-toggle="modal"
                        data-target={'#updateModal'+this.props.eachRowId}
                        onClick={() => { this.getEmployeeDetails(this.props.eachRowId)}}>
                    Update
                </button>
                <UpdateModal modalId={this.props.eachRowId} employeeData={this.state}/>
                <button type="button" className="btn btn-danger"
                        data-toggle="modal"
                        data-target={'#deleteModal'+this.props.eachRowId}
                        onClick={() => { this.getEmployeeDetails(this.props.eachRowId)}}>
                    Delete
                </button>
                <DeleteModal modalId={this.props.eachRowId} employeeData={this.state}/>
            </div>
        )
    }
}


export default TableRow;


