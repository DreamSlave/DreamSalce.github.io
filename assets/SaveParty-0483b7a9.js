import{r as a,a as c,j as e}from"./index-b730de93.js";import{D as m,e as s,k as h}from"./react-datepicker-c61edaf4.js";const u=()=>{const[n,o]=a.useState(new Date),[r,i]=a.useState(new Date),l=t=>{console.log("data",t)},d=c(t=>t.party);return console.log(":partyInfo:",d),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("input",{})}),e.jsx("div",{children:e.jsx(m,{onChange:t=>l(t.id),dataItem:[{value:"메가커피",id:"001"},{value:"컴포즈커피",id:"002"}],children:e.jsx("span",{children:"카페이름"})})}),e.jsx("div",{children:e.jsx(s,{locale:h,dateFormat:"yyyy/MM/dd",shouldCloseOnSelect:!0,selected:n,minDate:new Date,onChange:t=>o(t)})}),e.jsx("div",{children:e.jsx(s,{selected:r,onChange:t=>i(t),showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:15,timeCaption:"Time",dateFormat:"hh:mm aa"})})]})};export{u as default};
