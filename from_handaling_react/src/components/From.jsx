import React, { useState } from 'react';

function Form() {
    const [data, setData] = useState({
        name: "",
        email: "",
        occupation: "",
        gender: "",
        skills: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        console.log(name,value,type,checked);

        if (type === 'checkbox') {
            setData(prevData => {
                if (checked) {
                    return { ...prevData, skills: [...prevData.skills, value] };
                } else {
                    return { ...prevData, skills: prevData.skills.filter(skill => skill !== value) };
                }
            });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        
        localStorage.setItem('Userdata', JSON.stringify(data));
    };

    const handleReset = () => {
        const savedData = localStorage.getItem('Userdata');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Username</label>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        value={data.name}
                        name='name'
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={data.email}
                        name='email'
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="occupation" className="block text-gray-700 font-bold mb-2">Occupation</label>
                    <select
                        name="occupation"
                        onChange={handleChange}
                        value={data.occupation}
                        className="w-full px-3 py-2 border rounded-lg"
                    >
                        <option value="">--select--</option>
                        <option value="student">Student</option>
                        <option value="employee">Employee</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Gender</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="male" className="text-gray-700">Male</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="female" className="text-gray-700">Female</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="other" className="text-gray-700">Other</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">Skills</label>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            name="skills"
                            value="html"
                            onChange={handleChange}
                            checked={data.skills.includes("html")}
                            className="mr-2"
                        />
                        <label htmlFor="html" className="text-gray-700">HTML</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            name="skills"
                            value="css"
                            onChange={handleChange}
                            checked={data.skills.includes("css")}
                            className="mr-2"
                        />
                        <label htmlFor="css" className="text-gray-700">CSS</label>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="skills"
                            value="javascript"
                            onChange={handleChange}
                            checked={data.skills.includes("javascript")}
                            className="mr-2"
                        />
                        <label htmlFor="javascript" className="text-gray-700">JavaScript</label>
                    </div>
                </div>

                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700">Submit</button>
                    <button type='button' onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-700">Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
