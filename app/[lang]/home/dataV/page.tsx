'use client';
import React from 'react';
import { Card, Table } from 'antd';

const columns1 = [
  {
    title: 'Month',
    dataIndex: 'month',
    key: 'month'
  },
  {
    title: 'Enrollment',
    dataIndex: 'enrollment',
    key: 'enrollment'
  },
  {
    title: 'Number of content submitted',
    dataIndex: 'numContentSubmitted',
    key: 'numContentSubmitted'
  },
  {
    title: 'Number of valid content',
    dataIndex: 'numValidContent',
    key: 'numValidContent'
  },
  {
    title: 'Number of completed tasks',
    dataIndex: 'numCompletedTasks',
    key: 'numCompletedTasks'
  },
  {
    title: 'Number of incomplete',
    dataIndex: 'numIncomplete',
    key: 'numIncomplete'
  },
  {
    title: 'Total prize pool',
    dataIndex: 'totalPrizePool',
    key: 'totalPrizePool'
  }
];
const columns2 = [
  {
    title: 'User Name',
    dataIndex: 'userName',
    key: 'userName'
  },
  {
    title: 'Wallet Address',
    dataIndex: 'walletAddress',
    key: 'walletAddress'
  },
  {
    title: 'Number of Content Submitted',
    dataIndex: 'numContentSubmitted',
    key: 'numContentSubmitted'
  },
  {
    title: 'Number of Deleted Content',
    dataIndex: 'numDeletedContent',
    key: 'numDeletedContent'
  },
  {
    title: 'Bonuses Received',
    dataIndex: 'bonusesReceived',
    key: 'bonusesReceived'
  },
  {
    title: 'Registration Time',
    dataIndex: 'registrationTime',
    key: 'registrationTime'
  }
];
const data = [
  // {
  //   key: '1',
  //   name: 'John Brown',
  //   age: 32,
  //   address: 'New York No. 1 Lake Park'
  // },
  // {
  //   key: '2',
  //   name: 'Jim Green',
  //   age: 42,
  //   address: 'London No. 1 Lake Park'
  // },
  // {
  //   key: '3',
  //   name: 'Joe Black',
  //   age: 32,
  //   address: 'Sidney No. 1 Lake Park'
  // }
];
const data2 = [
  {
    key: '1',
    userName: 'John Doe',
    walletAddress: '0x1234567890abcdef',
    numContentSubmitted: 10,
    numDeletedContent: 2,
    bonusesReceived: 5,
    registrationTime: '2021-01-01'
  },
  {
    key: '2',
    userName: 'Jane Smith',
    walletAddress: '0xabcdef1234567890',
    numContentSubmitted: 5,
    numDeletedContent: 1,
    bonusesReceived: 2,
    registrationTime: '2021-02-01'
  },
  {
    key: '3',
    userName: 'Bob Johnson',
    walletAddress: '0x0987654321fedcba',
    numContentSubmitted: 20,
    numDeletedContent: 0,
    bonusesReceived: 10,
    registrationTime: '2021-03-01'
  }
];
const dataV = () => {
  return (
    <>
      <div className="flex-col">
        {/* <Table columns={columns} dataSource={data} /> */}
        <div className='flex'>
          <div className='text-lg'>Contracts</div>
          <div>
            <Card className='ml-4'>
            <p>Contract Address: 0x1234567890abcdef</p>
            <p>Contract Balance: 1000</p>
            </Card>
            <Card className='ml-4'>
            <p>Contract Address: 0x1234567890abcdef</p>
            <p>Contract Balance: 1000</p>
          </Card>
          </div>
          
        </div>
        <div></div>
        <Table columns={columns1} dataSource={data} />
        <Table columns={columns2} dataSource={data2} />
      </div>
    </>
  );
};

export default dataV;
