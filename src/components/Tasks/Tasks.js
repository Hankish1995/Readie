import React, { useState, useEffect } from "react";
import "./tasks.css"
import DropPlace from "./DropPlace";
import { useNavigate } from "react-router-dom";
import { getTickets, updateTicketStatus } from "../../API/Api";

const Tasks = () => {
    const [activeCard, setActiveCard] = useState(null)
    const [all_tasks, setAll_tasks] = useState([])
    const [move_poition, setMove_position] = useState("")
    const [position, setPosition] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        getAllTickets()
    }, [all_tasks])

    const getAllTickets = async () => {
        const data = await getTickets()
        setAll_tasks(data)
    }

    const handleChangeTaskStatus = async () => {
        let newData = {
            status: move_poition
        };
        const data = await updateTicketStatus({ docId: activeCard, newData });
        if (data) {
            getAllTickets()();
        }
    };
    return (
        <>
            <div className="main-content-tasks">
                <div className="add-tasks">
                    <div className="filter-flex">
                        <div className="filter-name">
                            <select>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                        <div className="filter-priority">
                            <select>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                                <option>1</option>
                            </select>
                        </div>
                    </div>
                    <div className="new-button">
                        <button className="New-tasks" onClick={() => navigate("/new-tasks")}>New</button>
                    </div>
                </div>
                <div className="inner-width-container">
                    <div className="backlog">
                        <span className="tasks-heading grey">Backlog</span>
                        {all_tasks?.map((task_list) => {
                            if (task_list?.status === "backlog") {
                                return (
                                    <>
                                        <div className="task-content" draggable="true" onDragStart={() => { setActiveCard(task_list?.id) }} onDragEnd={() => setActiveCard(null)}>
                                            <p>{task_list?.title}</p>
                                            <p>{task_list?.status}</p>
                                            <p>
                                                {task_list?.assignee?.map(name => {
                                                    const initials = name.split(' ').map(part => part[0]).join('').toUpperCase();
                                                    return initials;
                                                }).join(',')}
                                            </p>
                                            <p>{task_list?.description?.slice(0, 25)}</p>
                                        </div>
                                    </>
                                )
                            }
                        })}
                        <DropPlace handleChangeTaskStatus={handleChangeTaskStatus} setMove_position={setMove_position} current="backlog" />
                    </div>
                    <div className="to-do">
                        <span className="tasks-heading pink">To Do</span>
                        {all_tasks?.map((task_list) => {
                            if (task_list?.status === "to-do") {
                                return (
                                    <>
                                        <div className="task-content" draggable="true" onDragStart={() => { setActiveCard(task_list?.id) }} onDragEnd={() => setActiveCard(null)}>
                                            <p>{task_list?.title}</p>
                                            <p>{task_list?.status}</p>
                                            <p>
                                                {task_list?.assignee?.map(name => {
                                                    const initials = name.split(' ').map(part => part[0]).join('').toUpperCase();
                                                    return initials;
                                                }).join(',')}
                                            </p>
                                            <p>{task_list?.description?.slice(0, 25)}</p>
                                        </div>
                                    </>
                                )
                            }
                        })}
                        <DropPlace handleChangeTaskStatus={handleChangeTaskStatus} setMove_position={setMove_position} current="to-do" />
                    </div>
                    <div className="ready-for-start">
                        <span className="tasks-heading orange">Ready For Start</span>
                        {all_tasks?.map((task_list) => {
                            if (task_list?.status === "ready for start") {
                                return (
                                    <>
                                        <div className="task-content" draggable="true" onDragStart={() => { setActiveCard(task_list?.id) }} onDragEnd={() => setActiveCard(null)}>
                                            <p>{task_list?.title}</p>
                                            <p>{task_list?.status}</p>
                                            <p>
                                                {task_list?.assignee?.map(name => {
                                                    const initials = name.split(' ').map(part => part[0]).join('').toUpperCase();
                                                    return initials;
                                                }).join(',')}
                                            </p>
                                            <p>{task_list?.description?.slice(0, 25)}</p>
                                        </div>
                                    </>
                                )
                            }
                        })}
                        <DropPlace handleChangeTaskStatus={handleChangeTaskStatus} setMove_position={setMove_position} current="ready for start" />
                    </div>
                    <div className="ongoing">
                        <span className="tasks-heading yellow">Ongoing</span>
                        {all_tasks?.map((task_list) => {
                            if (task_list?.status === "ongoing") {
                                return (
                                    <>
                                        <div className="task-content" draggable="true" onDragStart={() => { setActiveCard(task_list?.id) }} onDragEnd={() => setActiveCard(null)}>
                                            <p>{task_list?.title}</p>
                                            <p>{task_list?.status}</p>
                                            <p>
                                                {task_list?.assignee?.map(name => {
                                                    const initials = name.split(' ').map(part => part[0]).join('').toUpperCase();
                                                    return initials;
                                                }).join(',')}
                                            </p>
                                            <p>{task_list?.description?.slice(0, 25)}</p>
                                        </div>
                                    </>
                                )
                            }
                        })}
                        <DropPlace handleChangeTaskStatus={handleChangeTaskStatus} setMove_position={setMove_position} current="ongoing" />
                    </div>
                    <div className="ready-for-test">
                        <span className="tasks-heading purple">Ready For Test</span>
                        {all_tasks?.map((task_list) => {
                            if (task_list?.status === "ready for test") {
                                return (
                                    <>
                                        <div className="task-content" draggable="true" onDragStart={() => { setActiveCard(task_list?.id) }} onDragEnd={() => setActiveCard(null)}>
                                            <p>{task_list?.title}</p>
                                            <p>{task_list?.status}</p>
                                            <p>
                                                {task_list?.assignee?.map(name => {
                                                    const initials = name.split(' ').map(part => part[0]).join('').toUpperCase();
                                                    return initials;
                                                }).join(',')}
                                            </p>
                                            <p>{task_list?.description?.slice(0, 25)}</p>
                                        </div>
                                    </>
                                )
                            }
                        })}
                        <DropPlace handleChangeTaskStatus={handleChangeTaskStatus} setMove_position={setMove_position} current="ready for test" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Tasks