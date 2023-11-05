import React from 'react'
import {notification} from 'antd';

const LoginSuccess = () => {
    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
    api.info({
        message: `Notification ${placement}`,
        description: 'Login Successful', placement,
        });
    }

  return (
    <>
        {openNotification('top')}
    </>
  )
}

export default LoginSuccess
