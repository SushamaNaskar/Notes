import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/actions/userActions";
import {
  selectUserList,
  selectUsersLoading,
  selectUsersError,
} from "../redux/selectors/userSelectors";

const UserList = ({ users, loading, error, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  users: selectUserList(state),
  loading: selectUsersLoading(state),
  error: selectUsersError(state),
});

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
