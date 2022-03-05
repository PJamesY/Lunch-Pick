import React, { useState, useEffect, useCallback } from 'react';
import { throttle } from 'lodash';

const ThrottleComponent = function ThrottleComponent() {
  const [value, setValue] = useState(0);
  const throttled = useCallback(
    throttle((newValue) => console.log(newValue), 10000),
    [],
  );

  useEffect(() => {
    throttled(value);
  }, [value]);

  return (
    <button onClick={() => setValue(value + 1)} type="button">
      {value}
    </button>
  );
};

export default ThrottleComponent;
