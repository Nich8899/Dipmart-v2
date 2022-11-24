import { useEffect, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
// import Forgotpassword from "../pages/Forgotpassword";

import Cookies from "js-cookie";
import customAxios from "../http/axios";
import { useRouter } from "next/router";

const Tab = () => {
  const router = useRouter();
  const [authTab, setAuthTab] = useState("login");
  const [loginTap, setLoginTap] = useState(0);
  const [signupTap, setSignupTap] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameRegister, setUsernameRegister] = useState("");
  const [loginInput, setLoginInput] = useState(false);
  const [registerInput, setRegisterInput] = useState(false);
  const activeClass =
    "border-b-2 bord er-blue-900  font-bold text-blue-900 py-3";

  const [otp01, setOtp01] = useState<any>();
  const [otp02, setOtp02] = useState<any>();
  const [otp03, setOtp03] = useState<any>();
  const [otp04, setOtp04] = useState<any>();
  const [otp05, setOtp05] = useState<any>();
  const [otp06, setOtp06] = useState<any>();
  const [validatePassword, setvalidatePassword] = useState(true);
  const [forgotPassword, setForgotPassword] = useState("");
  const [forgotInput, setForgotInput] = useState(false);

  const changeSignup = () => {
    setAuthTab("signup");
  };
  const changeLogin = () => {
    setAuthTab("login");
  };
  let Authorization = Cookies.get("Authorization");

  const handleloginUser = async (e: any) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setLoginInput(true);
      setUsername("");
      setPassword("");
      return;
    }

    let username1 = "";
    if (username[0] === "0") {
      username1 = username.substring(1);
      username1 = `+855${username1}`;
    } else {
      username1 = `+855${username}`;
    }
    const datas = { username: username1, password };
    const req = await customAxios.post(
      "/api/method/dipmarts_app.api.login",
      datas
    );
    if (req?.request?.status === 404) {
      setUsername("");
      setPassword("");
      setLoginInput(true);
      return;
    }
    const userProfile = async () => {
      await customAxios
        .get("https://dev.dipmart.com/api/method/dipmarts_app.api.userprofile")
        .then((res) => {
          const userprofile = res.data.message;
          Cookies.set("UserProfile", JSON.stringify(userprofile));
        });
    };
    const api_key = req.data.message.api_key;
    const api_secret = req.data.message.api_secret;
    Authorization = `Token ${api_key}:${api_secret}`;
    Cookies.set("Authorization", Authorization);
    userProfile();
    if (req.status === 200) {
      router.reload();
      router.push("/profile");
    }
  };

  let counter = 60;
  let interval = setInterval(function () {
    counter--;
    if (counter <= 0) {
      clearInterval(interval);
      return;
    }
  }, 1000);

  let RegisterUsername = "";
  if (usernameRegister[0] === "0") {
    RegisterUsername = usernameRegister.substring(1);
    RegisterUsername = `+855${RegisterUsername}`;
  } else {
    RegisterUsername = `+855${usernameRegister}`;
  }
  let ForgotPasswordUsername = "";
  if (forgotPassword[0] === "0") {
    ForgotPasswordUsername = forgotPassword.substring(1);
    ForgotPasswordUsername = `+855${ForgotPasswordUsername}`;
  } else {
    ForgotPasswordUsername = `+855${forgotPassword}`;
  }
  const handleSignup = async (e: any) => {
    e.preventDefault();
    if (usernameRegister.length < 8 || usernameRegister.length > 10) {
      setRegisterInput(true);
      return;
    }
    const req = await customAxios.post("/api/method/dipmarts_app.api.getotp", {
      phone: RegisterUsername,
    });
    if (req.status === 200) {
      setSignupTap(1);
      setPassword("");
    }
  };
  const confirmOtp = async (e: any) => {
    e.preventDefault();
    if (
      otp01 === "" ||
      otp02 === "" ||
      otp03 === "" ||
      otp04 === "" ||
      otp05 === "" ||
      otp06 === ""
    ) {
      return;
    }
    let otp = otp01 + otp02 + otp03 + otp04 + otp05 + otp06;
    const datas = {
      phone: RegisterUsername,
      otp,
    };

    const otpvalidation = await customAxios.post(
      "/api/method/dipmarts_app.api.validotp",
      datas
    );
    if (otpvalidation.status === 200) {
      setSignupTap(2);
    } else {
      setOtp01(null);
      setOtp02(null);
      setOtp03(null);
      setOtp04(null);
      setOtp05(null);
      setOtp06(null);
      setSignupTap(0);
    }
  };
  const confirmSignup = async () => {
    if (password.length < 8) {
      setvalidatePassword(true);
      return;
    }
    const datas = {
      username: RegisterUsername,
      password,
    };
    const req = await customAxios.post(
      "/api/method/dipmarts_app.api.signup",
      datas
    );
    if (req.status === 200) {
      setAuthTab("login");
    }
  };
  const tabChange = function (val: any) {
    let ele = document.querySelectorAll("input");
    if (ele[val - 1].value != "") {
      if (val !== 6) {
        ele[val].focus();
      }
    } else if (ele[val - 1].value == "") {
      if (val !== 1) {
        ele[val - 2].focus();
      }
    }
  };

  const ForgetPassword = async (e: any) => {
    e.preventDefault();
    if (ForgotPasswordUsername.length <= 8) {
      setForgotInput(true);
      return;
    }
    const req = await customAxios.post("/api/method/dipmarts_app.api.getotp", {
      phone: ForgotPasswordUsername,
    });
    if (req.status === 200) {
      setLoginTap(2);
    } else {
      setForgotInput(true);
    }
  };
  const confirmOtpResetpw = async (e: any) => {
    e.preventDefault();
    if (
      otp01 === "" ||
      otp02 === "" ||
      otp03 === "" ||
      otp04 === "" ||
      otp05 === "" ||
      otp06 === ""
    ) {
      return;
    }
    let otp = otp01 + otp02 + otp03 + otp04 + otp05 + otp06;
    const datas = {
      phone: ForgotPasswordUsername,
      otp,
    };

    const otpvalidation = await customAxios.post(
      "/api/method/dipmarts_app.api.validotp",
      datas
    );
    if (otpvalidation.status === 200) {
      setLoginTap(3);
    } else {
      setOtp01(null);
      setOtp02(null);
      setOtp03(null);
      setOtp04(null);
      setOtp05(null);
      setOtp06(null);
      setLoginTap(1);
    }
  };
  const changePassword = async () => {
    if (password.length < 8) {
      setvalidatePassword(true);
      return;
    }
    const datas = {
      username: ForgotPasswordUsername,
      password,
    };
    const res = await customAxios.post(
      "/api/method/dipmarts_app.api.forgetpassword",
      datas
    );
    if (res.status === 200) {
      setLoginTap(0);
      setPassword("");
    } else {
      setvalidatePassword(true);
      setPassword("");
    }
  };
  return (
    // <>
    //   {forgotfassword ? (
    //     <div className="flex flex-wrap">
    //       <div className="w-full">
    //         <ul
    //           className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
    //           role="tablist"
    //         >
    //           <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
    //             <a
    //               className={
    //                 "text-xs font-bold  px-2 py-3 shadow-lg rounded block leading-normal " +
    //                 (openTab === 1
    //                   ? "text-blue-800 bg-white"
    //                   : "text-blueGray-600 bg-white")
    //               }
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 setOpenTab(1);
    //               }}
    //               data-tr="tab"
    //               href="#link1"
    //               role="tablist"
    //             >
    //               Sign Up
    //             </a>
    //           </li>
    //           <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
    //             <a
    //               className={
    //                 "text-xs font-bold  px-5 py-3 shadow-lg rounded block leading-normal " +
    //                 (openTab === 2
    //                   ? "text-blue-800 bg-white"
    //                   : "text-blueGray-600 bg-white")
    //               }
    //               onClick={(e) => {
    //                 e.preventDefault();
    //                 setOpenTab(2);
    //               }}
    //               href="#link2"
    //               role="tablist"
    //             >
    //               Login
    //             </a>
    //           </li>
    //         </ul>
    //         <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
    //           <div className="px-4 py-5 flex-auto">
    //             <div className="tab-content tab-space">
    //               <div
    //                 className={openTab === 1 ? "block" : "hidden"}
    //                 id="link1"
    //               >
    //                 <p className="font-bold flex justify-start items-center px-4 ">
    //                   Register with Phone Number{" "}
    //                 </p>

    //                 <p className="text-xs flex justify-start items-center px-4 mt-[5px]">
    //                   Please enter your phone number to continue
    //                 </p>

    //                 <div className="flex flex-wrap">
    //                   <div className="w-4/12 px-4">
    //                     <div className="text-sm block my-4 p-2 text-blueGray-700 rounded border border-solid border-blueGray-100">
    //                       <img
    //                         src="data:image/png;base64,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"
    //                         alt="khmer logo"
    //                         className="w-6 h-6 object-contain "
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-8/12 px-4">
    //                     <Input
    //                       className=" after:content-['*'] text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100"
    //                       label="Phone Number"
    //                       icon={
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           fill="none"
    //                           viewBox="0 0 24 24"
    //                           strokeWidth="1.5"
    //                           stroke="currentColor"
    //                           className="w-4 h-4 rounded-full bg-indigo-900 text-white"
    //                         >
    //                           <path
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                             d="M6 18L18 6M6 6l12 12"
    //                           />
    //                         </svg>
    //                       }
    //                     />

    //                   </div>
    //                 </div>
    //                 <div className="flex justify-center items-center px-4">
    //                   <button
    //                     name="openmodal-btn"
    //                     type="button"
    //                     className="  w-full py-[10px] bg-blue-900 text-center  rounded-xl  "
    //                   >
    //                     <span className="font-bold text-[18px] text-white">
    //                       Continue
    //                     </span>
    //                   </button>
    //                 </div>
    //               </div>
    //               <div
    //                 className={openTab === 2 ? "block" : "hidden"}
    //                 id="link2"
    //               >
    //                 <div className="flex flex-wrap">
    //                   <div className="w-4/12 px-2">
    //                     <div className="text-sm block my-4 p-2 text-blueGray-700 rounded border border-solid border-blueGray-100">
    //                       <img
    //                         src="data:image/png;base64,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"
    //                         alt="khmer logo"
    //                         className="w-6 h-6 object-contain "
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-8/12 px-4 ">
    //                     <Input
    //                       className=" after:content-['*'] text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100"
    //                       label=" Enter Phone Number"
    //                       icon={
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           fill="none"
    //                           viewBox="0 0 24 24"
    //                           strokeWidth="1.5"
    //                           stroke="currentColor"
    //                           className="w-4 h-4 rounded-full bg-indigo-900 text-white"
    //                         >
    //                           <path
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                             d="M6 18L18 6M6 6l12 12"
    //                           />
    //                         </svg>
    //                       }
    //                     />
    //                   </div>
    //                   <div className="  w-96 mx-[10px]">
    //                     <Input
    //                       className=" text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100"
    //                       label="Enter Password"
    //                       icon={
    //                         <svg
    //                           xmlns="http://www.w3.org/2000/svg"
    //                           fill="none"
    //                           viewBox="0 0 24 24"
    //                           strokeWidth="1.5"
    //                           stroke="currentColor"
    //                           className="w-5 h-5"
    //                         >
    //                           <path
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                             d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    //                           />
    //                           <path
    //                             strokeLinecap="round"
    //                             strokeLinejoin="round"
    //                             d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    //                           />
    //                         </svg>
    //                       }
    //                     />
    //                   </div>
    //                   <br></br>
    //                   <div className="mx-4  mt-[23px] ">
    //                     <span
    //                       className="text-light-blue-800 underline"
    //                       onClick={handleClick}
    //                     >
    //                       Forgot Password?
    //                     </span>
    //                   </div>
    //                 </div>
    //                 <div className="flex justify-center items-center px-2 pb-8 ">
    //                   <button
    //                     name="openmodal-btn"
    //                     type="button"
    //                     className="  w-full  py-[10px] bg-blue-900 text-center  rounded-xl mt-[20px] "
    //                   >
    //                     <span className="font-bold text-[18px] text-white">
    //                       Login
    //                     </span>
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div>
    //       <div
    //         className=" p-4 flex justify-between items-center"
    //         onClick={handleClick}
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    //           />
    //         </svg>
    //         <h1 className="text-center font-bold text-xl">Forgot password</h1>
    //         <div />
    //       </div>
    //       <Forgotpassword />
    //     </div>
    //   )}
    // </>
    <div className="absolute bottom-0 w-full z-50">
      <div className="grid grid-cols-2 text-center bg-white rounded-t-xl  border-b-2  text-base">
        <button
          className={authTab === "signup" ? activeClass : "py-3"}
          onClick={changeSignup}
          name="signuptap"
        >
          Sign Up
        </button>
        <button
          className={authTab === "login" ? activeClass : "py-3"}
          onClick={changeLogin}
          name="signintap"
        >
          Login
        </button>
      </div>
      {authTab === "login" ? (
        <div className="bg-white p-4 rounded-b-xl pb-12">
          {loginTap === 0 && (
            <div className="bg-white p-4 rounded-b-xl">
              <form
                className="grid grid-row-4 gap-4"
                onSubmit={handleloginUser}
              >
                <div className="flex gap-1 ">
                  <button
                    className="round-full bg-gray-100 border-2 grid grid-cols-2  w-20 h-9  mt-1"
                    type="button"
                  >
                   <img
                    src="https://images.squarespace-cdn.com/content/v1/5b390ebb7e3c3a94b302e525/1584924462798-JHWGOCGWIGVHBIFE93UU/khmer.png"
                    alt="DipMart Logo"
                    className="w-5 h-5 object-contain  mt-1 ml-1"
                  /><span className="text-xs mt-2 -ml-1">+855</span>
                  </button>
                  
                  
                  <Input
                    label="Phone Number"
                    type={"number"}
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      setLoginInput(false);
                    }}
                    error={loginInput}
                  />
                </div>
                <Input
                  label="Password"
                  type={"password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setLoginInput(false);
                  }}
                  error={loginInput}
                />
                <p
                  onClick={() => setLoginTap(1)}
                  className="underline text-xs text-blue-900"
                >
                  Forgot password?
                </p>
                <button className="bg-blue-900 w-full h-10 rounded-lg text-white">
                  Login
                </button>
              </form>
            </div>
          )}
          {loginTap === 1 && (
            <>
              <h1 className="font-semibold text-center">Forgot Password</h1>
              <div className="bg-white p-4 rounded-b-xl">
                <form
                  onSubmit={ForgetPassword}
                  className="grid grid-row-4 gap-4"
                >
                  <h1 className="text-xs font-semibold">
                    Please enter your phone number to continue
                  </h1>
                  <div className="flex gap-1 my-3">
                  <button
                    className="round-full bg-gray-100 border-2 grid grid-cols-2  w-20 h-9  mt-1"
                    type="button"
                  >
                   <img
                    src="https://images.squarespace-cdn.com/content/v1/5b390ebb7e3c3a94b302e525/1584924462798-JHWGOCGWIGVHBIFE93UU/khmer.png"
                    alt="DipMart Logo"
                    className="w-5 h-5 object-contain  mt-1 ml-1"
                  /><span className="text-xs mt-2 -ml-1">+855</span>
                  </button>
                    <Input
                      label="Phone Number"
                      type={"number"}
                      value={forgotPassword}
                      onChange={(e) => setForgotPassword(e.target.value)}
                      error={forgotInput}
                    />
                  </div>
                  <Button className="bg-blue-900">Continue</Button>
                </form>
              </div>
            </>
          )}
          {loginTap === 2 ? (
            <form
              className="grid grid-row-4 gap-4"
              onSubmit={confirmOtpResetpw}
            >
              <div className="px-[20px]">
                <div className="pt-3 bg-white mb-[10px]">
                  <h1 className="font-bold text-[18px]">Phone Verifcation</h1>
                  <span className="text-xs text-gray-400">
                    Enter code sent to your phone
                  </span>
                  <div className="grid grid-cols-6 pt-5 pb-2 gap-2">
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp01}
                      onChange={(e) => setOtp01(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(1)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp02}
                      onChange={(e) => setOtp02(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(2)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp03}
                      onChange={(e) => setOtp03(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(3)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp04}
                      onChange={(e) => setOtp04(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(4)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp05}
                      onChange={(e) => setOtp05(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(5)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp06}
                      onChange={(e) => setOtp06(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(6)}
                      maxLength={1}
                    />
                  </div>
                </div>

                <span className="text-sm text-[#2B2F7E]">
                  Resend code in: <span className="text-blue-600">59sec</span>
                </span>
                <button
                  className="w-full py-4 text-center font-bold text-[14px] text-white rounded-lg mt-[20px]"
                  type="submit"
                  name="confirmOtpResetpw"
                >
                  Countinue
                </button>
              </div>
            </form>
          ) : null}
          {loginTap === 3 ? (
            <div>
              <div className="w-full flex justify-center my-5">
                <svg
                  width="142"
                  height="142"
                  viewBox="0 0 142 142"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2_2)">
                    <rect
                      x="30"
                      y="20"
                      width="82"
                      height="82"
                      rx="41"
                      fill="#32B768"
                    />
                  </g>
                  <path
                    d="M58.4722 61.5695L67.2037 70.1112L84.6667 53.0278"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2_2"
                      x="0"
                      y="0"
                      width="142"
                      height="142"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="15" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.25098 0 0 0 0 0.74902 0 0 0 0 1 0 0 0 0.24 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_2"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_2"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <small className="text-sm opacity-50 flex justify-center my-4">
                You Phone number has been successfully verified
              </small>
              <div className="w-full justify-center flex ">
                <button
                  className="w-full text-white py-3 mx-2 rounded-xl font-bold"
                  type="button"
                  onClick={() => setLoginTap(4)}
                  name="completeRequest"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null}
          {loginTap === 4 ? (
            <div>
              <h1 className="mb-4 text-lg font-bold">Create new Password</h1>
              <Input
                type="text"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={validatePassword}
              />
              <div className="text-sm my-4">
                <p>Must have 5-18 characters</p>
                <p>Must have at least 1 number & 1 letter</p>
                <p>Must not have spaces</p>
              </div>
              <div className="w-full justify-center flex ">
                <button
                  className="w-full text-white py-3 mx-2 rounded-xl font-bold"
                  type="button"
                  onClick={changePassword}
                  name="changePassword"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="bg-white p-4 rounded-b-xl pb-14">
          {signupTap === 0 ? (
            <form onSubmit={handleSignup} className="grid grid-row-4 gap-4">
              <h1 className="text-xs font-semibold">
                Register with Phone Number
              </h1>
              <div className="flex gap-1 my-3">
              <button
                    className="round-full bg-gray-100 border-2 grid grid-cols-2  w-20 h-9  mt-1"
                    type="button"
                  >
                   <img
                    src="https://images.squarespace-cdn.com/content/v1/5b390ebb7e3c3a94b302e525/1584924462798-JHWGOCGWIGVHBIFE93UU/khmer.png"
                    alt="DipMart Logo"
                    className="w-5 h-5 object-contain  mt-1 ml-1"
                  /><span className="text-xs mt-2 -ml-1">+855</span>
                  </button>
                <Input
                  label="Phone Number"
                  type={"number"}
                  value={usernameRegister}
                  onChange={(e) => setUsernameRegister(e.target.value)}
                  error={registerInput}
                />
              </div>
              <button className="bg-blue-900 w-full h-10 rounded-lg text-white">
                Continue
              </button>
            </form>
          ) : null}
          {signupTap === 1 ? (
            <form className="grid grid-row-4 gap-4" onSubmit={confirmOtp}>
              <div className="px-[20px]">
                <div className="pt-3 bg-white mb-[10px]">
                  <h1 className="font-bold text-[18px]">Phone Verifcation</h1>
                  <span className="text-xs text-gray-400">
                    Enter code sent to your phone
                  </span>
                  <div className="grid grid-cols-6 pt-5 pb-2 gap-2">
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp01}
                      onChange={(e) => setOtp01(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(1)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp02}
                      onChange={(e) => setOtp02(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(2)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp03}
                      onChange={(e) => setOtp03(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(3)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp04}
                      onChange={(e) => setOtp04(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(4)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp05}
                      onChange={(e) => setOtp05(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(5)}
                      maxLength={1}
                    />
                    <input
                      required
                      className="p-2 bg-blue-gray-50 text-center"
                      type="number"
                      value={otp06}
                      onChange={(e) => setOtp06(e.target.value.slice(0, 1))}
                      onKeyUp={() => tabChange(6)}
                      maxLength={1}
                    />
                  </div>
                </div>

                <span className="text-sm text-[#2B2F7E]">
                  Resend code in: <span className="text-blue-600">59sec</span>
                </span>
                <button
                  className="w-full py-4 text-center font-bold text-[14px] text-white rounded-lg mt-[20px]"
                  type="submit"
                  name="submitotp"
                >
                  Countinue
                </button>
              </div>
            </form>
          ) : null}
          {signupTap === 2 ? (
            <div>
              <div className="w-full flex justify-center my-5">
                <svg
                  width="142"
                  height="142"
                  viewBox="0 0 142 142"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2_2)">
                    <rect
                      x="30"
                      y="20"
                      width="82"
                      height="82"
                      rx="41"
                      fill="#32B768"
                    />
                  </g>
                  <path
                    d="M58.4722 61.5695L67.2037 70.1112L84.6667 53.0278"
                    stroke="white"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2_2"
                      x="0"
                      y="0"
                      width="142"
                      height="142"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="15" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.25098 0 0 0 0 0.74902 0 0 0 0 1 0 0 0 0.24 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2_2"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2_2"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <small className="text-sm opacity-50 flex justify-center my-4">
                You Phone number has been successfully verified
              </small>
              <div className="w-full justify-center flex ">
                <button
                  className="w-full  text-white py-3 mx-2 rounded-xl font-bold"
                  type="button"
                  onClick={() => setSignupTap(3)}
                  name="CompleteSignup"
                >
                  Continue
                </button>
              </div>
            </div>
          ) : null}
          {signupTap === 3 ? (
            <div>
              <h1 className="mb-4 text-lg font-bold">Create Password</h1>
              <Input
                type="text"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                error={validatePassword}
              />
              <div className="text-sm my-4">
                <p>Must have 5-18 characters</p>
                <p>Must have at least 1 number & 1 letter</p>
                <p>Must not have spaces</p>
              </div>
              <div className="w-full justify-center flex ">
                <button
                  className="w-full  text-white py-3 mx-2 rounded-xl font-bold"
                  type="button"
                  onClick={confirmSignup}
                  name="confirmSignup"
                >
                  Continue11
                </button>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Tab;
