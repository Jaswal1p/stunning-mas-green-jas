import decode from 'jwt-decode';

class AuthService {
    // get user data
    getProfile() {
        return decode(this.getToken());
    }
    
    // to check if user's logged in
    loggenIn() {
        // Checks if there is a saved token and its still valid
        const token = this.getToken();
        return !! token && !this.isTokenExpired(token); 
    }

    // to check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;

            } else return false;
        } catch (err) {
            return false;
        }
    }

    // next part of the code is how to get the token from localStorage

    getToken() {
        // obtain the user's token from the localStorage
        return localStorage.getItem('id_token');
    }

    // reload page to homepage 

    login(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    // logout funtiob to clear token from localStorage and force logout with reload
    logout() {
        // clear user token and profile data from localstorage
        localStorage.removeItem('id_token');
        // next line will reload the page and reset the state of the application
        window.location.assign('/');
    }

}

export default new AuthService();