import * as yup from "yup";
import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
   name: yup.string().required().min(3),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
    dob: yup.date().required("Required"),
    parentName: yup.string().required("Required").min(3),
    parentPhone: yup.string().required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),

});
export const taskSchema = yup.object().shape({
    title: yup.string().required("Required").min(3),
    description: yup.string().required("Required").min(3),
    progress: yup.number().required("Required"),
    deadline: yup.string().required("Required")
 });


 export const ClassroomSchema = Yup.object().shape({
     name: Yup.string().required('Name is required'),
     level: Yup.string().required('Level is required'),
     admin_id: Yup.string().required('Admin must be selected'),
 });
 
 export const StudentclassSchema = Yup.object().shape({
     
     user_id: Yup.string().required('Admin must be selected'),
     classroom_id: Yup.string().required('class must be selected'),
 });
 
 