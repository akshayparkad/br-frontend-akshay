import React, { useState } from 'react'
import './SingleGrid.css'
import Modal from '../Modal/Modal';

function SingleGrid({ title, content, image, author, dateNow, role, avatar }) {

    const [modalOpen, setModalOpen] = useState(false);


    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };


    const date = new Date(dateNow * 1000);

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const formattedDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    return (
        <div>
            <div className='box'>

                <img className="box-image" src={image} alt="News Image" />
                <div className="overlay">
                    <p className="learn-more" onClick={openModal}>Learn More</p>
                </div>
                <div className='color-circles'>
                    <span className="color-circle color-circle-blue"></span>
                    <span className="color-circle color-circle-orange"></span>
                </div>
                <h2 className="box-title" onClick={openModal}>{title}</h2>
                <p className="box-description">{content}</p>
                <div className="box-author-date">
                    <p className="box-author">{author} - {role}</p>
                    <p className="box-date">{formattedDate}</p>
                </div>
            </div>


            <Modal isOpen={modalOpen} onClose={closeModal}>
                <div className='box'>

                    <img className="box-image" src={image} alt="News Image" />

                    <div className='color-circles'>
                        <span className="color-circle color-circle-blue"></span>
                        <span className="color-circle color-circle-orange"></span>
                    </div>
                    <h2 className="box-title">{title}</h2>
                    <p className="box-description">{content}</p>

                    <div className='author-info'>
                        <div className="author-avatar">
                            <img src={avatar} alt="Author Avatar" />
                        </div>

                        <div className="box-author-date">
                            <p className="box-author">{author} - {role}</p>
                        </div>

                    </div>

                </div>
            </Modal>

        </div>
    )
}

export default SingleGrid