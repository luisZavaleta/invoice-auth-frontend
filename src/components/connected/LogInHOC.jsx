import {connect} from "react-redux";
import Login from "../base/Login"

function mapStateToProps(state){
	return {
		login : state.login
	};
}

export default connect(mapStateToProps)(Login);


/*


{
    "timestamp": "2019-11-23T06:43:19.051+0000",
    "status": 401,
    "error": "Unauthorized",
    "message": "Unauthorized",
    "path": "/authenticate"
}


{
    "path": "/authenticate",
    "error": "Unauthorized",
    "message": "Account had not been validated.",
    "timestamp": "2019-11-23T00:43:40.900232",
    "status": 417
}


{
    "status": 200,
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJseHp2NzBAZ21haWwuY29tIiwiZXhwIjoxNTc0NTA5NDU3LCJpYXQiOjE1NzQ0OTE0NTd9.QMk9TcycfCnM2HjF08YK7z57OqiZ1cTHxpjMwxCU-Y0j2os4MeuN3WLAi7Kw08f-66LodGl9m2SWRIHFRvhZdg"
}






*/