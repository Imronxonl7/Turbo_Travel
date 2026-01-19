import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
const columns = [
  {
    title: 'Name (UZ)',
    dataIndex: 'name_uz',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Name (EN)',
    dataIndex: 'name_en',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Name (RU)',
    dataIndex: 'name_ru',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Name (TR)',
    dataIndex: 'name_tr',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const ToursPacketsTable = ({data}) => <Table columns={columns} dataSource={data} />;
export default ToursPacketsTable;