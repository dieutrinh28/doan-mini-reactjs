import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from "react-bootstrap";
import '../App.css';

function Login() {
    const form = useFormik({
        initialValues: {
            phone: "",
            password: "",
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .matches(/^0[0-9]*$/, "Số điện thoại phải bắt đầu bằng 0 và chỉ được nhập số")
                .min(10, "Số điện thoại tối thiểu 10 số")
                .max(11, "Số điện thoại tối thiểu 11 số")
                .required("Vui lòng nhập số điện thoại"),
            password: Yup.string()
                .matches(/(?=.*\d)(?=.*\w).+/, "Mật khẩu bắt buộc có cả chữ và số")
                .min(6, "Mật khẩu tối thiểu có 6 ký tự")
                .required("Vui lòng nhập mật khẩu"),
        }),
        onSubmit: (values) => {
            window.alert("Đăng nhập thành công");
        }
    });
    return (
        <div className="App-login" style={{margin:"10rem"}}>
            <Form className="infoform" onClick={form.handleSubmit}>
                <div>
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={form.values.phone}
                        onChange={form.handleChange}
                        placeholder="Số điện thoại"
                    />
                    {form.errors.phone && (
                        <p className="">*{form.errors.phone}</p>
                    )}
                </div>
                <div>
                    <label>Mật khẩu</label>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        value={form.values.password}
                        onChange={form.handleChange}
                        placeholder="Mật khẩu"
                    />
                    {form.errors.password && (
                        <p className="">*{form.errors.password}</p>
                    )}
                </div>
                <button type="submit">Đăng nhập</button>
            </Form>
        </div>
        );
}

export default Login;