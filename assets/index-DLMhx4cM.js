import{r as u,j as e}from"./react-RCQyz0-a.js";import{F as r,I as c,B as p,M as x}from"./antd-TeelbU8d.js";import{U as h,N as j}from"./@ant-design-BA9tpmVs.js";const I=({error:s,setError:n,onSubmit:l})=>{const[o,a]=u.useState(!1),[t,m]=u.useState(" "),d=async i=>{a(!0),await l(i),a(!1)};return e.jsxs(r,{autoComplete:"off",onChange:()=>n(""),onFinish:d,children:[e.jsx(r.Item,{required:!0,name:"username",label:"Логин",validateStatus:s||!t?"error":"success",help:s&&s||!t&&"Пожалуйста, введите логин!",children:e.jsx(c,{onChange:i=>m(i.target.value),value:t,prefix:e.jsx(h,{}),placeholder:"Логин"})}),e.jsx(r.Item,{name:"password",label:"Пароль",rules:[{required:!0,message:"Пожалуйста, введите пароль!"}],children:e.jsx(c.Password,{prefix:e.jsx(j,{}),placeholder:"Пароль"})}),e.jsx(r.Item,{children:e.jsx(p,{disabled:o||!!s||!t.trim(),type:"primary",htmlType:"submit",children:"ОК"})})]})},b=({title:s,text:n,isOpen:l,setIsModalOpen:o,setAuth:a})=>{const t=()=>{o(!1),a(!0)};return e.jsx(x,{title:s,open:l,footer:null,onCancel:t,children:e.jsx("p",{children:n})})};export{b as P,I as U};
