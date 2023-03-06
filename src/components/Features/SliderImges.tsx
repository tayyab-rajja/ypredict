import React from 'react';

const VerticalImageSlider = () => {
  return (
    <div className="wrapper">
      <div className="outer">
        <div
          className="card"
          style={{ '--delay': '-1' } as React.CSSProperties}
        >
          <div className="content">
            <img src="/img/features/1.jpg" alt="" />
          </div>
        </div>
        <div className="card" style={{ '--delay': '0' } as React.CSSProperties}>
          <div className="content">
            <img src="/img/features/2.png" alt="" />
          </div>
        </div>
        <div className="card" style={{ '--delay': '1' } as React.CSSProperties}>
          <div className="content">
            <img src="/img/features/3.png" alt="" />
          </div>
        </div>
        <div className="card" style={{ '--delay': '2' } as React.CSSProperties}>
          <div className="content">
            <img src="/img/features/4.jpeg" alt="" />
          </div>
        </div>
        <div className="card" style={{ '--delay': '3' } as React.CSSProperties}>
          <div className="content">
            <img src="/img/features/5.jpg" alt="" />
          </div>
        </div>
        <div className="card" style={{ '--delay': '4' } as React.CSSProperties}>
          <div className="content">
            <img src="/img/features/6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalImageSlider;
