import React, { useEffect, useState } from 'react'

const mat = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

const Loader = () => {

  const order = [0, 1, 3, 2, 4, 6, 5, 7, 8];
  const [showable, setShowable] = useState([]);
  const [color, setColor] = useState([]);
  const [startColoring, setStartColoring] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(false);


  useEffect(() => {
    if (showable.length === 0 || color.length === 0)
      return;
    const interval1 = setInterval(() => {
      setShowable(prevShowable => {        
        if (prevShowable.length === 0) {
          clearInterval(interval1);
          return prevShowable;
        }
        console.log(prevShowable.filter((val, idx) => idx !== 0));
        return prevShowable.filter((val, idx) => idx !== 0);
      });
    }, 90);

    return () => clearInterval(interval1);
  }, [removeLoader]);

  useEffect(() => {
    if (showable.length === 0)
      return;    
    const interval2 = setInterval(() => {
      setColor(prevColor => {
        if (prevColor.length === order.length) {
          clearInterval(interval2);
          setTimeout(() => setRemoveLoader(true), 500);
          return prevColor;
        }        
        return [...prevColor, order[prevColor.length]];
      });
    }, 90);

    return () => clearInterval(interval2);
  }, [startColoring]);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setShowable(prevShowable => {
        if (prevShowable.length === order.length) {
          clearInterval(interval3);
          setTimeout(() => setStartColoring(true), 500);
          return prevShowable;
        }        
        return [...prevShowable, order[prevShowable.length]];
      });
    }, 90);

    return () => clearInterval(interval3);
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