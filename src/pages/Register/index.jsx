import Header from "../../components/Header";
import React from "react";
import UserRestaurant from "../../components/UserRestaurant";
import UserRegistration from "../../components/UserRegistration";
import ContinueButton from "../../components/ContinueButton";
import Footer from "../../components/Footer";


const Register = () => {
  return (
    <>
    <Header/>
    <UserRestaurant/>
    <UserRegistration/>
    <ContinueButton/>
    <Footer/>
    </>
    
  );
}

export default Register;