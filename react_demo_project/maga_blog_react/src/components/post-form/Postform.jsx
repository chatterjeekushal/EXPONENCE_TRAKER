
import React,{useCallback} from 'react'

import { useForm } from 'react-hook-form'

import{Button,Input,Select} from '../index'
import serviceInstance from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Postform({post}) {


    const {register,handleSubmit,watch,setValue,control,getValues}=useForm({
        defaultValues:{
            title:post?.title || '',
            slug:post?.slug || '',
            status:post?.status || 'active',
           
            
        }
    })

    const navigate = useNavigate()
    const userdata=useSelector(state=>state.auth.userData)

    const onSubmit=async(data)=>{

        if(post){
           const file= data.image[0]? serviceInstance.uploadFile(data.image[0]):null

           if(file){

            serviceInstance.deleteFile(post?.featuredImage)
           }

           const dbpost=await serviceInstance.updatePost(post.$id,{...data,featuredImage:file? file.$id:undefined})
           console.log(dbpost)
           if(dbpost){
            navigate(`/post/${dbpost.$id}`) 
           }
        }

        else{

            const file= data.image[0]? serviceInstance.uploadFile(data.image[0]):null

            if(file){
               const fileId= file.$id

               data.featuredImage=fileId

              const dbpost= await serviceInstance.createPost({...data,userId:userdata.$id})
               if(dbpost){
                   navigate(`/post/${dbpost.$id}`)
               }
            }
        }
    }


    const slugTransform=useCallback((value)=>{
        if(value && typeof value==='string')

            // const slug=value.toLowerCase().replace(/ /g,'-')
            // setValue('slug',slug)
            // return slug

            return value.trim().toLowerCase().replace(/^[a-zA-Z\d\s]+/g,'-').replace(/\s+/g,'-')
            return ''
    },[])


React.useEffect(()=>{
const subscription=watch((value,{name})=>{
    if(name==='title'){
        setValue('slug',slugTransform(value.title,{shouldValidate:true}))
    }
})

return ()=>{
    subscription.unsubscribe()
}

},[watch,slugTransform,setValue])

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default Postform