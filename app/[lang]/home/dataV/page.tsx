'use client';
import React, { useEffect } from 'react';
import { Card, ConfigProvider, Dropdown, MenuProps, Space, Table } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// import { Table2 } from '@/components/table/table';
import { Table1, Table2 } from '@/components/table/table';
import DataCard from '@/components/dataCard/dataCard';
import { useUserStore } from '@/store';
import router from 'next/router';

const dataV = () => {
  const { isAdmin } = useUserStore();
  //进行判断，如果是则显示，否则跳转到首页/home
  useEffect(() => {
    if (!isAdmin) {
      router.push('/');
    }
  }, []);
  return (
    <>
      <div className="ml-[1vw] mt-[2vh] flex flex-col pb-[10vh]">
        {/* <Table columns={columns} dataSource={data} /> */}
        <DataCard />
        <div>
          <div
            className="mt-[1.75rem] font-medium text-white"
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
        <div className="relative ml-[25vw] mt-[2vh] flex shrink-0 cursor-pointer items-center gap-1 rounded-lg py-1 pl-0 pr-2">
          <div className="side-menu-frame10211">
            <span
              className="h-auto text-left text-sm font-medium leading-6 text-white no-underline"
              style={{ fontFamily: 'Inter' }}
            >
              <span>Bonus Confirmation</span>
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
};

export default dataV;
