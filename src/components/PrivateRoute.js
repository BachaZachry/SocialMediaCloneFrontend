import React from "react";
import {Route,Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const PrivateRoute = ({component:Component,...rest}) => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isLoading = useSelector(state => state.auth.isLoading);
    return (
        <Route
            {...rest}
            render={
                props => {
                    if (isLoading) {
                        return <div>Loading... </div>;
                    }
                    else if (!isAuthenticated) {
                        return <Redirect to='/login' />;
                    }
                    else {
                        return <Component {...props} />
                    }
                }
            }

    />
    )
}