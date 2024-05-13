import React, { useState, useEffect } from "react";
import { getPriority, getTypes, getAssignee, getStatus, create_tickets } from "../../API/Api";
import { useNavigate } from "react-router-dom";

const NewTask = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [assignee_list, setAssignee_list] = useState([])
    const [type, setType] = useState(null)
    const [status, setStatus] = useState(null)
    const [priority, setPriority] = useState(null)
    const [reviewer, setReviewer] = useState(null)
    const [updated_by, setUpdated_by] = useState(null)
    const [description, setDescription] = useState("")
    const [type_data, setType_data] = useState([])
    const [allPriority, setAllPriority] = useState([])
    const [allAssignee, setAllAssignee] = useState([])
    const [task_status, setTask_status] = useState([])

    useEffect(() => {
        getTaskTypes()
        getAllPriorities()
        getAllAssignee()
        getTaskStatus()
    }, [])

    const getTaskTypes = async () => {
        const data = await getTypes()
        setType_data(data)
    }

    const getAllPriorities = async () => {
        const data = await getPriority()
        setAllPriority(data)
    }

    const getAllAssignee = async () => {
        const data = await getAssignee()
        setAllAssignee(data)
    }

    const getTaskStatus = async () => {
        const data = await getStatus()
        setTask_status(data)
    }

    const handleSetAssigneeList = (name) => {
        setAssignee_list(prevList => {
            const new_arr = [...(prevList || [])]; // Copy the previous array to ensure immutability
            if (name !== "") {
                new_arr.push(name);
            }
            return new_arr;
        });
    };

    const handleCreateTask = async () => {
        let values = {
            title: title,
            assignee: assignee_list,
            type: type,
            status: status,
            priority: priority,
            reviewer: reviewer,
            updated_by: updated_by,
            description: description
        }

        const saved_data = await create_tickets(values)
        if (saved_data) {
            navigate("/tasks")
        }

    }


    return (
        <>
            <div className="main-outer-new-task">
                <div className="title">
                    <label className="label-title">Title :</label>
                    <input name="title" type="text" placeholder="Add Your Title Here" onChange={(e) => setTitle(e.target.value)} className="name-inputss" />
                </div>
                <div className="assignee">
                    <label className="label-title">Assignee :</label>
                    <select className="assignee-select" onChange={(e) => handleSetAssigneeList(e.target.value)}>
                        {allAssignee?.map((val, i) => {
                            return (
                                <option key={i} value={val?.name}>{val?.name}</option>
                            )
                        })}
                    </select>
                    <div className="assignee-list">
                        <input type="text" className="name-inputss assignee-input" value={assignee_list?.join(',')} disabled={true} />

                    </div>
                </div>
                <div className="ticket-info">
                    <div className="type">
                        <label className="label-title">Type :</label>
                        <select className="assignee-select" onChange={(e) => setType(e?.target?.value)}>
                            <option>Select</option>
                            {type_data?.map((val, i) => {
                                return (
                                    <option key={i} value={val?.name}>{val?.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="status">
                        <label className="label-title">status :</label>
                        <select className="assignee-select" onChange={(e) => setStatus(e?.target?.value)}>
                            {task_status?.map((val, i) => {
                                return (
                                    <option key={i} value={val?.name}>{val?.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="priority">
                        <label className="label-title">Priority :</label>
                        <select className="assignee-select" onChange={(e) => setPriority(e.target.value)}>
                            {allPriority?.map((val, i) => {
                                return (
                                    <option key={i} value={val?.name}>{val?.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="ticket-info-details">
                    <div className="Reviewer">
                        <label className="label-title">reviewer :</label>
                        <select className="assignee-select" onChange={(e) => setReviewer(e.target.value)}>
                            {allAssignee?.map((val, i) => {
                                return (
                                    <option key={i} value={val?.name}>{val?.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="Updated-By">
                        <label className="label-title">Updated By :</label>
                        <select className="assignee-select" onChange={(e) => setUpdated_by(e.target.value)}>
                            {allAssignee?.map((val, i) => {
                                return (
                                    <option key={i} value={val?.name}>{val?.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
                <div className="description">
                    <label className="label-title">About :</label>
                    <input name="title" type="text" placeholder="Add Ticket description Here" onChange={(e) => setDescription(e.target.value)} className="description-input" />
                </div>
                <div className="handle_save">
                    <button className="create_button" onClick={() => handleCreateTask()}>Create</button>
                </div>
            </div>
        </>
    )
}

export default NewTask