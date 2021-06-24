/**
 * title: initialValue
 * desc: 对话框组件需要传递一些数据时使用，例如修改对话框表单。
 */
 import React, { useState } from 'react';
 import { Modal, Button, Input, Space } from 'antd';
 import { useModal } from '@pansy/react-hooks';

 export default () => {
   const [initialValue, setInitialValue] = useState<string>('Tom');
   const modal = useModal<string>();

   const handleOpenModal = () => {
     modal.open(initialValue);
   }

   return (
    <>
      <Space>
        <Input value={initialValue} onChange={(e) => { setInitialValue(e.target.value) }} />
        <Button onClick={handleOpenModal}>Open Modal</Button>
      </Space>

      <Modal
         title="Basic Modal"
         visible={modal.visible}
         onCancel={modal.close}
       >
         <p>{modal.initialValue}</p>
         <p>Some contents...</p>
         <p>Some contents...</p>
       </Modal>
     </>
   )
}
