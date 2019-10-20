import React, {Fragment} from 'react';
import Demo from './../../site_page/demo/demo';
import DialogExample from './dialog_example/dialog.example'
import AlertExample from './dialog_example/alert.example';
import ConfirmExample from './dialog_example/confirm.example';
import OpenModalExample from './dialog_example/openModal.example';

const  DialogDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./dialog_example/dialog.example.tsx').default}
        title={'组件式使用'}
        description={'使用组件声明一个对话框，通过控制 visible 属性来显示/隐藏。'}
      >
        <DialogExample /> 
      </Demo> 
    </Fragment>
  );
};
const AlertDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./dialog_example/alert.example.tsx').default}
        title={'命令式使用'}
        description={'调用 alert 函数弹出一个对话框, alert 函数接受一个content参数，支持组件大部分属性。'}
      >
        <AlertExample /> 
      </Demo> 
    </Fragment>
  );
};
const ConfirmDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./dialog_example/confirm.example.tsx').default}
        title={'命令式使用'}
        description={'调用 confirm 函数弹出一个对话框, confirm 函数接受 content, yes, no两个回调函数参数，支持组件大部分属性。'}
      >
        <ConfirmExample /> 
      </Demo> 
    </Fragment>
  );
};
const OpenModalDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./dialog_example/openModal.example.tsx').default}
        title={'基本结构'}
        description={'典型的页面布局'}
      >
        <OpenModalExample /> 
      </Demo> 
    </Fragment>
  );
};
export default DialogDemo;
export { AlertDemo, ConfirmDemo, OpenModalDemo }