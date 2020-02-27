import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../../actions/auth';

const Examplan = ({ children }) => {
    useEffect(() => {
       Router.push("/examplan")
    }, []);
    return <React.Fragment>{children}</React.Fragment>;
};

export default Examplan;