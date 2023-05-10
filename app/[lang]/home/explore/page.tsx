'use client';
import {
  EllipsisOutlined,
  FieldTimeOutlined,
  LikeOutlined,
  LinkOutlined,
  MessageOutlined,
  StarOutlined
} from '@ant-design/icons';
import { Avatar, Collapse, List, Space } from 'antd';
import React, { useState } from 'react';
import { AvatarIcon } from '../../../../components/icons/campaignAvatar';
import Paragraph from 'antd/es/typography/Paragraph';

const { Panel } = Collapse;

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const App: React.FC = () => {
  const [ellipsis, setEllipsis] = useState(true);
  return (
    <div className="w-full">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3
        }}
        style={{ color: 'white' }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.title} className="bg-white">
            {/* <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          /> */}
            <div>
              <span>{item.title}</span>
              <span>
                <EllipsisOutlined onClick={() => setEllipsis(!ellipsis)} />
              </span>
            </div>
            <div>
              <span>
                <FieldTimeOutlined />
              </span>
              <span>
                <Avatar src={item.avatar} />
              </span>
              <span>
                <LinkOutlined />
                <a href={item.href}>{item.href}</a>
              </span>
            </div>
            <Paragraph
              ellipsis={
                ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false
              }
            >
              Ant Design, a design language for background applications, is
              refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team. Ant Design, a design language for background applications,
              is refined by Ant UED Team. Ant Design, a design language for
              background applications, is refined by Ant UED Team. Ant Design, a
              design language for background applications, is refined by Ant UED
              Team.
            </Paragraph>
          </List.Item>
        )}
      />
    </div>
  );
};
export default App;
