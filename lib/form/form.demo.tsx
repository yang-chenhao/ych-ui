import React, {Fragment} from 'react';
import Demo from '../../site_page/demo/demo';
import FormExample from './form.example';

const FormDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./form.example.tsx').default}
        title={'Form表单'}
        description={'具有数据收集、校验和提交功能的表单'}
      >
        <FormExample />
      </Demo>
    </Fragment>
  );
};

export default FormDemo;