import Axios from 'axios';

// Pulls User Data into global context
// setIsloaded is an optional param that
export const authCheck = async ({ setAuthState, setIsLoaded }) => {
  if (localStorage.getItem('token')) {
    try {
      const response = await Axios.get('http://localhost:9001/user/account', {
        headers: { Authorization: localStorage.getItem('token') }
      });
      setAuthState(response.data);
    } catch {
      setAuthState(null);
    }
  } else {
    setAuthState(null);
  }
  if (setIsLoaded) setIsLoaded(true);
};
