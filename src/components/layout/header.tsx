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
        position: "sticky",
        border: "1px solid var(--gray-200, #E5E7EB)",
        flexDirection: "row-reverse",
        padding: "0 40px",
        background: 'white',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 97,
        gap: 64,
      }}>
        <span className='flex items-center'>
          <Image height={24} width={24} alt='bell icon' src="/static/bell.svg" className='ml-4' />
          <Image className='mr-4 ml-8' height={24} width={24} alt='chat-bubble-oval-left-ellipsis icon' src="/static/chat-bubble-oval-left-ellipsis.svg" />
          <Dropdown className='flex flex-wrap items-center' menu={{ items }}>
            <span>
              <Image className='ml-4' height={40} width={40} alt='person-circle icon' src="/static/person-circle.svg" />
              <span>
                <Typography style={{ fontSize: "16px", fontWeight: 400, color: token.colorTextBase }} className='text-lg'>نام کاربری</Typography>
                <Typography style={{ fontSize: "12px", fontWeight: 400, color: token.colorTextDisabled, }} className='font-semibold'>سمت شغلی</Typography>
              </span>
              <Image className='mr-8' height={16} width={16} src={"/static/chevron-down.svg"} alt='chevron-down.svg' />
            </span>
          </Dropdown>
        </span>
        <Input style={{ width: "704px" }} size='large' placeholder='جستوجو ...' />
        {/*  color='primary' type='primary' size='large' placeholder='جستوجو ...' suffix={<SearchOutlined />} */}
        <Image src="/static/logo.svg" alt='standad logo' height={49} width={200} />
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