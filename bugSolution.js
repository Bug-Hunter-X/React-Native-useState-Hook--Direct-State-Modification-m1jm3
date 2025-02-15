import React, { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count => count + 1); // Correct way to update state
  };

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
};

export default MyComponent;