import React from 'react'
import { Map } from 'react-amap'

const Find = () => {
  const plugins = [
    {
      name: 'ToolBar',
      options: {
        visible: true,  // 不设置该属性默认就是 true
        onCreated(ins) {
          console.log(ins)
        }
      }
    }
  ]
  return (
    <div style={{ marginBottom: '120px', height: '90vh', width: '100%' }}>
      <Map plugins={plugins} amapkey='8aba13da05757a5610bf69107a81c0dc' />
    </div>
  )
}

export default Find
