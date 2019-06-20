import React, { memo } from "react";

const Header = memo(function DirectWineApp() {
  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content ">
          <h1 className="header-title">Daytona Ant 500</h1>
        </div>
      </div>
    </header>
  );
});

export default Header;
