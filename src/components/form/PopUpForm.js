import React from "react";
import { useState } from "react";
import '../styles/PopUpForm.css'
import Button from "../button/Button";
import { ImCross } from "react-icons/im";
const PopUpForm = ({addPerson, popUpStatus, onClickFuncClose, personInfo}) => {
    
    const [name, setName] = useState(personInfo.name);
    const [number, setNumber] = useState(personInfo.number);
    const [address, setAddress] = useState(personInfo.address);
    const [image, setImage] = useState("https://files.worldwildlife.org/wwfcmsprod/images/Lion_WWFGIFTS_cover_2020/magazine_small/2wafu1bmcz_b21fc8e6.jpeg");
    const [description, setDescription] = useState(personInfo.description);
    const addToPeople = (e) => {
        e.preventDefault();
        addPerson({name, number, address, image, description})
        onClickFuncClose();
    }
    

    const editThePerson = (e) => {
      e.preventDefault();
        addPerson({name, number, address, image, description}, personInfo);
        onClickFuncClose();
    }

    const updatedForm = () => {
        switch(popUpStatus)
        {
            case "add":  return  (
                <div>
              <div className="closeBtn"><Button icon={<ImCross/>} onClickFunc={onClickFuncClose}/> </div>
              <form className="form" onSubmit={addToPeople}>

                <div className="form-control">
                  <label>Name</label>
                  <input type="text" placeholder="Add name" value={name}  onChange = {(e) => setName(e.target.value)} required = {true} />
                </div>
          
                <div className="form-control">
                  <label>Number</label>
                  <input type="number" placeholder="Add phone number" value={number} onChange = {(e) => setNumber(e.target.value)} required = {true} />
                </div>
          
                <div className="form-control">
                  <label>Address</label>
                  <input type="text" placeholder="Add address" value={address} onChange = {(e) => setAddress(e.target.value)} />
                </div>
          
                <div className="form-control">
                  <label>Image</label>
                  <input type="text" placeholder="Add image url" value={image} onChange = {(e) => setImage(e.target.value)} required = {true} />
                </div>
          
                <div className="form-control">
                  <label>Description</label>
                  <input type="text" placeholder="Add description " value={description} onChange = {(e) => setDescription(e.target.value)} />
                </div>
                
                <input type='submit' value='Add to phone book'/>
              </form>
              </div>
            ) ;
            case "edit" : return ( <div>
                <div className="closeBtn"><Button icon={<ImCross/>} onClickFunc={onClickFuncClose}/> </div>
              <form className="form" onSubmit={editThePerson}>
                <div className="form-control">
                  <label>Name </label>
                  <input type="text" placeholder={"Add name"} defaultValue={personInfo.name} onChange = {(e) => setName(e.target.value)} />
                </div>
          
                <div className="form-control">
                  <label>Number</label>
                  <input type="number" placeholder="Add phone number" defaultValue={personInfo.number} onChange = {(e) => setNumber(e.target.value)} />
                </div>
          
                <div className="form-control">
                  <label>Address</label>
                  <input type="text" placeholder="Add address" defaultValue={personInfo.address} onChange = {(e) => setAddress(e.target.value)} />
                </div>
          
                <div className="form-control">
                  <label>Image</label>
                  <input type="text" placeholder="Add image url" defaultValue={personInfo.image} onChange = {(e) => setImage(e.target.value)} />
                </div>
          
                <div className="form-control">
                  <label>Description</label>
                  <input type="text" placeholder="Add description " defaultValue={personInfo.description} onChange = {(e) => setDescription(e.target.value)} />
                </div>
                
                <input type='submit' value='Add to phone book'/>
              </form>
            </div>);

            case "lookUp" : return ( <div className="infoForm">
                <div className="closeBtn"><Button icon={<ImCross/>} onClickFunc={onClickFuncClose}/> </div>
              <form className="form">
                <div className="form-control">
                  <label>Name: {personInfo.name} </label>
                </div>
                <div className="form-control">
                  <label>Number: {personInfo.number} </label>
                </div>
                <div className="form-control">
                  <label>Address: {personInfo.address}</label>
                </div>
                <div className="form-control">
                  <label>Description: {personInfo.description}</label>
                </div>
              </form>
            </div>);

            default: return "";
        }
    }
  return  (
      <>
      
       {updatedForm(popUpStatus)};
    </>
  ) ;
};

export default PopUpForm;
