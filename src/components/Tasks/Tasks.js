import React from "react";
import "./tasks.css"

class Tasks extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                <div className="main-content-tasks">
                    <div className="inner-width-container">
                        <div className="backlog">
                            <span className="tasks-heading grey">Backlog</span>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                        </div>
                        <div className="to-do">
                            <span className="tasks-heading pink">To Do</span>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                        </div>
                        <div className="ready-for-start">
                            <span className="tasks-heading orange">Ready For Start</span>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                        </div>
                        <div className="ongoing">
                            <span className="tasks-heading yellow">Ongoing</span>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                        </div>
                        <div className="ready-for-test">
                            <span className="tasks-heading purple">Ready For Test</span>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                            <div className="task-content">
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                                <p>Heading</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Tasks