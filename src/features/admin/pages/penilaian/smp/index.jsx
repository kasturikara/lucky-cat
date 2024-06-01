import PropTypes from "prop-types";

function PenilaianSmpPages({ no }) {
  return (
    <div>
      PenilaianSmpPages <span>{no}</span>
    </div>
  );
}

PenilaianSmpPages.propTypes = {
  no: PropTypes.number,
};

export default PenilaianSmpPages;
