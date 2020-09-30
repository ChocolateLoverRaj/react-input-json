import React, { useCallback } from 'react';

import { ControlledFieldProps, Json } from '../types';
import { toBoolean } from '../utils';

interface ValueBooleanProps extends ControlledFieldProps<boolean> {}

export const ValueBoolean: React.FC<ValueBooleanProps> = (props) => {
  const { value, onChange } = props;
  const handleChange = useCallback(
    ({ target: { checked } }) => {
      onChange(toBoolean(checked));
    },
    [onChange],
  );

  return <input checked={value} type="checkbox" onChange={handleChange} />;
};

ValueBoolean.displayName = 'ValueBoolean';
