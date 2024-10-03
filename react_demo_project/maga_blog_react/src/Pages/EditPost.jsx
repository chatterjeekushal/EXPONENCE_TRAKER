
import React ,{useEffect, useState} from 'react'
import { Container,Postform } from '../components'
import serviceInstance from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'
function EditPost() {

    const [post, setPost] = useState({})
    const {slug}=useParams()
const navigate = useNavigate()

    useEffect(() => {
        serviceInstance.getPost([slug]).then((post) => {
            if (post) {
                setPost(post.documents[0])
            }else{
                navigate('/')
            }
        })
    }, [slug,navigate])

  return post?(
    <div>
        <Container>
            <Postform post={post} />
        </Container>
    </div>
  ):null
}

export default EditPost
