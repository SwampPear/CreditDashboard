import styles from './ChartControls.module.css'
import { Select } from 'antd'

const ChartControls = () => {
  return (
    <div className={styles.container}>
      <Select
        defaultValue="lucy"
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </div>
  )
}

export default ChartControls