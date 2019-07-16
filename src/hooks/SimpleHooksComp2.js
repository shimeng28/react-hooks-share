import React, {
  useState, useEffect,
} from 'react';
import { Input, Comment, Avatar } from 'antd';

const Count = React.memo((props) => {
  // 组件didmount willunmont执行
  useEffect(() => {
    console.log('first render');
    return () => {
      console.log('component will unmount');
    }
  }, []);

  useEffect(() => {
    console.log('Count update');
    return () => {
      console.log('update did');
    }
  });

  const updateCount = () => {
    props.onClick();
  };

  return (
    <div onClick={updateCount}>button {props.count}</div>
  );
 },
//  (prevProps, nextProps) => {
//   // return true 不更新
//   return prevProps.count === nextProps.count;
// }
);

export default () => {
  const [name, setName] = useState('jokking');
  const [count, setCount] = useState(0);

  return (
    <>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
       />
       <Comment
        author={"小时哥"}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="小时哥"
          />
        }
        content={
          <p>
            My comment is {name}
          </p>
        }
      />
      <Count
        count={count}
        onClick={() => setCount(count + 1)}
      />
    </>
  );
};