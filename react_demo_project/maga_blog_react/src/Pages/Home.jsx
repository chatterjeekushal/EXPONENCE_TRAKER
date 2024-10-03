
import React, { useEffect, useState } from 'react'
import { Container, Postcard } from '../components'
import serviceInstance from '../appwrite/config'

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        serviceInstance.getPost([]).then((posts) => {

            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    if (posts.length === 0) {
        return (
            <Container>
                login to see posts
            </Container>
        )
    }

    return (
        <div>
            <Container>
                {posts.map((post) => {
                    return (
                        <Postcard {...post} />
                    )
                })}
            </Container>
        </div>
    )

}

export default Home
