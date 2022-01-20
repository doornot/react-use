import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useEffectOnce } from '../src';
import ShowDocs from './util/ShowDocs';

const Demo = () => {
  const [count, setCount] = React.useState(0);
  useEffectOnce(() => {
    console.log('Running effect once on mount');

    return () => {
      console.log('Running clean-up of effect on unmount');
    };
  });

  React.useEffect(() => {
    console.log('Running effect on every render');
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setCount]);

  return <div>{`count: ${count}`}</div>;
};

storiesOf('Lifecycle/useEffectOnce', module)
  .add('Docs', () => <ShowDocs md={require('../docs/useEffectOnce.md')} />)
  .add('Demo', () => <Demo />);
