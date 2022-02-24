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

import { useEffect, useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";


// @mui icons
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

import { InputPhone } from "components/InputPhone";
import { auth } from "api/auth";
import Typography from '@mui/material/Typography';


// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

function Basic() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.user.error);
  const username = useSelector(state => state.user.username);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate("/dashboard");
  }, [isLoggedIn])


  async function authorize(e) {
    e.preventDefault();
    await dispatch(auth({ login, password }))
  }

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={(e) => authorize(e)}>
            <MDBox mb={2}>
              <FormControl required fullWidth value={username || login}>
                <InputPhone value={username || login} type="tel" fullWidth label="Номер телефона" required name="login" onChange={e => setLogin(e.target.value.split(' ').join(''))} />
              </FormControl>
            </MDBox>
            <MDBox mb={1}>
              <FormControl required fullWidth>
                <MDInput type="password" label="Пароль" name="password" required fullWidth onChange={e => setPassword(e.target.value)} />
              </FormControl>
            </MDBox>
            {error && <Typography sx={{ color: "red", fontSize: "13px", textAlign: "center" }}>{error}</Typography>}
            <MDBox mt={2} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" fullWidth>
                Авторизация
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography
                component={Link}
                to="/authentication/forgot"
                variant="button"
                color="info"
                fontWeight="medium"
                textGradient
              >
                Забыли пароль?
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
