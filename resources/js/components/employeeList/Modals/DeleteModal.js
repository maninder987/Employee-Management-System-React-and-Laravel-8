import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DeleteModal extends Component{

    constructor(props) {
        super(props);
    }

    deleteEmployeeData(employee){
        axios.delete('/delete/employee/data/'+ employee).then(() => {
            toast.error("Employee Deleted Successfully!");

            setTimeout(() => {
                location.reload();
            }, 2500);
        })
    }


    render(){
        return (
            <div className="modal fade" id={"deleteModal"+ this.props.modalId}
                 role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Employee Delete</h5>
                        </div>
                        <div className="modal-body">
                            Are you sure, You want to delete this record...
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    className="btn btn-danger"
                                    data-dismiss="modal"
                                    onClick={() => { this.deleteEmployeeData(this.props.modalId)}}>Yes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;


