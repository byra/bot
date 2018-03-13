import {v4} from "uuid";

export const chatMessages = (state = [], action)=>{
    let userResponse = null;
    let customRequest = null;
    switch(action.type){
        case "start":
            userResponse = null;
            customRequest = null;
            if(action.payload !== null){
                if(action.payload.tracker.latest_message.text === "Main Menu"){
                    userResponse = action.payload.tracker.latest_message.text;
                }else {
                    customRequest = action.payload.tracker.latest_message.text;
                }
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    url:null,
                    reply:["Welcome to Technical support! My name is Tina."],
                    response:"What can I help you with today?",
                    buttons:["Internet Connectivity Issues", "Account and Billing"]
                }
            ];

        case "Internet Connectivity Issues":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Wifi Connection"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Thank you, I can definitely help you out with Internet Connectivity Issues."],
                    response:"Which of the following best describe your problem",
                    url:null,
                    buttons:["Forgot Network Name", "Forgot Wifi Password", "Reached Device Limit"]
                }

            ];

        case "Validation":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Helpful"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["We are happy to have solve your issue today. For other queries click on Main Menu."],
                    response:"Have a great day!",
                    url:null,
                    buttons:["Main Menu"]
                }
            ];
        case "Account & Billing":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Account & Billing"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Thank you, I can definitely help you out with the Account."],
                    response:null,
                    url:null,
                    buttons:["Forgot Account ID","Forgot Account Pass Code"]
                }
            ];
        case "Not Helpful":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Not Helpful"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["What is your email address?"],
                    response:"We will get back to you soon on this issue.",
                    url:null,
                    buttons:[]
                }
            ];

        case "EmailId":
            userResponse = null;
            customRequest  = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Your request has been submitted with ticket number "+ v4()],
                    response:"For other queries click on Main Menu.",
                    url:null,
                    buttons:["Main Menu"]
                }
            ];
        case "Greeting":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Hello there"],
                    response:"I can help you with the following",
                    url:null,
                    buttons:["Wifi Connection", "Account & Billing"]
                }
            ];

        case "Bye":
            userResponse = null;
            customRequest = action.payload.tracker.latest_message.text;
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["Its my pleasure helping you out"],
                    response:"For other queries click on Main Menu.",
                    url:null,
                    buttons:["Main Menu"]
                }
            ];
        case "Forgot Network Name":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Forgot Network Name"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["I can help you with network information"],
                    response:"More about network information can be found in this link below.",
                    url:null,
                    buttons:["Helpful", "Not Helpful"]
                }
            ];

        case "Forgot Wifi Password":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Forgot Wifi Password"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["I can help you with your password"],
                    response:"You can reset your in below link",
                    url:null,
                    buttons:["Helpful", "Not Helpful"]
                }
            ];

        case "Reached Device Limit":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Reached Device Limit"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["I can help you with device limit"],
                    response:"You can add or remove your devices in below link",
                    url:null,
                    buttons:["Helpful", "Not Helpful"]
                }
            ];
        case "Forgot Account ID":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Forgot Account ID"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["I can help you with account information"],
                    response:"You retrieve your account details from the link below",
                    url:null,
                    buttons:["Helpful", "Not Helpful"]
                }
            ];
        case "Forgot Account Pass Code":
            userResponse = null;
            customRequest = null;
            if(action.payload.tracker.latest_message.text === "Forgot Account Pass Code"){
                userResponse = action.payload.tracker.latest_message.text;
            }else {
                customRequest = action.payload.tracker.latest_message.text;
            }
            return [
                ...state,
                {
                    userResponse:userResponse,
                    customRequest:customRequest,
                    reply:["I can help you with account password"],
                    response:"You can reset password from the link below given right details",
                    url:null,
                    buttons:["Helpful", "Not Helpful"]
                }
            ];
        default:
            return state;
    }
};

