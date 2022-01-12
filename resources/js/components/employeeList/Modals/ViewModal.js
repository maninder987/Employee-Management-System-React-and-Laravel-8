import React, { Component } from 'react';


class ViewModal extends Component{

    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div className="modal fade" id={"viewModal"+ this.props.modalId}
                 role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Employee Details</h5>
                        </div>
                        <div className="modal-body">
                            Name: <strong>{this.props.employeeData.currentEmployeeName}</strong>
                            <hr/>
                            Salary: <strong>${this.props.employeeData.currentEmployeeSalary}</strong>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewModal;


