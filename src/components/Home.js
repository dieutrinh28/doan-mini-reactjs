import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <Link to={`/login`}>
            <button>Trang đăng nhập</button>
        </Link>
        <Link to={`/list`}>
            <button>Trang sản phẩm</button>
        </Link>
        </>
    )
}
export default Home;