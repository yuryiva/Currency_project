
import { Link } from 'react-router-dom'

const BackB = () => {
  

 

  return (
    <div className="dropdown_back_btn">
      <button
        className="btn btn-danger back_btn"
        type="button"
      >
        <Link to='/Charts' className="link"><i class="fas fa-arrow-left"></i> Back</Link>
      </button>
    </div>
  );
};

export default BackB;