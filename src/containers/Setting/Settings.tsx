import React from 'react';
import { Tabs } from 'antd';
import '../../style/main.css';
import EmailAddress from './TabsItems/EmailAddress';
import ContactNumber from './TabsItems/ContactNumber';
import ChangePassword from './TabsItems/ChangePassword';
import { SETTINGS_ITEMS } from '../../constant';

const items = [
  {
    label: SETTINGS_ITEMS.EMAIL_ADDRESS.LABEL,
    key: SETTINGS_ITEMS.EMAIL_ADDRESS.LABEL,
    children: <EmailAddress/>,
  },
  {
    label: SETTINGS_ITEMS.CONTACT_NUMBER.LABEL,
    key: SETTINGS_ITEMS.CONTACT_NUMBER.LABEL,
    children: <ContactNumber/>,
  },
  {
    label: SETTINGS_ITEMS.PASSWORD.LABEL,
    key: SETTINGS_ITEMS.PASSWORD.LABEL,
    children: <ChangePassword/>,
  },
];

const Settings: React.FC = () => {
  return (
    <>
      <div className="setting"  >
        <Tabs items={items} />

      </div>
    </>
  );
};

export default Settings;
