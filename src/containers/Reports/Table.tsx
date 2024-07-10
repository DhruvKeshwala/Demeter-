import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { REPOTS_TABLE_COLUMNS } from '../../constant';

interface TableParams {
    pagination: {
        current: number;
        pageSize: number;
        total?: number;
    };
    sortField?: string;
    sortOrder?: 'ascend' | 'descend' | undefined;
    filters?: Record<string, any>;
}

const columns = [
    {
        title: REPOTS_TABLE_COLUMNS.DATE.TITLE,
        dataIndex: REPOTS_TABLE_COLUMNS.DATE.DATA_INDEX,
        key: REPOTS_TABLE_COLUMNS.DATE.KEY,
        sorter: (a: any, b: any) => new Date(a.Date).getTime() - new Date(b.Date).getTime(),
        render: (text: string) => <span>{text}</span>,
    },
    {
        title: REPOTS_TABLE_COLUMNS.DEPOSITS.TITLE,
        dataIndex: REPOTS_TABLE_COLUMNS.DEPOSITS.DATA_INDEX,
        key: REPOTS_TABLE_COLUMNS.DEPOSITS.KEY,
        sorter: (a: any, b: any) => a.Deposits - b.Deposits,
        render: (text: number) => <span>{`$${text}`}</span>,
    },
    {
        title: REPOTS_TABLE_COLUMNS.OPENING_BALANCE.TITLE,
        dataIndex: REPOTS_TABLE_COLUMNS.OPENING_BALANCE.DATA_INDEX,
        key: REPOTS_TABLE_COLUMNS.OPENING_BALANCE.KEY,
        sorter: (a: any, b: any) => a[REPOTS_TABLE_COLUMNS.DEPOSITS.TITLE] - b[REPOTS_TABLE_COLUMNS.DEPOSITS.TITLE],
        render: (text: number) => <span>{`$${text}`}</span>,
    },
    {
        title: REPOTS_TABLE_COLUMNS.PROFIT_LOSS.TITLE,
        dataIndex: REPOTS_TABLE_COLUMNS.PROFIT_LOSS.DATA_INDEX,
        key: REPOTS_TABLE_COLUMNS.PROFIT_LOSS.KEY,
        sorter: (a: any, b: any) => a[REPOTS_TABLE_COLUMNS.PROFIT_LOSS.TITLE] - b[REPOTS_TABLE_COLUMNS.PROFIT_LOSS.TITLE],
        render: (text: number) => <span>{`$${text}`}</span>,
    },
    {
        title: REPOTS_TABLE_COLUMNS.CLOSING_BALANCE.TITLE,
        dataIndex: REPOTS_TABLE_COLUMNS.CLOSING_BALANCE.DATA_INDEX,
        key: REPOTS_TABLE_COLUMNS.CLOSING_BALANCE.KEY,
        sorter: (a: any, b: any) => a[REPOTS_TABLE_COLUMNS.CLOSING_BALANCE.TITLE] - b[REPOTS_TABLE_COLUMNS.CLOSING_BALANCE.TITLE],
        render: (text: number) => <span>{`$${text}`}</span>,
    },
    {
        title: REPOTS_TABLE_COLUMNS.WITHDRAWAL.TITLE,
        dataIndex: REPOTS_TABLE_COLUMNS.WITHDRAWAL.DATA_INDEX,
        key: REPOTS_TABLE_COLUMNS.WITHDRAWAL.KEY,
        sorter: (a: any, b: any) => a.Withdrawal - b.Withdrawal,
        render: (text: number) => <span>{`$${text}`}</span>,
    },
    {
        title: REPOTS_TABLE_COLUMNS.MONTHLY_RETURNS.TITLE,
        dataIndex: REPOTS_TABLE_COLUMNS.MONTHLY_RETURNS.DATA_INDEX,
        key: REPOTS_TABLE_COLUMNS.MONTHLY_RETURNS.KEY,
        sorter: (a: any, b: any) => a[REPOTS_TABLE_COLUMNS.MONTHLY_RETURNS.TITLE] - b[REPOTS_TABLE_COLUMNS.MONTHLY_RETURNS.TITLE],
        render: (text: number) => <span>{`${text}%`}</span>,
    },
];


const ReportTable: React.FC<{ setTableData: (data: any[]) => void }> = ({ setTableData }) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    useEffect(() => {
        fetchData();
    }, [
        tableParams.pagination.current,
        tableParams.pagination.pageSize,
        tableParams.sortOrder,
        tableParams.sortField,
        JSON.stringify(tableParams.filters),
    ]);

    const fetchData = () => {
        setLoading(true);

        const staticData = [
            {
                "id": 1,
                "Date": "01/06/2024",
                "Deposits": 1000,
                "Opening balance": 5000,
                "Profit/Loss": 12921.00,
                "Closing balance": 5200,
                "Withdrawal": 1894.32,
                "Monthly returns": 2
              },
              {
                "id": 2,
                "Date": "02/06/2024",
                "Deposits": 1200,
                "Opening balance": 5200,
                "Profit/Loss": 17021,
                "Closing balance": 5100,
                "Withdrawal": 1564.32,
                "Monthly returns": -1
              },
              {
                "id": 3,
                "Date": "03/06/2024",
                "Deposits": 1200,
                "Opening balance": 5200,
                "Profit/Loss": 10000,
                "Closing balance": 5100,
                "Withdrawal": 1204.32,
                "Monthly returns": -1
              },
              {
                "id": 4,
                "Date": "02/06/2024",
                "Deposits": 1200,
                "Opening balance": 5200,
                "Profit/Loss": -12990,
                "Closing balance": 5100,
                "Withdrawal": 1194.32,
                "Monthly returns": -1
              }
        ];

        setData(staticData);
        setLoading(false);
        setTableParams({
            ...tableParams,
            pagination: {
                ...tableParams.pagination,
                total: staticData.length,
            },
        });
        setTableData(staticData);
    };

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        setTableParams({
            pagination,
            filters,
            sortOrder: sorter.order,
            sortField: sorter.field,
        });

        if (pagination.pageSize !== tableParams.pagination.pageSize) {
            setData([]);
        }
    };

    return (
        <Table
            columns={columns}
            rowKey={(record) => record.id.toString()}
            dataSource={data}
            pagination={tableParams.pagination}
            loading={loading}
            onChange={handleTableChange}
            size="large"
            scroll={{ x: 0 }}
        />
    );
};

export default ReportTable;
