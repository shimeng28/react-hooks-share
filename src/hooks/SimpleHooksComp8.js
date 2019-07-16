
import React, {
  createContext, forwardRef, useMemo,
  useState, useEffect, useCallback,
  useContext, useRef, useImperativeHandle,
} from 'react';
import { Input, Comment, Avatar } from 'antd';

const MyNameContext = createContext('hello');

const Test = forwardRef((props, ref) => {
  const context = useContext(MyNameContext);

  useImperativeHandle(ref, () => ({
    getContent() {
      console.log('ref content');
    }
  }));

  return (
    <p>{context}</p>
  );
});

const Count = React.memo((props) => {
  useEffect(() => {
    console.log('Count update');
  });

  const updateCount = () => {
    props.onClick();
  };

  return (
    <div onClick={updateCount}>button {props.count}</div>
  );
 });

export default () => {
  const [name, setName] = useState('jokking');
  const [count, setCount] = useState(0);

  const ref = useRef();

  useEffect(() => {
    console.log('invoke ref method');
    ref.current.getContent();
  }, []);

  const inputChange = useCallback((e) => {
    setName(e.currentTarget.value);
  }, []);

  const countClick = useCallback(() => {
   setCount(count + 1);
  }, [count]);

  const countType = useMemo(() => {
    if (count % 2) {
      return 'odd';
    }
    return 'even';
  }, [count]);

  return (
    <>
      <Input
        type="text"
        value={name}
        onChange={inputChange}
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
            My comment is {name}, Click Count is {countType}
          </p>
        }
      />
      <Count
        count={count}
        onClick={countClick}
      />
      <MyNameContext.Provider>
        <Test ref={ref} />
      </MyNameContext.Provider>
    </>
  );
};