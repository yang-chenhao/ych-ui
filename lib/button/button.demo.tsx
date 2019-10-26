import React, {Fragment} from 'react';
import Demo from '../../site_page/demo/demo';
import ButtonEample from './button.example';

const ButtonDemo = () => {
  return (
    <Fragment>
      <Demo 
        code={require('!!raw-loader!./button.example.tsx').default}
        title={'Button按钮'}
        description={'使用 yui-react Button按钮。'}
      >
        <ButtonEample />
      </Demo>
    </Fragment>
  );
};

export default ButtonDemo;