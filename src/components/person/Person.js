import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/Button'
import { ImZoomIn } from 'react-icons/im'
import { ImWrench } from 'react-icons/im'
import { ImCross } from 'react-icons/im'
import '../styles/Person.css'

const Person = ({ person, onDelete , onEdit , onLookUp, formStatus}) => {
    const id = person.name;
    const onClickFunc = () => {

    };
    return (
        <div className="personContainer">
            <img src={person.image} alt="rem" className="image" />
            <h5 className="name">{person.name}</h5>
            <div className='btn'> <Button icon={<ImZoomIn  />} onClickFunc = {onLookUp} id = {id} personInfo = {person} /></div>
            <div className='btn'> <Button icon={<ImWrench /> } onClickFunc = {onEdit} id = {id} personInfo = {person} /></div>
            <div className='btn'> <Button icon={<ImCross />} onClickFunc = {onDelete} id = {id} /> </div>
        </div>
    )
}

/*Person.defaultProps = {
    image: 'https://animehunch.com/wp-content/uploads/2020/06/Rem-Rezero.jpg',
}*/

Person.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
}
export default Person