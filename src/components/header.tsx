// import React from 'react'
import Image from 'next/image'
import { SearchOutlined, SmileOutlined } from '@ant-design/icons'
import { Dropdown, Input, MenuProps, Space, theme } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { Typography } from 'antd';

const { Title } = Typography

export default function LayoutHeader() {
  const { token } = theme.useToken()
  return (
    <>
      <Header style={{
        flexDirection: "row-reverse",
        padding: "0 40px",
        background: 'white',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 97,
        gap: 64,
      }}>
        <Image src="/static/logo.svg" alt='standad logo' height={49} width={200} />
        <Input style={{ width: "704px" }} color='primary' type='primary' size='large' placeholder='جستوجو ...' suffix={<SearchOutlined />} />
        <Space align='center'>
          <Dropdown menu={{ items }}>
            <Space className='flex-row-reverse flex gap-0' align='center'>
              <Image className='ml-4' height={40} width={40} alt='person-circle icon' src="/static/person-circle.svg" />
              <Space align='center' direction='vertical' className='flex items-center'>
                <Typography style={{ fontSize: "16px", fontWeight: 400, color: token.colorTextBase }} className='text-lg'>نام کاربری</Typography>
                <Typography style={{ fontSize: "12px", fontWeight: 400, color: token.colorTextDisabled, }} className='font-semibold'>سمت شغلی</Typography>
              </Space>
              <Image className='mr-8' height={16} width={16} src={"/static/chevron-down.svg"} alt='chevron-down.svg' />
            </Space>
          </Dropdown>
          <Image className='mr-4 ml-8' height={24} width={24} alt='chat-bubble-oval-left-ellipsis icon' src="/static/chat-bubble-oval-left-ellipsis.svg" />
          <Image height={24} width={24} alt='bell icon' src="/static/bell.svg" />
        </Space>
        {/* </a> */}
        {/* </Space> */}
      </Header>
    </>
  )
}


const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];