import styles from './Settings.module.css'
import { Modal } from 'antd'
import ColorThemeSettings from '../colorThemeSettings/ColorThemeSettings'


interface ISettingsProps {
  open: boolean
  close: () => void
}


const Settings = (props: ISettingsProps) => {
  return (
    <Modal 
      open={props.open}
      onCancel={props.close}
      footer={null}
    >
      <h2 className={styles.header}>Color Scheme</h2>
      <ColorThemeSettings/>
    </Modal>
  )
}

export default Settings