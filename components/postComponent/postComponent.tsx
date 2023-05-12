/* eslint-disable prettier/prettier */
'use client';
import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import usePostStore from '@/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const { TextArea } = Input;

const postComponent = (props: { rootClassName: any }) => {
  const router = useRouter()
  const [form] = Form.useForm();
  const [isNull, setIsNull] = useState(true);
  const increase = usePostStore((state) => state.increase);
  const decrease = usePostStore((state) => state.decrease);
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedDay = day < 10 ? `0${day}` : day;

    return `${year}-${formattedMonth}-${formattedDay}`;
  }
  const onFinish = (e: {
    title: string;
    link: string;
    originalText: string;
    personalThoughts: string;
  }) => {
    console.log(getCurrentDate());

    Object.assign(e, { time: getCurrentDate() });
    console.log(e);
    increase(e);
    console.log(usePostStore.getState());
    //跳转到/home/explore页
    router.push('/home/explore')
  };
  const title = Form.useWatch('title', form);
  const link = Form.useWatch('Link', form);
  const OriginalText = Form.useWatch('OriginalText', form);
  const PersonalThoughts = Form.useWatch('PersonalThoughts', form);
  //当title,time,material1,material2不为空时，isNull改变状态为false
  useEffect(() => {
    //console.log(title, link, OriginalText, PersonalThoughts);
    if (
      title !== undefined &&
      title !== '' &&
      link !== undefined &&
      link !== '' &&
      OriginalText !== undefined &&
      OriginalText !== '' &&
      PersonalThoughts !== undefined &&
      PersonalThoughts !== ''
    ) {
      setIsNull(false);
    } else {
      setIsNull(true);
    }
  }, [title, link, OriginalText, PersonalThoughts]);
  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 34 }}
       
        onFinish={onFinish}
        form={form}
      >
        <div className={`component-container ${props.rootClassName} `}>
          <div className="component-frame15062">
            <Form.Item
              name="title"
              rules={[{ required: true, message: 'Enter The Article' }]}
            >
              <Input
                type="text"
                placeholder="+ Enter the article"
                style={{
                  width: '62.25rem',
                  height: '4.125rem',
                  border: 'none'
                }}
                className="w-62.25rem h-4.125rem absolute left-0 top-0 flex shrink-0 items-start rounded-lg  bg-inherit text-white"
              />
            </Form.Item>
            {/* <span className="component-text">
            <span>+ Enter the article</span>
          </span> */}
            <span className="component-text02">
              <span>x/n</span>
            </span>
          </div>
          <div className="component-frame15063">
            <Form.Item
              name="Link"
              rules={[
                { required: true, message: 'Please Enter The Original Link' }
              ]}
            >
              <Input
                type="text"
                placeholder="Please enter the original link"
                style={{
                  width: '62.25rem',
                  height: '4.125rem',
                  border: 'none'
                }}
                className="w-62.25rem h-4.125rem absolute left-0 top-0 flex shrink-0 items-start rounded-lg  bg-inherit text-white"
              />
            </Form.Item>
          </div>
          {/* 提交按钮 */}
          <Form.Item>
            <div
              className={
                isNull == true
                  ? 'component-frame15065'
                  : 'frame1171274791-frame1171274791'
              }
            >
              {isNull ? (
                <Button
                  htmlType="submit"
                  style={{ border: 'none', padding: '0' }}
                  disabled
                >
                  <span className="component-text06">Submit</span>
                </Button>
              ) : (
               
                  <Button
                    htmlType="submit"
                    style={{ border: 'none', padding: '0' }}
                  >
                    <span className="frame1171274791-text">Submit</span>
                  </Button>
                
              )}
              {/* <div className="frame1171274791-frame1171274791">
                <span className="frame1171274791-text">
                  <span>Submit</span>
                </span>
              </div> */}
            </div>
          </Form.Item>
          <div className="component-frame1171274789">
            <span className="component-text08">
              <span>Original Summary</span>
            </span>
            <Form.Item
              name="OriginalText"
              rules={[
                {
                  required: true,
                  message: 'Please Enter The Core Content Of The Original Text'
                }
              ]}
            >
              <div className="component-frame15064">
                <TextArea
                  placeholder="Please enter the core content of the original text"
                  style={{
                    width: '62.25rem',
                    height: '16.5625rem',
                    border: 'none'
                  }}
                  className="absolute left-0 top-0 flex items-start rounded-lg  bg-inherit text-white"
                />

                {/* <span className="component-text10">
                <span>please enter the core content of the original text</span>
              </span> */}
                <span className="component-text12">
                  <span>x/n</span>
                </span>
              </div>
            </Form.Item>
          </div>
          <div className="component-frame1171274790">
            <span className="component-text14">
              <span>Personal Thoughts</span>
            </span>
            <Form.Item
              name="PersonalThoughts"
              rules={[
                { required: true, message: 'Please Enter Personal Thoughts' }
              ]}
            >
              <div className="component-frame15066">
                <TextArea
                  placeholder="Please enter Personal thoughts"
                  style={{
                    width: '62.25rem',
                    height: '16.5625rem',
                    border: 'none'
                  }}
                  className=" absolute left-0 top-0 flex  items-start rounded-lg  bg-inherit text-white"
                />

                {/* <span className="component-text16">
                <span>please enter Personal thoughts</span>
              </span> */}
              </div>
            </Form.Item>
          </div>
        </div>
      </Form>
      <style jsx>
        {`
          .frame1171274791-frame1171274791 {
            top: 52rem;
            left: 23.625rem;

            display: flex;
            padding: 0.75rem 4rem;
            position: absolute;
            gap: 8px;
            width: 10rem;
            height: auto;
            display: flex;

            align-items: flex-start;
            border-radius: 44px;
            background-image: linear-gradient(
              180deg,
              rgba(110, 98, 238, 1) 2%,
              rgba(63, 61, 250, 1) 100%
            );
          }
          .frame1171274791-text {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-container {
            width: 62.25rem;
            height: 56.25rem;
            display: flex;
            position: relative;
            align-items: flex-start;
            background-color: var(--dl-color-gray-black);
          }
          .component-frame15062 {
            top: 0px;
            left: 0px;
            width: 62.25rem;
            height: 4.125rem;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: #2c2c2c;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: #2c2c2c;
          }
          .component-text {
            top: 21px;
            left: 20px;
            color: rgba(255, 255, 255, 0.4000000059604645);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-text02 {
            top: 26px;
            left: 60rem;
            color: rgba(89, 96, 105, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: Roboto;
            font-weight: 500;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-frame15063 {
            top: 5.875rem;
            left: 0px;
            width: 62.25rem;
            height: 4.125rem;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: #2c2c2c;
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: #2c2c2c;
          }
          .component-text04 {
            top: 21px;
            left: 20px;
            color: rgba(255, 255, 255, 0.4000000059604645);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-frame15065 {
            top: 52rem;
            gap: 8px;
            left: 23.625rem;
            width: 10rem;
            display: flex;
            padding: 0.75rem 4rem;
            position: absolute;
            align-items: flex-center;
            border-color: rgba(41, 40, 47, 1);
            border-style: solid;
            border-width: 2px;
            border-radius: 44px;
            background-color: var(--dl-color-maincolors-backgrounddark);
          }
          .component-text06 {
            color: rgba(255, 255, 255, 0.4000000059604645);
            height: auto;
            font-size: 14px;
            font-style: Medium;
            text-align: center;
            font-family: Inter;
            font-weight: 500;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-frame1171274789 {
            gap: 18px;
            top: 11.75rem;
            left: 0px;
            width: 62.25rem;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .component-text08 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 20px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-frame15064 {
            width: 62.25rem;
            height: 16.5625rem;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(255, 255, 255, 0.05999999865889549);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(255, 255, 255, 0.05999999865889549);
          }
          .component-text10 {
            top: 21px;
            left: 20px;
            color: rgba(255, 255, 255, 0.4000000059604645);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-text12 {
            top: 233px;
            left: 60rem;
            color: rgba(89, 96, 105, 1);
            height: auto;
            position: absolute;
            font-size: 14px;
            font-style: Medium;
            text-align: right;
            font-family: Inter;
            font-weight: 500;
            line-height: 14px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-frame1171274790 {
            top: 31.75rem;
            gap: 18px;
            left: 0px;
            width: 62.25rem;
            bottom: 5.6875rem;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
          }
          .component-text14 {
            color: rgba(255, 255, 255, 1);
            height: auto;
            font-size: 20px;
            font-style: Medium;
            text-align: left;
            font-family: Inter;
            font-weight: 500;
            line-height: 20px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-frame15066 {
            width: 62.25rem;
            height: 16.5625rem;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            border-color: rgba(255, 255, 255, 0.05999999865889549);
            border-style: solid;
            border-width: 1px;
            border-radius: 16px;
            background-color: rgba(255, 255, 255, 0.05999999865889549);
          }
          .component-text16 {
            top: 21px;
            left: 20px;
            color: rgba(255, 255, 255, 0.4000000059604645);
            height: auto;
            position: absolute;
            font-size: 16px;
            font-style: Regular;
            text-align: left;
            font-family: Inter;
            font-weight: 400;
            line-height: 24px;
            font-stretch: normal;
            text-decoration: none;
          }
          .component-root-class-name {
            top: 8.625rem;
            left: 21.25rem;
            position: absolute;
          }
        `}
      </style>
    </>
  );
};

postComponent.defaultProps = {
  rootClassName: ''
};

postComponent.propTypes = {
  rootClassName: PropTypes.string
};

export default postComponent;