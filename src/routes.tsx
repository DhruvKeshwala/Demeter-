import  { lazy } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./constant";
import InternalServerError from "./components/Common/error/InternalServerError";
import NotFoundError from "./components/Common/error/NotFoundError";

const Signin = lazy(() => import("./auth/Signin/Signin"));
const VerificationCode = lazy(() => import("./auth/VerificationCode/VerificationCode"));
const ForgotPassword = lazy(() => import("./auth/ForgotPassword/ForgotPassword"));
const ResetPassSuccess = lazy(() => import("./auth/ResetPassSuccess/ResetPassSuccess"));
const NewPassword = lazy(() => import("./auth/NewPassword/NewPassword"));
const AccountDetails = lazy(() => import("./containers/AccountDetails/AccountDetails"));
const Reports = lazy(() => import("./containers/Reports/Reports"));
const PrivacyLegal = lazy(() => import("./containers/PrivacyLegal/PrivacyLegal"));
const Settings = lazy(() => import("./containers/Setting/Settings"));

export const authenticatedRoutes = [
  {
    path: "/",
    element: <Navigate to={ROUTES.ACCOUNT_DETAILS.PATH} replace />,
  },
  {
    path: ROUTES.ACCOUNT_DETAILS.PATH,
    element: <AccountDetails />,
  },
  {
    path: ROUTES.REPORTS.PATH,
    element: <Reports />,
  },
  {
    path: ROUTES.SETTINGS.PATH,
    element: <Settings />,
  },
   {
    path: ROUTES.PRIVACY_LEGAL.PATH,
    element: <PrivacyLegal />,
  },
  {
    path: "500",
    element: <InternalServerError />,
  },
  {
    path: "*",  
    element: <NotFoundError />,
  },
];

export const unauthenticatedRoutes = [
  {
    path: ROUTES.SIGN_IN.PATH,
    element: <Signin />,
  },
  {
    path: ROUTES.VERIFY_OTP.PATH,
    element: <VerificationCode />,
  },
  {
    path: ROUTES.FORGOT_PASSWORD.PATH,
    element: <ForgotPassword />,
  },
  {
    path: ROUTES.RESET_PASSWORD_SUCCESS.PATH,
    element: <ResetPassSuccess />,
  },
  {
    path: ROUTES.NEW_PASSWORD.PATH,
    element: <NewPassword />,
  },
];
