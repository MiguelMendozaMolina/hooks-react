import React, {useState} from 'react';

const Counter: React.FC = () => {
  // Usamos useState para crear un estado para el contador . Especificamos que el estado es de tipo number 
  const [count, SetCount] = useState<number>(0);

  return (
  <div>
    <p>You clicked {count} times</p>
    {/* Al hacer click, actualizamos el estado incrementando el contador en 1 */}
    <button onClick={() => SetCount(count + 1 )}>
      Click me
    </button>
  </div>
  );
}

export default Counter
