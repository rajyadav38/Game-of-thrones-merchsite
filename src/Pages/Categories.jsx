import React from "react";

function Categories() {
  return (
    <>
      <div className="categories-container">
        <h1 className="categories-title">Shop by House</h1>

        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://i.pinimg.com/736x/59/66/78/59667849011c0adb630c86f2fe7d579b.jpg"
                className="card-img-top"
                alt="House Stark"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">House Stark</h5>
                <p className="card-text">Winter is Coming ❄️</p>
                <button className="btn btn-warning">View Items</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://w0.peakpx.com/wallpaper/800/376/HD-wallpaper-house-lannister-game-of-thrones.jpg"
                className="card-img-top"
                alt="House Lannister"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">House Lannister</h5>
                <p className="card-text">Hear Me Roar 🦁</p>
                <button className="btn btn-warning">View Items</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://wallpapers.com/images/thumbnail/fire-and-blood-house-targaryen-4i5v6xdsgucp7gq1.webp"
                className="card-img-top"
                alt="House Targaryen"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">House Targaryen</h5>
                <p className="card-text">Fire and Blood 🔥🐉</p>
                <button className="btn btn-warning">View Items</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-lg border-dark">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlOADMhaHbT90XsF7pg8SLyL7WeXErF4DLqIRiIHrIMim3doR7dFYtEzyRW8TZEyTAODg&usqp=CAU"
                className="card-img-top"
                alt="House Baratheon"
              />
              <div className="card-body text-center bg-dark text-light">
                <h5 className="card-title">House Baratheon</h5>
                <p className="card-text">Ours is the Fury 🦌</p>
                <button className="btn btn-warning">View Items</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
