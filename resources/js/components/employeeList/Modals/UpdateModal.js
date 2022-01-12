import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateModal extends Component{

    constructor(props) {
        super(props);

        this.state = {
            employeeName:  null,
            employeeSalary: null,
        }
    }

    // Getting value from props.

    static getDerivedStateFromProps(props, current_state) {

        let employeeUpdate = {
            employeeName: null,
            employeeSalary: null,
        };

        // When we update input.

        if(current_state.employeeName && (current_state.employeeName !== props.employeeData.currentEmployeeName)){
            console.log(current_state.employeeName,props.employeeData.currentEmployeeName)
            return null;
        }

        if (current_state.employeeSalary && (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary)) {
            return null;
        }


        if (current_state.employeeName !== props.employeeData.currentEmployeeName ||
            current_state.employeeName === props.employeeData.currentEmployeeName) {
            employeeUpdate.employeeName = props.employeeData.currentEmployeeName;
        }

        if (current_state.employeeSalary !== props.employeeData.currentEmployeeSalary ||
            current_state.employeeSalary === props.employeeData.currentEmployeeSalary) {
            employeeUpdate.employeeSalary = props.employeeData.currentEmployeeSalary;
        }

        return employeeUpdate;
    }

    // updating input by state.

    inputEmployeeName = (event) => {

        this.setState({
           employeeName: event.target.value,
        });
    }

    // updating input by state.

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    }

    // Updating employee record.

    updateEmployeeData = () => {
        axios.post('/update/employee/data',{
            employeeId: this.props.modalId,
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary
        }).then(() => {
            toast.success("Employee Updated Successfully!");

            setTimeout(() => {
                location.reload();
            }, 2500)
        });
    }

    render(){
        return (
            <div className="modal fade" id={"updateModal"+ this.props.modalId}
                 role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Update Employee Details</h5>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group m-3">
                                    <input type="text"
                                           className="form-control"
                                           id="employeeName"
                                           value={this.state.employeeName ?? ""}
                                           onChange={this.inputEmployeeName}
                                    />
                                </div>
                                <div className="form-group m-3">
                                    <input type="text"
                                           className="form-control"
                                           id="employeeSalary"
                                           value={this.state.employeeSalary ?? ""}
                                           onChange={this.inputEmployeeSalary}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="submit"
                                   className="btn btn-info"
                                   value="Update"
                                   onClick={this.updateEmployeeData}
                            />
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateModal;


