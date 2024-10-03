
import React, { useState, useEffect } from 'react'
import serviceInstance from '../appwrite/config'
import { Container, Postcard } from '../components'
function AllPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => { }, [])

    serviceInstance.getPost([]).then((posts) => {

        if (posts) {
            setPosts(posts.documents)
        }
    })

    return (
        <div>
            <Container>
                <div>
                    {posts.map((post) => {

                        return (

                            <div key={post.$id}>
                                <Postcard post={post} />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts
