import styles from './Page.module.css'
import { Layout, Space, Input } from 'antd' 
import Content from '../contentd/Content'
import profilePic from '../../profile.jpeg'

import React from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { ArrowsFullscreen, Boxes, Calendar2, CalendarWeek, Fullscreen, Question } from 'react-bootstrap-icons';
import Menu from '../menu/Menu'

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <>
        {'Profile'}
      </>
    ),
  },
  {
    key: '2',
    label: (
      <>
        {'Settings'}
      </>
    )
  }
]



const Page = () => {
  return (
    <section className={styles.mainSection}>
      <Menu/>
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <Input.Search className={styles.search} placeholder="search" style={{ width: 200 }} />
          <Dropdown menu={{ items }}>
            <Space>
              <img src={profilePic} className={styles.profileImg}/>
              <DownOutlined />
            </Space>
          </Dropdown>
        </header>
        <Content/>
      </div>
    </section>
  )
}

export default Page