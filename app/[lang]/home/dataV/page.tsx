'use client';
import React from 'react';
import { Card, ConfigProvider, Dropdown, MenuProps, Space, Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import { Table2 } from '@/components/table/table';
import { Table1, Table2 } from '@/components/table/table';
import DataCard from '@/components/dataCard/dataCard';

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
const data: readonly any[] | undefined = [
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

const items: MenuProps['items'] = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: '0'
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: '3rd menu item（disabled）',
    key: '3',
    disabled: true
  }
];
// const pagination = {
//   pageSize: 10,
//   showSizeChanger: true,
//   pageSizeOptions: ['10', '20', '30', '40'],
//   showTotal: (total: any, range: any[]) => `${range[0]}-${range[1]} of ${total} items`,
//   style: {
//     marginTop: 16,
//     color: '#ffffff',
//     backgroundColor: '#000000'
//   }
// };

const dataV = () => {
  return (
    <>
      <div className="ml-[1vw] mt-[2vh] flex flex-col ">
        {/* <Table columns={columns} dataSource={data} /> */}
        <DataCard />
        <div>
          <div
            className="mt-3 font-medium text-white"
            style={{
              fontFamily: 'Inter',
              fontSize: '28px',
              lineHeight: '34px'
            }}
          >
            Statistics
          </div>
          <Table1 />
          <Table2 />
        </div>
        <div className="side-menu-btn">
          <div className="side-menu-frame10211">
            <span className="side-menu-text4">
              <span>Bonus Confirmation</span>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .side-menu-btn {
            gap: 4px;
            margin-top: 2vh;
            margin-left: 25vw;
            padding: 4px 8px 4px 0;
            position: relative;
            flex-shrink: 0;
            border-radius: 8px;
            cursor: pointer;
            display: flex;
            align-items: center;
          }
          .side-menu-frame10211 {
            gap: 8px;
            top: 0px;
            left: 20px;
            height: 52px;
            display: flex;
            padding: 0.75rem 4rem;
            position: absolute;
            align-items: center;
            flex-shrink: 0;
            border-radius: 44px;
            justify-content: center;
            background-image: linear-gradient(
              180deg,
              rgba(110, 98, 238, 1) 2%,
              rgba(63, 61, 250, 1) 100%
            );
          }
          .side-menu-frame10211:hover {
            background: linear-gradient(180deg, #8377ff -67.27%, #504ef0 100%);
          }
          .side-menu-text4 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 1.125rem;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  );
};

export default dataV;
