import React, {Suspense, Fragment} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch, RouteProps} from 'react-router-dom';
import {history} from '../redux/store';
import Fallback from '../components/common/fallback';
import {IRootState} from '../redux/reducers/state';
import {IAuth} from '../types/auth';
import 'antd/dist/antd.css';

const HomePage = React.lazy(() => import('../pages/home'));
const LoginPage = React.lazy(() => import('../pages/auth/login'));
const SignUpPage = React.lazy(() => import('../pages/auth/signup'));
const SignUpSuccessPage = React.lazy(() => import('../pages/auth/signUpSuccess'));
const NewPassPage = React.lazy(() => import('../pages/auth/newpass'));
const PreForgotPage = React.lazy(() => import('../pages/auth/preforgot'));
const ForgotSuccessPage = React.lazy(() => import('../pages/auth/afterforgot'));

interface IMainRouterProps extends RouteProps {
  auth: IAuth,
}

function MainRouter(props: IMainRouterProps) {
  return (
    <Router history={history}>
      <Suspense fallback={<Fallback/>}>
        <Switch>
          {
            props.auth
              ? (
                <Route exact path="/" component={HomePage}/>
              )
              : (
                <>
                  <Route exact path="/" component={LoginPage}/>
                  <Route exact path="/signup" component={SignUpPage}/>
                  <Route exact path="/signup/success" component={SignUpSuccessPage}/>
                  <Route exact path="/forgot/success" component={ForgotSuccessPage}/>
                  <Route exact path="/auth/forgotPassword" component={NewPassPage}/>
                  <Route exact path="/forgot" component={PreForgotPage}/>
                </>
              )
          }
        </Switch>
      </Suspense>
    </Router>
  );
}

const mapStateToProps = (state: IRootState): IMainRouterProps => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainRouter);


