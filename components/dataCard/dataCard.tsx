import React from 'react';

import PropTypes from 'prop-types';
import { CopyOutlined, DollarCircleOutlined } from '@ant-design/icons';

const DataCard = (props: {
}) => {
  return (
    <>
      <div className={`component2-container `}>
        <span className="component2-text">
          <span>Contracts</span>
        </span>
        <div className="component2-frame">
          <span className="component2-text02">
            <span>Address</span>
          </span>
          <span className="component2-text04">
            <span>
              0x3bd0fc9d34b3966ebe27c143e1926a522d4e9b78eff3c66553e00126977aca91
            </span>
          </span>
          <span className="component2-frame1">
            <CopyOutlined />
          </span>
        </div>
        <div className="component2-frame2">
          <span className="component2-text06">
            <span>Balance:</span>
          </span>
          <span className="component2-text08 H2">
            <span>$300</span>
          </span>
          <span className="component2-currency-circle-dollar">
            <DollarCircleOutlined width={'24px'} height={'24px'}/>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .component2-container {
            height: 174px;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .component2-text {
            top: 0px;
            left: 0px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            position: absolute;
            font-size: 28px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .component2-frame {
            flex-direction: column;
            margin-top: 62px;
            margin-left: 0px;
            width: 50vw;
            height: 112px;
            display: flex;
            overflow: hidden;
            
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-image: linear-gradient(
              142deg,
              rgba(255, 255, 255, 0.07999999821186066) 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          .component2-text02 {
            margin-top: 24px;
            margin-left: 24px;
            color: rgba(116, 116, 116, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component2-text04 {
            margin-top: 8px;
            margin-left: 24px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 17px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .component2-frame1 {
            margin-top: 12px;
            margin-left: 34rem;
            position:absolute;
          }
          .component2-frame2 {
            margin-top: 62px;
            margin-left: 1rem;
            width: 15rem;
            height: 112px;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            position: static;
            align-items: flex-start;
            flex-shrink: 0;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-image: linear-gradient(
              142deg,
              rgba(255, 255, 255, 0.07999999821186066) 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
          .component2-text06 {
            margin-top: 24px;
            margin-left: 24px;
            color: rgba(116, 116, 116, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component2-text08 {
            margin-top: 4px;
            margin-left: 24px;
            color: rgba(255, 255, 255, 1);
            height: auto;
            text-align: left;
            line-height: 36px;
          }
          .component2-currency-circle-dollar {
            margin-top: 12px;
            margin-left: 12rem;
            position: absolute;
            width: 24px;
            height: 24px;
          }
          .component2-root-class-name {
            top: 0px;
            left: 0px;
            position: absolute;
          }
          .component2-root-class-name1 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
        `}
      </style>
    </>
  );
};

export default DataCard;
