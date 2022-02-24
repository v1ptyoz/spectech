/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components


// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { InputPhone } from "components/InputPhone";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { ForgotPassword } from "api/forgot";
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";


function Forgot() {
  const [login, setLogin] = useState('');
  const [code, setCode] = useState('');
  const [wrongCode, setWrongCode] = useState();
  const [sended, setSended] = useState(false);
  const userCode = useSelector(state => state.user.code);
  const error = useSelector(state => state.user.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userCode) setSended(true);
  }, [userCode])

  async function submitCode(e) {
    e.preventDefault();
    if (code === "11111") {
      navigate("/authentication/sign-in");
    } else {
      setWrongCode("Неверный код");
    }

  }

  async function checkPhone(login) {
    if (!login) {
      dispatch({ type: "SET_ERROR", payload: "Поле не может быть пустым" })
    } else {
      await dispatch(ForgotPassword({ login }));
    }
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={e => submitCode(e)}>
            <MDBox mb={2}>
              <InputPhone type="tel" name="phone" label="Телефон" required fullWidth onChange={e => setLogin(e.target.value.split(' ').join(''))}>
              </InputPhone>
            </MDBox>
            {sended && !error && <MDBox mb={2}>
              <MDInput label="Проверочный код" required fullWidth onChange={e => setCode(e.target.value)}>
              </MDInput>
            </MDBox>}
            {error && <Typography sx={{ color: "red", fontSize: "13px", textAlign: "center" }}>{error}</Typography>}
            {wrongCode && <Typography sx={{ color: "red", fontSize: "13px", textAlign: "center" }}>{wrongCode}</Typography>}
            <MDBox mt={2} mb={1}>
              {!sended && <MDButton variant="gradient" color="info" fullWidth onClick={() => checkPhone(login)}>
                Отправить смс
              </MDButton>}
              {sended && <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Отправить
              </MDButton>}
            </MDBox>

          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Forgot;
