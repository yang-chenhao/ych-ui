import React, {Fragment} from 'react';
import LayoutExample from './layout.example';
import Demo from './../../site_page/demo/demo';

const LayoutDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./layout.example.tsx').default}
        title={'Icon图标'}
        description={'使用 yui-react Icon图标。'}
      >
        <LayoutExample /> 
      </Demo> 
    </Fragment>
  );
};

export default LayoutDemo;