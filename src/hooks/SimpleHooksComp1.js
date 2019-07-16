import React, {
  useState
} from 'react';
import { Input, Comment, Avatar } from 'antd';

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
      <div onClick={() => setCount(count + 1)}>button {count}</div>
    </>
  );
};