import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
)

const withAdmingWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && "This info is private! Do not share." }
            <WrappedComponent {...props} />
        </div>
    )
}

const withAuthMessage = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth ? (<WrappedComponent {...props} />) : ("You are not authorized to see this content") }
        </div>
    )
}

const AuthInfo = withAuthMessage(Info);

const AdminInfo = withAdmingWarning(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="secret info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuth={true} info={"only for authorized users"} />, document.getElementById('app'));