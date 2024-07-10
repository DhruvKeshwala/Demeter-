import React from 'react';
import { Form, Input, Select } from 'antd';
import '../../style/main.css';

const { Option } = Select;

const AccountDetails: React.FC = () => {

  const onFinish = () => {
  };

  const options = [
    { value: "218080980", label: "218080980" },
    { value: "169402349", label: "169402349" },
    { value: "923546795", label: "923546795" },
  ];

  return (
    <>
      <div className="account_top_box"  >
        <h2 className="top_title">Account Number</h2>
        <Form
          name="accountDetails"
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item name="accountNumber">
            <Select
              placeholder="Select account number"
              defaultValue="218080980"
            >
              {options.map((option) => (
                <Option key={option.value} value={option.value}>
                  {option.label}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </div>

      <div className="account_details"  >
        <h2 className="account_under_title">Account Details</h2>
        <Form
          name="accountDetails"
          onFinish={onFinish}
          layout="vertical"
          className="account_details_form"
        >
          <Form.Item
            name="name"
            label="Name"
            initialValue="John Doe"
             
          >
            <Input name="name" placeholder="Enter Name" disabled />
          </Form.Item>

          <Form.Item
            name="emailaddress"
            label="Email address"
            initialValue="john.doe@example.com"
             
          >
            <Input name="emailaddress" placeholder="Enter email" disabled />
          </Form.Item>

          <Form.Item
            name="accounttype"
            label="Account type"
            initialValue="Savings"
             
          >
            <Input name="accounttype" placeholder="Enter type" disabled />
          </Form.Item>

          <Form.Item
            name="accountNumber"
            label="Account number"
            initialValue="218080980"
             
          >
            <Input name="accountNumber" placeholder="Enter number" disabled />
          </Form.Item>

          <Form.Item
            name="accountcreateddate"
            label="Account created date"
            initialValue="2023-01-01"
             
          >
            <Input name="accountcreateddate" placeholder="Enter date" disabled />
          </Form.Item>

          <Form.Item
            name="basecurrency"
            label="Base currency"
            initialValue="USD"
             
          >
            <Input name="basecurrency" placeholder="Enter currency" disabled />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            initialValue="Active"
             
          >
            <Input name="status" placeholder="Status" disabled />
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AccountDetails;
