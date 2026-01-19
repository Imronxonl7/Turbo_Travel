import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';


const CountryTable = ({data , index}) => {
    const columns = [
  {
    title: 'Name (UZ)',
    dataIndex: 'title_uz',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Name (EN)',
    dataIndex: 'title_en',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Name (RU)',
    dataIndex: 'title_ru',
    key: 'name',
    render: text => <p>{text}</p>,
  },
  {
    title: 'Name (TR)',
    dataIndex: 'title_tr',
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
    return (
        <Table key={index} columns={columns} dataSource={data} />
    )
}

export default CountryTable;