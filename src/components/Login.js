import React, {useState} from 'react';
// import {connect} from 'react-redux';
import {find} from 'lodash';
import Input from './Input';
import Button from './Button';
import {Panel} from '../styled';
import {get} from '../connection';

const Login = props => {

  const [data, setData] = useState({email: '', password: ''});
  const [warning, setWarning] = useState(false);

  const authenticate = content => {
    const user = find(content, item => item.email === data.email);
    const passwordIsRight = user && user.password === data.password;
    if (!user || !passwordIsRight) setWarning(true);
    else window.location.assign(`/books/${user.id}`);
  }

  const getUsers = async () => {
    const payload = await get('users');
    authenticate(payload);
  }

  // console.log('REDUX', props.globalState.user);

  return (
    <Panel>
      <Input isMobile={true} warning={warning} label="Email" onChange={param => setData({email: param, password: data.password})} />
      <Input isMobile={true} warning={warning} type='password' label="Senha" onChange={param => setData({email: data.email, password: param})}/>
      <Button variant='gradient' size={50} onClick={getUsers}>Entrar</Button>
    </Panel>
  )
}

// const dispatcher = dispatch => {
//   return {
//     setUser: payload => dispatch({type: 'SET_USER', payload}),
//   }
// }

// const getState = state => {
//   return {globalState: state};
// }

// export default connect(getState, dispatcher)(Login);
export default Login;