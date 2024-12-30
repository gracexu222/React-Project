import React, { useEffect } from "react";
import { fetchUsers } from "./redux/userAction";
import { connect } from "react-redux";

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (!userData) {
    return <p> Loading...</p>;
  }
  if (userData.loading) {
    return <p>Loading...</p>;
  }
  if (userData.error) {
    return <h2>Error:{userData.error}</h2>;
  }
  if (!userData.user || userData.users.length === 0) {
    return <h2>No users found.</h2>;
  }

  return (
    <div>
      <h2>User List</h2>
      <div>
        {userData.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  userData: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
