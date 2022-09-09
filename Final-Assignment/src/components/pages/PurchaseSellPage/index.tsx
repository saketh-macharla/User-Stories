import { Card, FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import IconPrimary from "../../atoms/Icon";
import AmountDetails from "../../molecules/AmountDetails";
import ChooseCrypto from "../../molecules/ChooseCrypto";
import PaymentInformation from "../../molecules/PaymentInformation";
import Header from "../../organisms/Header";
import SideBar from "../../organisms/Sidebar";

const PurchaseSellPage = () => {
  const names = [
    'instant',
    'Faster',
    'Fast',
    'none',
    
  ];
  const [deliveryType, setdeliveryType] = useState("");
  const handleChange=()=>{
  }
  return (
    <div>
      <Header></Header>
      {/* at top */}
      <SideBar></SideBar>
      {/* left side */}
      <Grid container>
        <Grid item xs={8}>
          <Grid container>
            <Grid item>
              Buy Crypto
              <ChooseCrypto coins={[]}></ChooseCrypto>
            </Grid>
            <Grid item>Payment Method</Grid>
            <Grid item>
              <AmountDetails></AmountDetails>
            </Grid>
            <Grid item>
              Select speed delivery
              <Card>
                <IconPrimary iconurl="van"></IconPrimary>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <Select
                    value={deliveryType}
                    onChange={handleChange}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <PaymentInformation coin={{
              name: "",
              price: 0,
              symbol: "",
              state: "",
              amount: 0,
              transactionfee: 0
            }}></PaymentInformation>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default PurchaseSellPage;