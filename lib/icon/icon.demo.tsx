import IconExample from './icon.example';
import React, {Fragment} from 'react';
import Demo from '../../site_page/demo/demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./icon.example.tsx').default}
        title={'Icon图标'}
        description={'使用 yui-react 按钮组件。'}
      >
        <IconExample/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;