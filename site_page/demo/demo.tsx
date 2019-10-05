import * as React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import {useState} from 'react';
import './demo.scss';
import Icon from './../../lib/icon/icon';

interface Props {
  code: string,
  title: string,
  description: string,
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(true);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
      )}
    </Highlight>
  );
  return (
    <div className="example">
      <div className="container">
        {props.children}
      </div>
      <div className="code-box">
        <div className="code-title">{props.title}</div>
        <div className="code-des">
          {props.description} 
          <span className="icon-wrapper">
          <Icon onClick={() => setCodeVisible(!codeVisible)} name='codepen'></Icon>
          </span>
        </div>
          <div className={codeVisible ? "code-visible" : "code-content"}>
          {code}
          </div>
      </div>
    </div>
  );
};

export default Demo;