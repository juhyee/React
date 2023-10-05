import React, { useState } from 'react'

function Todo(props) {
    const [isEditing, setEditing] = useState(false);

    const editingTemplate = (
        <form className="stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}의 새로운 이름
                </label>
                <input id={props.id} className="todo-text" type="text" />
            </div>
            <div className="btn-group">
                <button type="button" className="btn todo-cancel">
                    취소
                    <span className="visually-hidden">{props.name} 이름 바꾸기</span>
                </button>
                <button type="submit" className="btn btn__primary todo-edit">
                    저장
                    <span className="visually-hidden">{props.name}의 새로운 이름</span>
                </button>
            </div>
        </form>
    );

    const viewTemplate = (
        <div className="stack-small">
            <div className="c-cb">
                <input
                    id={props.id}
                    type="checkbox"
                    defaultChecked={props.completed}
                    onChange={() => props.toggleTaskCompleted(props.id)}
                />
                <label className="todo-label" htmlFor={props.id}>
                    {props.name}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEditing(true)}>
                    편집 <span className="visually-hidden">{props.name}</span>
                </button>
                <button
                    type="button"
                    className="btn btn__danger"
                    onClick={() => props.deleteTask(props.id)}>
                    삭제 <span className="visually-hidden">{props.name}</span>
                </button>
            </div>
        </div>
    );


    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

}

export default Todo;