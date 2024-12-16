import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { zTouch } from "react-syntax-highlighter/dist/esm/styles/prism";

function Forms() {

    //set state of each input feild to get data before submitting the form
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [skills, setSkills] = useState([]);
    const [gender, setGender] = useState("male");
    const [city, setCity] = useState("jaipur");
    // In this we have four skills in checkboxes so we created a function to handle this.
    // functionality :: if checkbox is checked then skills array we're putting the checked boxes values by using spred operator else using filter function with arrow function to remove unchecked boxes value
    const codeString = `
        handleSkills = (event) => {
            (event.target.checked)
                ? setSkills([...skills, event.target.value])
                : setSkills([...skills.filter((item) => item != event.target.value)]);
        } 
    `;
    const handleSkills = (event) => {
        (event.target.checked)
            ? setSkills([...skills, event.target.value])
            : setSkills([...skills.filter((item) => item != event.target.value)]);
    }
    return (
        <div className="container py-4">
            <h1 className="mb-4"><span className="badge bg-secondary">Form Elements in React</span></h1>

            {/* Name, Email, and Mobile Inputs */}
            <div className="mb-4">
                <label className="form-label">Name</label>
                <input
                    className="form-control"
                    type="text"
                    value={name}
                    placeholder="Enter name"
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="form-label">Email Address</label>
                <input
                    className="form-control"
                    type="text"
                    value={email}
                    placeholder="Enter email"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="form-label">Mobile</label>
                <input
                    className="form-control"
                    type="text"
                    value={mobile}
                    placeholder="Enter mobile"
                    onChange={(event) => setMobile(event.target.value)}
                />
            </div>
            <button
                className="btn btn-primary mb-4"
                onClick={() => [setName(""), setEmail(""), setMobile("")]}
            >
                Clear
            </button>

            {/* Display Input Values */}
            <div className="mb-4">
                <div>Email: <strong>{email}</strong></div>
                <div>Name: <strong>{name}</strong></div>
                <div>Mobile: <strong>{mobile}</strong></div>
            </div>

            <hr />

            {/* Skills Section */}
            <div className="mb-4">
                <h5>Select Your Skills</h5>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={handleSkills}
                        type="checkbox"
                        id="php"
                        value="Laravel"
                    />
                    <label className="form-check-label" htmlFor="php">Laravel</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={handleSkills}
                        type="checkbox"
                        id="reactjs"
                        value="ReactJS"
                    />
                    <label className="form-check-label" htmlFor="reactjs">ReactJS</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={handleSkills}
                        type="checkbox"
                        id="nextjs"
                        value="NextJS"
                    />
                    <label className="form-check-label" htmlFor="nextjs">NextJS</label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={handleSkills}
                        type="checkbox"
                        id="filament"
                        value="Filament"
                    />
                    <label className="form-check-label" htmlFor="filament">Filament</label>
                </div>
                <h5 className="mt-3">Selected Skills: <span className="text-primary">{skills.toString()}</span></h5>
            </div>

            <hr />

            {/* Gender Section */}
            <div className="mb-4">
                <h5>Select Gender</h5>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="male"
                        value="male"
                        onChange={(event) => setGender(event.target.value)}
                        checked={gender === "male"}
                    />
                    <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="female"
                        value="female"
                        onChange={(event) => setGender(event.target.value)}
                        checked={gender === "female"}
                    />
                    <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <h5 className="mt-3">Selected Gender: <span className="text-primary">{gender}</span></h5>
            </div>

            <hr />

            {/* City Selection */}
            <div className="mb-4">
                <label className="form-label">Select City</label>
                <select
                    className="form-select"
                    onChange={(event) => setCity(event.target.value)}
                    defaultValue="jaipur"
                >
                    <option value="jaipur">Jaipur</option>
                    <option value="mohali">Mohali</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="delhi">Delhi</option>
                </select>
                <h5 className="mt-3">Selected City: <span className="text-primary">{city}</span></h5>
            </div>
            <div>
                <ul class="list-group list-group">
                    <li class="list-group-item">
                        <h4>Lets discuss checkbox functionality</h4>
                        <pre>
                            <code>
                            <SyntaxHighlighter language="javascript" style={zTouch}>
                                {codeString}
                            </SyntaxHighlighter>
                            </code>
                        </pre>
                        <p>
                        In this we have four skills in checkboxes so we created a function to handle this.
                        </p>
                    
                    </li>
                    <li class="list-group-item">
                        <p>
                        functionality :: if checkbox is checked then skills array we're putting the checked boxes values by using spred operator <code>(...)</code> else using filter function with arrow function to remove unchecked boxes value
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Forms;