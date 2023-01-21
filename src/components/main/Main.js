import React from "react";
import "../styles/Main.css";
import { useState } from "react";
import Person from "../person/Person";
import { ImUserPlus } from "react-icons/im";
import { ImMagicWand } from "react-icons/im";
import Button from "../button/Button";
import PopUpForm from "../form/PopUpForm";

function Main() {
  //my phone book that starts with existing people people
  const [name , setName] = useState("moneer");
  const [people, setPeople] = useState([
    {
      name: "Batman",
      number: "123456",
      address: "Gotham",
      image: "https://i.ytimg.com/vi/TwYECrStWlY/maxresdefault.jpg",
      description: "the saviour",
    },
    {
      name: "Joker",
      number: "1234111536",
      address: "Gotham",
      image: "https://www.kget.com/wp-content/uploads/sites/2/2022/03/Batman-Movies-Ranked.jpg?w=1280",
      description: "the fallen",
    },
    {
      name: "Rem",
      number: "123422536",
      address: "In the mansion",
      image: "https://animehunch.com/wp-content/uploads/2020/06/Rem-Rezero.jpg",
      description: "The best ",
    }
  ]);
  //this  is used to change the form status
  const [popUpStatus, setPopUpStatus] = useState("");
  
  //this is used to help with the search bar and store the input 
  const [searchTerm, setSearchTerm] = useState("");

  //adds a person to the phone book
  const addPerson = (person) => {
    const newPerson = {  ...person };
    let flag = true;
    people.map((person2) => {
      if(person2.name === person.name)
          flag = false;
    });
    if(flag || people.length === 0)
    setPeople([...people, newPerson]);
  };
  //deletes a person from the book
  const deletePerson = (name) => {
    setPeople(people.filter((person) => person.name !== name));
  };
  
  // we use this object state to pass as a parameter to the form and get the person info we are trying to edit
  const [personInformation, setPersonInformation] = useState(
    {
    name: "",
    number: "",
    address: "",
    image: "",
    description: " "
  });

  //opens the selected person information in a form
  const openPersonInformationInForm = (id, personInfo) => {
    changePopUpStatusToEdit(personInfo);
  };

  //edit a person in the phonebook
  const changePersonInfoInPhonebook = (personToChange , prevPerson) => {
    
    console.log(personToChange.address)

    setPeople(
      people.map((person)=> 
        person.name === prevPerson.name ?
        {
          ...people
          , name : personToChange.name
          ,number : personToChange.number
          ,address : personToChange.address
          ,image : personToChange.image
          ,description : personToChange.description
        } : person
      ) 
    )
    console.log(people)
    console.log(personToChange,"person to change")
    console.log(prevPerson, "previous person")
    console.log(people)

  }
  //opens the person information in the book without editing them
  const lookUpPerson = () => {
    console.log("LookUp");
  };

  //changes the state to add to open my popup form
  const changePopUpStatusToAdd = () => {
      setPopUpStatus("add");
  }
  //changes the state to close my popup form
  const changePopUpStatusToEdit = (personInfo) => {
    setPersonInformation(personInfo);
    setPopUpStatus("edit");
    
  }

  //changes the state to lookUp so we can open the information form
  const changePopUpStatusToLookUp = (id, personInfo) => {
    setPersonInformation(personInfo);
    setPopUpStatus("lookUp");
  }
  //closes the form
  const changePopUpStatusToClose = () => {
    setPopUpStatus("");
  }

  //clears the phone book
  const clearPhoneBook = () =>{
    setPeople(people.filter((person) => person.name === "I Cast delete magic on my array"));
  }
  
  //checks the popUpStatus and opens the right form for the job
  const buildForm = (personInfo) => {
    if(popUpStatus === "add")
    return (<PopUpForm addPerson={addPerson} popUpStatus = {popUpStatus}  onClickFuncClose={changePopUpStatusToClose} personInfo />)
    if(popUpStatus === "edit")
     return <PopUpForm addPerson={changePersonInfoInPhonebook} popUpStatus = {popUpStatus}  onClickFuncClose={changePopUpStatusToClose} personInfo = {personInfo} />
    if(popUpStatus === "lookUp")
    return <PopUpForm addPerson={lookUpPerson} popUpStatus = {popUpStatus}  onClickFuncClose={changePopUpStatusToClose} personInfo = {personInfo} />
    
  }

  return (
    <div className="container">
      <div className="btnHeader">
        <Button icon={<ImUserPlus />} onClickFunc = {changePopUpStatusToAdd} />
        <Button icon={<ImMagicWand />} onClickFunc={clearPhoneBook} />
        <input type="text" placeholder="search" onChange={(e) =>{setSearchTerm(e.target.value);}}  />
        <h2>{searchTerm}</h2>
      </div>
      <div className="popupForm">
          
        {buildForm(personInformation)}
        
      </div>

     
      {people.length > 0 ? people.filter((person) =>{
        if (searchTerm === ""){
         return person
        }
        else if (person.name.toLowerCase().includes(searchTerm.toLowerCase()))
        {
          return person
        }
    }).sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1: -1)
     .map((person) => (
        <Person
          key={person.name}
          person={person}
          onDelete={deletePerson}
          onEdit={openPersonInformationInForm}
          onLookUp={changePopUpStatusToLookUp}
          formStatus = {popUpStatus}
        />
      )): <img src="https://cdn.dribbble.com/users/888330/screenshots/2653750/empty_data_set.png" alt="something went wrong"></img>}
    </div>
  );
}

export default Main;
