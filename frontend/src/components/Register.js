import "./assets/css/login.css";
import { Link } from "react-router-dom";
import blob from  "./assets/images/blob.svg";
import blob_1 from  "./assets/images/blob_1.svg";
import blob_2 from  "./assets/images/blob_2.svg";
import user from "./assets/images/user.svg";
import phone from "./assets/images/phone.svg";
import email from "./assets/images/email.svg";
import password from "./assets/images/password.svg";
import eye_open from "./assets/images/eye_open.svg";
import eye_close from "./assets/images/eye_close.svg";

const Register = ()=>{
    return(
        <>
        <div class="my_main_wrap">
        <div class="my_main_inside">
            <div class="my_login_wrap">
                <div class="my_login_inside grid justify_sp_between">
                    <div class="my_login_left_wrap">
                        <div class="my_login_left__inside flex justify_sp_between flex_column">
                            
                            <div class="my_login_left_blob">
                                <img src={blob}/>
                                <p class="my_login_left_blob_text">Welcome</p>
                            </div>
                            <div class="my_login_left_blob_1">
                                <img src={blob_1}/>
                            </div>
                            <div class="my_login_left_blob_2">
                                <img src={blob_2}/>
                            </div>

                        </div>

                    </div>
                    <div class="my_login_right_wrap">
                        <div class="my_login_right__inside flex justify_sp_between flex_column align_center">
                            <div class="my_login_right_top_text">
                                <p>My Market</p>

                            </div>
                            <div class="my_login_right_mid_wrap">
                                <div class="my_login_right_mid_inside">
                                    <div class="my_login_right_welcome text_center">
                                        <p>Create New Account</p>
                                    </div>
                                    <div class="my_login_right_login_text text_center">
                                        <p>Already have an account ? <span><Link to="/">Sign In</Link></span></p>
                                    </div>
                                    <div>
                                        <label>Name</label>
                                    </div>
                                    <div class="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your name"/>
                                        <span class="my_login_right_email_icon">
                                            <img src={user}/>
                                        </span>
                                    </div>
                                    <div>
                                        <label>Email</label>
                                    </div>
                                    <div class="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your email"/>
                                        <span class="my_login_right_email_icon">
                                            <img src={email}/>
                                        </span>
                                    </div>
                                    <div class="my_phone_number">
                                        <label>Phone No. <span>(Recommended)</span></label>
                                    </div>
                                    <div class="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your phone number"/>
                                        <span class="my_login_right_email_icon">
                                            <img src={phone}/>
                                        </span>
                                    </div>
                                    <div>
                                        <label>Password</label>
                                    </div>
                                    <div class="my_login_right_password_text">
                                        <input type="password" placeholder="Enter your password"/>
                                        <span class="my_login_right_password_icon">
                                            <img src={password}/>
                                        </span>
                                        <span class="my_login_right_show_hide_icon">
                                            <img src={eye_open}/>
                                            <img src={eye_close} style={{"display": "none"}}/>
                                        </span>
                                    </div>
                                    
                                    <div class="sign_in_button">
                                        <Link to="/register">Sign Up</Link>
                                    </div>
                                    <div class="login_separator">
                                        <hr/>
                                        <span>
                                            <p>OR</p>
                                        </span>
                                    </div>
                                    <div class="google_sign_in_button">
                                        <a href="#">Sign Up with Google</a>
                                    </div>
                                    
                                    

                                </div>

                            </div>

                            

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </div>
        </>
    )
}

export default Register;