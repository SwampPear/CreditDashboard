import styles from './Header.module.css'
import profilePic from '../../profile.jpeg'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Input, Space } from 'antd'
import Settings from '../settings/Settings'
import { useState } from 'react'


const Header = () => {
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false)

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
        <a onClick={() => setSettingsOpen(!settingsOpen)}>
          Settings
        </a>
      )
    }
  ]

  return (
    <header className={styles.header}>
      <Input.Search className={styles.search} placeholder="search" style={{ width: 200 }} />
      <Dropdown menu={{ items }} placement='bottomRight'>
        <Space>
          <img src={profilePic} className={styles.profileImg}/>
          <DownOutlined />
        </Space>
      </Dropdown>
      <Settings open={settingsOpen} close={() => setSettingsOpen(!settingsOpen)}/>
    </header>
  )
}

export default Header