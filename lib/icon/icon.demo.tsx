import IconExample from './icon.example';
import React, {Fragment} from 'react';
import Demo from '../../site_page/demo/demo';

const IconDemo = () => {
  return (
    <Fragment>
      <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
        <IconExample/>
      </Demo>
    </Fragment>
  );
};

export default IconDemo;