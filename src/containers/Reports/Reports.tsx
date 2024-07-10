import React, { useState } from 'react';
import { DatePicker, Form, Input, Select, TimeRangePickerProps } from 'antd';
import '../../style/main.css';
import dayjs from 'dayjs';
import Buttons from '../../components/Common/Button';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { Dayjs } from 'dayjs';
import * as XLSX from 'xlsx';
import ReportTable from './Table';

const { Option } = Select;

const Reports: React.FC = () => {
  const [form] = Form.useForm();
  const initialDateRange = [dayjs().subtract(1, 'd'), dayjs().subtract(1, 'd')];
  const [dateRange, setDateRange] = useState(`${initialDateRange[0].format('DD/MM/YYYY')} - ${initialDateRange[1].format('DD/MM/YYYY')}`);
  const [tableData, setTableData] = useState<any[]>([]);
  const [formData, setFormData] = useState<any>({
    accountNumber: '',
    date: "",
    deposit: '4,054.02',
    openingBalance: '35,277.21',
    profit: '-4,054.02',
    closingBalance: '31,223.19',
    total: '-12,921.41',
    fileFormat: ''
  });

  const onFinish = (value: any) => {
    setFormData(value);
  };

  const options = [
    { value: "218080980", label: "218080980" },
    { value: "169402349", label: "169402349" },
    { value: "923546795", label: "923546795" },
  ];

  const handleClick = () => {
    if (formData.fileFormat === 'PDF') {
      downloadPDF();
    } else if (formData.fileFormat === 'EX SHEET') {
      downloadExcel();
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(16);
    doc.text('Daily Summary', 10, 10);
  
    doc.setFontSize(12);
    doc.text(`Date Range: ${dateRange}`, 10, 20);
    
    autoTable(doc, {
      startY: 30,
      head: [['Date', 'Deposits', 'Opening Balance', 'Profit/Loss', 'Closing Balance', 'Withdrawal', 'Monthly Returns']],
      body: tableData.map(row => [
        row.Date, row.Deposits, row["Opening balance"], row["Profit/Loss"], row["Closing balance"], row.Withdrawal, row["Monthly returns"]
      ]),
      headStyles: {
        fillColor: [174, 143, 115],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 8,
        cellPadding: { top: 7, left: 2, bottom: 7, right: 2 }
      },
      bodyStyles: {
        fillColor: [240, 240, 240],
        textColor: [0, 0, 0],
        fontSize: 8,
        cellPadding: { top: 5, left: 4, bottom: 5, right: 4 }
      },
      alternateRowStyles: {
        fillColor: [255, 255, 255],
      },
    });
  
    doc.save('report.pdf');
  };

  const downloadExcel = () => {
    const tableWs = XLSX.utils.json_to_sheet(tableData.map(row => ({
      'Date': row.Date,
      'Deposits': row.Deposits,
      'Opening Balance': row["Opening balance"],
      'Profit/Loss': row["Profit/Loss"],
      'Closing Balance': row["Closing balance"],
      'Withdrawal': row.Withdrawal,
      'Monthly Returns': row["Monthly returns"]
    })));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, tableWs, 'Table Data');
    XLSX.writeFile(wb, 'report.xlsx');
  };

  const rangePresets: TimeRangePickerProps['presets'] = [
    { label: 'Yesterday', value: [dayjs().subtract(1, 'd'), dayjs()] },
    { label: 'Last 7 Days', value: [dayjs().subtract(7, 'd'), dayjs()] },
    { label: 'Last 14 Days', value: [dayjs().subtract(14, 'd'), dayjs()] },
    { label: 'Last 30 Days', value: [dayjs().subtract(30, 'd'), dayjs()] },
    { label: 'Last 90 Days', value: [dayjs().subtract(90, 'd'), dayjs()] },
  ];

  const onRangeChange = (dates: null | (Dayjs | null)[], dateStrings: string[]) => {
    if (dates) {
      setDateRange(`${dateStrings[0]} - ${dateStrings[1]}`);
    } else {
      setDateRange('');
    }
  };

  const disabledDate = (current: Dayjs) => {
    return current && current > dayjs().endOf('day');
  };

  return (
    <>
      <div className="report_top_boxs">
        <div className="account_top_box reports_box" >
          <h2 className="top_title">Account Number</h2>
          <Form
            form={form}
            name="accountDetails"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item name="accountNumber">
              <Select placeholder="Select account number">
                {options.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div className="account_top_box reports_box" >
          <h2 className="top_title">Date</h2>
          <Form
            form={form}
            name="accountDetails"
            onFinish={onFinish}
            layout="vertical"
          >
            <Form.Item name="dateRange">
              <DatePicker.RangePicker presets={rangePresets} onChange={onRangeChange} disabledDate={disabledDate} format={"DD/MM/YYYY"} defaultValue={[dayjs().subtract(1, 'd'), dayjs()]} />
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="account_details">
        <h2 className="account_under_title">Daily Summary {dateRange && `(${dateRange})`}</h2>
        <Form
          form={form}
          name="reports"
          onFinish={onFinish}
          layout="vertical"
          className="account_details_form"
        >
          <Form.Item name="deposit" label="Deposit" initialValue={formData.deposit} >
            <Input placeholder="Enter Deposit" disabled />
          </Form.Item>

          <Form.Item name="openingBalance" label="Opening Balance" initialValue={formData.openingBalance} >
            <Input placeholder="Enter Balance" disabled />
          </Form.Item>

          <Form.Item name="profit" label="Profit / Loss (x% Adjusted)" initialValue={formData.profit} >
            <Input placeholder="Enter Profit / Loss" disabled />
          </Form.Item>

          <Form.Item name="closingBalance" label="Closing Balance" initialValue={formData.closingBalance} >
            <Input placeholder="Enter Closing Balance" disabled />
          </Form.Item>

          <Form.Item name="total" label="Total P/L" initialValue={formData.total} >
            <Input placeholder="Enter Total" disabled />
          </Form.Item>

        </Form>
      </div>
      <div className="account_details report_table" >
        <h2 className="account_under_title">Account Summary</h2>
        <ReportTable setTableData={setTableData} />
      </div>
      <div className="download_section" >
        <div className="download_file">
          <span className="download_text">Download File Format</span>
          <Select placeholder="Select" onChange={(value) => setFormData({ ...formData, fileFormat: value })}>
            <Option value="EX SHEET">EX SHEET</Option>
            <Option value="PDF">PDF</Option>
          </Select>
        </div>
        <div className="download_button">
          <Buttons
            onClick={handleClick}
            type="primary"
            variant="primary"
            className="download_fill_button"
            isDisabled={false}
          >
            Download
          </Buttons>
        </div>
      </div>
    </>
  );
};

export default Reports;
