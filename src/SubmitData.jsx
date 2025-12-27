import { useState, useRef } from "react";

const genders = ["Male", "Female", "Others"];
const hobbiesList = ["Music", "Movies", "Plastic Model"];
const roles = ["General staff", "Developer", "System Analyst"];

export default function SubmitData() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({});

  const nameRef = useRef();
  const genderRef = useRef();
  const roleRef = useRef();
  const hobbyRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedHobbies = hobbyRef.current
      .filter((el) => el && el.checked)
      .map((el) => el.value);

    setData({
      name: nameRef.current.value,
      gender: genderRef.current.value,
      role: roleRef.current.value,
      hobbies: selectedHobbies,
    });

    setSubmitted(true);
  };

  return (
    <div style={{ padding: 20 }}>
      {submitted ? (
        <>
          <h2>Submission Value</h2>
          <p><b>Name:</b> {data.name}</p>
          <p><b>Gender:</b> {data.gender}</p>
          <p><b>Role:</b> {data.role}</p>
          <p><b>Hobbies:</b> {data.hobbies?.join(", ")}</p>

          <button onClick={() => setSubmitted(false)}>Go Back</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Submit Data Form</h2>

          <div>
            <label>Name</label><br />
            <input type="text" ref={nameRef} required />
          </div>

          <br />

          <div>
            <label>Gender</label><br />
            <select ref={genderRef}>
              {genders.map((g, i) => (
                <option key={i} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <br />

          <div>
            <label>Role</label><br />
            <select ref={roleRef}>
              {roles.map((r, i) => (
                <option key={i} value={r}>{r}</option>
              ))}
            </select>
          </div>

          <br />

          <div>
            <label>Hobbies</label><br />
            {hobbiesList.map((item, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  id={item}
                  name="hobbies"
                  value={item}
                  ref={(el) => (hobbyRef.current[index] = el)}
                />
                <label htmlFor={item}>{item}</label>
              </div>
            ))}
          </div>

          <br />

          {/* ✅ submit button just below the form */}
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
