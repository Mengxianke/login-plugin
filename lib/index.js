import Login from './components/Login.vue';

const LoginPlugin =  {
    install: (app, options) => {
        console.log("Login install called");
        app.component('Login', Login);
    }
}

export default LoginPlugin
