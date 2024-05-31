// lib
import PropTypes from "prop-types";

function AdminLayout({ children }) {
  return (
    <div>
      <h1>Admin</h1>
      <main>{children}</main>
    </div>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
