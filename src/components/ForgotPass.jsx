import "./assets/css/login.css";
import { Link } from "react-router-dom";
import blob from  "./assets/images/blob.svg";
import blob_1 from  "./assets/images/blob_1.svg";
import blob_2 from  "./assets/images/blob_2.svg";
import email from "./assets/images/email.svg";

const ForgotPass = ()=>{
    return (
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
                                        <p>Welcome Back</p>
                                    </div>
                                    <div class="my_login_right_login_text text_center">
                                        <p>Enter your email or phone no. to recover your password</p>
                                    </div>
                                    <div>
                                        <label>Email / Phone No.</label>
                                    </div>
                                    <div class="my_login_right_email_text">
                                        <input type="email" placeholder="Enter your email / phone no."/>
                                        <span class="my_login_right_email_icon">
                                            <img src={email}/>
                                        </span>
                                    </div>
                                    
                                    
                                    <div class="sign_in_button">
                                        <a href="#">Recover Password</a>
                                    </div>
                                    
                                    
                                    
                                    

                                </div>

                            </div>
                            <div class="my_login_right_bottom_text">
                                <p class="my_login_right_bottom_text_unit">Want to Login? <span><Link to="/">Sign In</Link></span></p>
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

export default ForgotPass;