import Navbar from "../../Navbar";
import Sidebar from "../../Sidebar";
import Footer from "../../Footer";
import { useState } from "react";
import axios from "axios";
import Admins from "./Admins";

export default function CreateAdmin() {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    //Check need to add PW field
    role: ""
    // san7a: "",
  });

  const changeAdminField = (e) => {
    setAdminData({
        ...adminData,
        [e.target.name]: e.target.value
    });
    //console.log(userField);
}
const [loading,setLoading]=useState()

const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
        const response= await axios.post("http://127.0.0.1:8000/api/add_admin", adminData);
        console.log(response)
        alert("Admin Added successfully!")
        setLoading(true);
    } catch (error) {
        console.log("Something Wrong");
        alert("Try again, & Check all fields!")
    }
}
if(loading){
    return <Admins />
}

  return (
    <div className="container-scroller">
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="page-header">
              <h3 className="page-title">Add Admin</h3>
              <nav aria-label="breadcrumb">
                <a href="/Admins" className="btn btn-danger float-end">
                  Cancle
                </a>
              </nav>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Add Admin</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={e => onSubmitChange(e)} autoComplete="off">


                      <div className="form-group mb-3">
                        <label htmlFor="title">Full Name</label>
                        <input onChange={e => changeAdminField(e)} name="name" type="text" placeholder="Enter Admin Full Name" className={"form-control"} />
                        {/* {formik.errors.title && formik.touched.title && <p className="error">{formik.errors.title}</p>} */}
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="description">Email</label>
                        <input onChange={e => changeAdminField(e)} name="email" type="email" placeholder="Enter Admin Email" className={"form-control"} />
                        {/* {formik.errors.description && formik.touched.description && <p className="error">{formik.errors.description}</p>} */}
                      </div>

                      <div>
                        <label htmlFor="progress">Role</label>
                        <div className="input-group mb-3">
                          <select className="form-select" id="inputGroupSelect02" onChange={e => changeAdminField(e)} name="role" value={adminData.role}>
                            <option selected>Choose Admin Role...</option>
                            <option value="Teacher">Teacher</option>
                            <option value="Supervisor">Supervisor</option>
                          </select>
                          <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
                        </div>
                        <p className="error"></p>
                      </div>

                      <label htmlFor="title">Image</label>
                      <div className="input-group mb-3">
                        {/* <label htmlFor='title'>Image</label> */}
                        <input type="file" className="form-control" id="inputGroupFile02" name="admin_img" onChange={e => changeAdminField(e)} />
                        <label className="input-group-text" htmlFor="inputGroupFile02">
                          Upload
                        </label>
                      </div>
                      <div className="form-group mb-3">
                        <button type="submit" className="btn btn-primary">
                          Add task
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}