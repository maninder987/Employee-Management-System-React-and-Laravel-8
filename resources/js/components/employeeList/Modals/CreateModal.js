import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateModal extends Component{

    constructor(props) {
        super(props);

        this.state = {
            employeeName:  null,
            employeeSalary: null,
        }
    }

    // adding input by state.

    inputEmployeeName = (event) => {

        this.setState({
            employeeName: event.target.value,
        });
    }

    // adding input by state.

    inputEmployeeSalary = (event) => {
        this.setState({
            employeeSalary: event.target.value,
        });
    }

    // Adding employee record.

    storeEmployeeData = () => {
        axios.post('/store/employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary
        }).then(() => {

            toast.success("Employee Saved Successfully!");

            setTimeout(() => {
                location.reload();
            }, 2500)
        });
    }

    render(){
        return (
            <>
            <ToastContainer />
            <div className="row text-right mb-3 pb-3">
                <button className="btn btn-info text-right col-3 offset-md-9"
                        data-toggle="modal"
                        data-target="#modalCreate">Add New Employee</button>
            </div>

            <div className="modal fade" id="modalCreate"
                 role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Store Employee Details</h5>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group m-3">
                                    <input type="text"
                                           className="form-control"
                                           id="employeeName"
                                           placeholder='Name here'
                                           onChange={this.inputEmployeeName}
                                    />
                                </div>
                                <div className="form-group m-3">
                                    <input type="text"
                                           className="form-control"
                                           id="employeeSalary"
                                           placeholder='Salary here'
                                           onChange={this.inputEmployeeSalary}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <input type="submit"
                                   className="btn btn-info"
                                   value="Store"
                                   onClick={this.storeEmployeeData}
                            />
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default CreateModal;


