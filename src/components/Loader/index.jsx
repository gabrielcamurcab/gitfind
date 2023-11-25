import './styles.css';
import { TailSpin } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="loader-container">
            <TailSpin
                height="80"
                width="80"
                color="#fff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;