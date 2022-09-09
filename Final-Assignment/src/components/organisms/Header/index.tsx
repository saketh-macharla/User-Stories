import { Avatar, Button, Typography } from "@mui/material";
import React from "react";

const Header = ()  => {
  const handleBuy=()=>{
    // navigate to PurchaseSellPage page with state as buy
  }
  const handleSell=()=>{
    // navigate to PurchaseSellPage page with state as sell
  }

  return (
    <div>
      <Typography>Dashboard</Typography>
      <Button  onClick={handleBuy}>SELL</Button>
      <Button  onClick={handleSell}>BUY</Button>
      <Avatar></Avatar>
      {/* collapseIcon */}
    </div>
  );
}

export default Header;