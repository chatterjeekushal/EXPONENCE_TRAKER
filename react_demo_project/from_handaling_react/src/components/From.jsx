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
        e.preventDefault();
        localStorage.setItem('Userdata', JSON.stringify(data));
    };

    const handleReset = () => {
        const savedData = localStorage.getItem('Userdata');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        placeholder='Enter your name'
                        value={data.name}
                        name='name'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={data.email}
                        name='email'
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="occupation">Occupation</label>
                    <select name="occupation" onChange={handleChange} value={data.occupation}>
                        <option value="">--select--</option>
                        <option value="student">Student</option>
                        <option value="employee">Employee</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label>Gender</label>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={handleChange}
                            checked={data.gender === "male"}
                        />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={handleChange}
                            checked={data.gender === "female"}
                        />
                        <label htmlFor="female">Female</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            onChange={handleChange}
                            checked={data.gender === "other"}
                        />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>

                <div>
                    <label htmlFor="skills">Skills</label>
                    <div>
                        <input
                            type="checkbox"
                            name="skills"
                            value="html"
                            onChange={handleChange}
                            checked={data.skills.includes("html")}
                        />
                        <label htmlFor="html">HTML</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="skills"
                            value="css"
                            onChange={handleChange}
                            checked={data.skills.includes("css")}
                        />
                        <label htmlFor="css">CSS</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="skills"
                            value="javascript"
                            onChange={handleChange}
                            checked={data.skills.includes("javascript")}
                        />
                        <label htmlFor="javascript">JavaScript</label>
                    </div>
                </div>

                <div>
                    <button type="submit">Submit</button>
                    <button type='button' onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
