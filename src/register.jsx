import { useState } from "react";

const genders = ["Male", "Female", "Others"];
const hobbiesList = ["Music", "Movies", "Plastic Model"];
const roles = ["General staff", "Developer", "System Analyst"];

export default function Register() {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [role, setRole] = useState("");

  function onHobbiesToggle(event) {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setHobbies((prev) => [...prev, value]);
    } else {
      setHobbies((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Registration Form</h2>

      {/* Text inputs */}
      <div>
        <label>Username: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div>
        <label>Firstname: </label>
        <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
      </div>

      <div>
        <label>Lastname: </label>
        <input value={lastname} onChange={(e) => setLastname(e.target.value)} />
      </div>

      {/* Gender radio */}
      <h4>Gender</h4>
      {genders.map((g) => (
        <label key={g} style={{ marginRight: 12 }}>
          <input
            type="radio"
            value={g}
            checked={gender === g}
            onChange={(e) => setGender(e.target.value)}
          />
          {g}
        </label>
      ))}

      {/* Hobbies checkbox */}
      <h4>Hobbies</h4>
      {hobbiesList.map((h) => (
        <label key={h} style={{ marginRight: 12 }}>
          <input type="checkbox" value={h} onChange={onHobbiesToggle} />
          {h}
        </label>
      ))}

      {/* Role dropdown */}
      <h4>Apply Role</h4>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="">Select role</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <hr />

      {/* Display input data */}
      <h3>Display input data</h3>
      <p>Username: {username}</p>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Gender: {gender}</p>
      <p>Hobbies: {hobbies.join(", ")}</p>
      <p>Role: {role}</p>
    </div>
  );
}
