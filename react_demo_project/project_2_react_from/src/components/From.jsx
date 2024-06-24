import React from 'react';
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className=" h-[80vh] bg-gray-100  flex mt-3 justify-center">
            <form action="" onSubmit={handleSubmit(onSubmit)} className="" >
                {/* Username verification */}
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Enter your username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        {...register("username", {
                            required: { value: true, message: "Username is required" },
                            minLength: { value: 3, message: "Username must be at least 3 characters" },
                            maxLength: { value: 20, message: "Username must be less than 20 characters" },
                        })}
                    />
                    {errors.username && <span className="text-red-600 text-sm">{errors.username.message}</span>}
                </div>

                {/* Password verification */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Enter your Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        {...register("password", {
                            required: { value: true, message: "Password is required" },
                            minLength: { value: 8, message: "Password must be at least 8 characters" },
                            maxLength: { value: 20, message: "Password must be less than 20 characters" },
                        })}
                    />
                    {errors.password && <span className="text-red-600 text-sm">{errors.password.message}</span>}
                </div>

                {/* Select:option verification */}
                <div className="mb-4">
                    <label htmlFor="idf" className="block text-sm font-medium text-gray-700">Select your Catagory</label>
                    <select
                        name="idf"
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        {...register("idf", { required: { value: true, message: "Please select your option" } })}
                    >
                        <option value="" selected disabled>Select one</option>
                        <option value="employ">Employ</option>
                        <option value="student">Student</option>
                    </select>
                    {errors.idf && <span className="text-red-600 text-sm">{errors.idf.message}</span>}
                </div>

                {/* Gender verification */}
                <div className="mb-4 text-black">
                    <label className="block text-sm font-medium text-gray-700">Select Your Gender</label>
                    <span className="mt-1 flex gap-3 justify-center items-center">
                        <span><input type="radio" value="male" name="gender" {...register("gender", { required: { value: true, message: "Please select your gender" } })} /> Male</span>
                        <span><input type="radio" value="female" name="gender" {...register("gender", { required: { value: true, message: "Please select your gender" } })} /> Female</span>
                        <span><input type="radio" value="other" name="gender" {...register("gender", { required: { value: true, message: "Please select your gender" } })} /> Other</span>
                    </span>
                    {errors.gender && <span className="text-red-600 text-sm">{errors.gender.message}</span>}
                </div>

                <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">select your profession</label>
    <div className="mt-1 text-black grid grid-cols-3 gap-2">
        <div><input type="checkbox" name="skill" value="web developer" {...register("skill", { required: { value: true, message: "Please select your skills" } })} /> Web Developer</div>
        <div><input type="checkbox" name="skill" value="app developer" {...register("skill", { required: { value: true, message: "Please select your skills" } })} /> App Developer</div>
        <div><input type="checkbox" name="skill" value="ui/ux designer" {...register("skill", { required: { value: true, message: "Please select your skills" } })} /> UI/UX Designer</div>
        <div><input type="checkbox" name="skill" value="data science" {...register("skill", { required: { value: true, message: "Please select your skills" } })} /> Data Science</div>
    </div>
    {errors.skill && <span className="text-red-600 text-sm">{errors.skill.message}</span>}
</div>

                <input type="submit" className="bg-blue-500 text-white p-2 rounded w-full cursor-pointer" />
            </form>
        </div>
    );
}

export default Form;
