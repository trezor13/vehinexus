const authService = {
    login: (token) => {
        localStorage.setItem('token', token);
    },
    saveUserInfo: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    },
    getUserInfo: () => {
        return JSON.parse(localStorage.getItem('user'));
    },
    logout: () => {
        localStorage.removeItem('token');
    },
    isAuthenticated: () => {
        const token = localStorage.getItem('token');
        return !!token; // Return true if the token exists, indicating the user is authenticated
    },
};
export default authService;