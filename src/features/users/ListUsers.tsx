import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsersAsync } from './usersSlice';

export const ListUsers = () => {
  // subscribe to the store data of this feature
  const usersState = useSelector((state: any) => {
    console.log(state);
    return state.users;
  });
  console.log(usersState);
  // specifically to hit the api -- you must useDisptach 


  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchUsersAsync())
  }, []);
  
  return (
    <>
      <h2>List Users</h2>
      {/* Showing the loader */}
      {usersState?.isLoading && <div className="spinner spinner-border"></div>}

      {/* if error occurred */}
      {usersState?.isError && (
        <div className="alert alert-danger">{usersState.status}</div>
      )}

      {/* if we get the usersList data */}
      <div className="row">
        {usersState?.userList?.map((user: any) => (
          <div className="col-md-4" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  E-Mail: {user.email}
                </h6>
                <p className="card-text">Phone: {user.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
