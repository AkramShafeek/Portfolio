import React, { useEffect, useState } from 'react'

const mat = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

const Loader = () => {

  const order = [0, 1, 3, 2, 4, 6, 5, 7, 8];
  const [showable, setShowable] = useState([]);
  const [color, setColor] = useState([]);  

  const removeLoader = () => {
    const interval = setInterval(() => {
      setShowable(prevShowable => {
        if (prevShowable.length === 0) {
          clearInterval(interval);                              
          return prevShowable;
        }
        return prevShowable.filter((val, idx) => idx !== 0);
      });
    }, 200);
  }

  const startColoring = () => {
    const interval = setInterval(() => {
      setColor(prevColor => {
        if (prevColor.length === order.length) {
          clearInterval(interval);          
          setTimeout(() => removeLoader(), 1000);          
          return prevColor;
        }
        return [...prevColor, order[prevColor.length]];
      });
    }, 100);
  }  

  useEffect(() => {    
    const interval = setInterval(() => {
      setShowable(prevShowable => {
        if (prevShowable.length === order.length) {
          clearInterval(interval);                    
          setTimeout(() => startColoring(), 1000);
          return prevShowable;
        }
        return [...prevShowable, order[prevShowable.length]];
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className='flex gap-1 lg:gap-2 flex-wrap w-24 lg:w-40'>
      {mat.map((row, i) =>
        row.map((col, j) =>
          <div key={i * mat[0].length + j}
            className={`w-1/4 aspect-square rounded-sm text-center ${showable.indexOf(i * mat[0].length + j) !== -1 ? 'opacity-1 scale-1' : 'opacity-0 scale-0'} transition-all ${color.indexOf(i * mat[0].length + j) !== -1 ? 'bg-emerald-500' : 'bg-slate-800'}`}
            >            
          </div>
        ))}
    </div>
  )
}

export default Loader