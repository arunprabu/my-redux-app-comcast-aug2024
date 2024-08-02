import AddUser from "../features/users/AddUser"
import { ListUsers } from "../features/users/ListUsers"

const UsersPage = () => {
  return (
    <div className="container">
      <div className="row text-start">
        <h1>User Management</h1>
        <div className="col-md-4">
          <AddUser />
        </div>

        <div className="col-md-8">
          <ListUsers />
        </div>
      </div>
    </div>
  )
}

export default UsersPage
