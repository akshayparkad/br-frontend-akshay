import React, { useEffect, useState } from 'react'
import SingleGrid from '../SingleGrid/SingleGrid'
import './Home.css'
import { getAllPost } from '../../Api'

function Home() {

    const [posts, setPosts] = useState([]);

    const getPosts = async () => {

        const { data } = await getAllPost();
        setPosts(data);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className='home-container'>
            {
                posts.map(item => {

                    return (
                        <SingleGrid title={item.title} content={item.content} image={item.thumbnail.large} author={item.author.name} role={item.author.role} dateNow={item.date} avatar={item.author.avatar}/>
                    )
                })
            }
        </div>
    )
}

export default Home