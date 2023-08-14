'use client'
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';

const antIcon = <LoadingOutlined type="" style={{fontSize: 24}} spin/>;
export default function Loading() {

    return <Spin indicator={antIcon}/>
}