
export const ROUTES = {
    SIGN_IN: { TITLE: "Sign In", PATH: "/signin" },
    VERIFY_OTP: { TITLE: "Verify otp", PATH: "/verify-otp" },
    FORGOT_PASSWORD: { TITLE: "Forgot Password", PATH: "/forgot-password" },
    RESET_PASSWORD_SUCCESS: { TITLE: "Reset-paasword-successfully", PATH: "/reset-paasword-successfully" },
    NEW_PASSWORD: { TITLE: "New Password", PATH: "/new-password" },
    ACCOUNT_DETAILS: { TITLE: "Account Details", PATH: "/account-details" },
    REPORTS: { TITLE: "Reports", PATH: "/reports" },
    REDEMPTION_REQUEST: { TITLE: "Redemption Request", PATH: "/redemption-request" },
    SETTINGS: { TITLE: "Settings", PATH: "/settings" },
    PRIVACY_LEGAL: { LABEL :"Privacy & Legal", TITLE: "Demeter investment holdings", PATH: "/Privacy-Legal", },
};

export const SETTINGS_ITEMS = {
    EMAIL_ADDRESS: { KEY: '1', LABEL: 'Email Address' },
    CONTACT_NUMBER: { KEY: '2', LABEL: 'Contact number' },
    PASSWORD: { KEY: '3', LABEL: 'Password', }
}

export const REPOTS_TABLE_COLUMNS = {
    DATE: {
        TITLE: 'Date',
        DATA_INDEX: 'Date',
        KEY: 'Date',
    },
    DEPOSITS: {
        TITLE: 'Deposits',
        DATA_INDEX: 'Deposits',
        KEY: 'Deposits',
    },
    OPENING_BALANCE: {
        TITLE: 'Opening balance',
        DATA_INDEX: 'Opening balance',
        KEY: 'Opening balance',
    },
    PROFIT_LOSS: {
        TITLE: 'Profit/Loss',
        DATA_INDEX: 'Profit/Loss',
        KEY: 'Profit/Loss',
    },
    CLOSING_BALANCE: {
        TITLE: 'Closing balance',
        DATA_INDEX: 'Closing balance',
        KEY: 'Closing balance',
    },
    WITHDRAWAL: {
        TITLE: 'Withdrawal',
        DATA_INDEX: 'Withdrawal',
        KEY: 'Withdrawal',
    },
    MONTHLY_RETURNS: {
        TITLE: 'Monthly returns',
        DATA_INDEX: 'Monthly returns',
        KEY: 'Monthly returns',
    },
};

export const SETTINGS_TABLE_COLUMNS = {
    EMAIL: {
        TITLE: 'Email',
        DATA_INDEX: 'Email',
        KEY: 'Email',
    },
    TYPE: {
        TITLE: 'Type',
        DATA_INDEX: 'Type',
        KEY: 'Type',
    },
    ACTION: {
        TITLE: 'Action',
        DATA_INDEX: 'Action',
        KEY: 'Action',
    },
    
};