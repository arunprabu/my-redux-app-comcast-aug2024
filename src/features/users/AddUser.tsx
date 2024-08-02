import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUserAsync } from "./usersSlice";

const AddUser = () => {

  const dispatch = useDispatch<any>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log(name)
    console.log(value)
    setFormData({
      ...formData,
      [name]: value, // in js computed object property -- learn about it later
    })
  }

  const handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
    dispatch(addUserAsync(formData))
  }

  return (
    <>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneInput"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
          {/* {usersState.isLoading ? "Submitting..." : "Submit"} */}
        </button>
      </form>
    </>
  )
}

export default AddUser