import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div class="homepage">
            <Link to={`/login`}>
                <button class="btn__homepage btn__login">Trang đăng nhập</button>
            </Link>
            <Link to={`/list`}>
                <button class="btn__homepage btn__product">Trang sản phẩm</button>
            </Link>
        </div>
    )
}
export default Home;