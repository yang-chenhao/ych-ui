import React, {Fragment} from 'react';
import LayoutExample from './layout.example';
import Demo from './../../site_page/demo/demo';

const LayoutDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./layout.example.tsx').default}
        title={'基本结构'}
        description={'典型的页面布局'}
      >
        <LayoutExample /> 
      </Demo> 
    </Fragment>
  );
};

export default LayoutDemo;