import { useState } from 'react';

function Test() {
  const [text, setText] = useState('Some text');
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
}

ReactDOM.render(<Test />, document.getElementById('root'));
