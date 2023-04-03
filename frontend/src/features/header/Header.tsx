import styles from './Header.module.css'
import profilePic from '../../profile.jpeg'
import { DownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Input, Space } from 'antd'

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


const Header = () => {
  return (
    <header className={styles.header}>
      <Input.Search className={styles.search} placeholder="search" style={{ width: 200 }} />
      <Dropdown menu={{ items }}>
        <Space>
          <img src={profilePic} className={styles.profileImg}/>
          <DownOutlined />
        </Space>
      </Dropdown>
    </header>
  )
}

export default Header