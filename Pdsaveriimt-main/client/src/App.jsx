 import React, { useState } from 'react'
 import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
 import Header from './components/Header'
 import Home from './components/Home'
 import Login from './components/Authentication/Login'
 import Signup from './components/Authentication/Signup'
 import MyContext from './components/Mycontext'
 import Sendpdf from './components/UserPdfsend/Sendpdf'
 import Infouserfron from './components/Authentication/Infouserfron'
 import Logout from './components/Authentication/Logout'
 import Departmentpdf from './components/UserPdfsend/Departmentpdf'
 import Notessubject from './components/UserPdfsend/Notessubject'
 import Deparbranchyear from './components/UserPdfsend/Deparbranchyear'
 import Allpdfview from './components/UserPdfsend/Allpdfview'
 const App = () => {
  const [department,setDepartment]=useState("");
  const [username,setUsername]=useState(0);
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  const [name,Setname]=useState("")
   return (
    <MyContext.Provider value={{department,setDepartment,username,setUsername,password,setPassword,email,setEmail,name,Setname}}>
       <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
            <Route path="/sendpdf" element={<Sendpdf />} />
               <Route path="/userInfo" element={<Infouserfron />} />
                  <Route path="/userlogedout" element={<Logout />} />
                  <Route path="/userdepartmentpdf" element={<Departmentpdf />} />
                         <Route path="/notessubjectwise" element={<Notessubject />} />
                              <Route path="/branchdeaprtemntyear" element={<Deparbranchyear />} />
                                <Route path="/getallview" element={<Allpdfview />} />
          </Routes>
       </BrowserRouter>
       </MyContext.Provider>
   )
 }
 
 export default App
 