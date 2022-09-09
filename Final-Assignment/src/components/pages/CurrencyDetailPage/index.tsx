import { Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonIcon from "../../atoms/ButtonIcon";
import IconPrimary from "../../atoms/Icon";
import CoinOverview from "../../molecules/CoinOverview";
import Wallet from "../../molecules/Wallet";
import Header from "../../organisms/Header";
import SideBar from "../../organisms/Sidebar";

interface Props {
  coin: {
    name?: string;
    price?: number;
    symbol?: string;
    amount?: number;
    change?: string;
    icon?: string;
    marketCap: number;
    vol: number;
    circulatinSupply: number;
  };
}
const CurrenyDetailPage = (props: Props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setactiveTab] = useState(0);
  const handleOverview=()=>{
    setactiveTab(0);
  }
  const handleWallet=()=>{
    setactiveTab(1);
  }
  return (
    <div>
      <Header></Header>
      {/* at top */}
      <SideBar></SideBar>
      {/* left side */}
      <Grid container>
        <Grid item>
          <Card>
            <Grid container direction="column">
              <Grid item>
                <IconPrimary iconurl={props.coin.icon}></IconPrimary>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>{props.coin.name}</Grid>
                  <Grid item>${props.coin.symbol}</Grid>
                </Grid>
              </Grid>
              <Grid item>
                <IconPrimary iconurl={props.coin.icon}></IconPrimary>
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item>
                    <Typography>Market Cap</Typography>
                  </Grid>
                  <Grid item>${props.coin.symbol}</Grid>
                </Grid>
              </Grid>
              <Grid item>
              <Grid container>
                  <Grid item>
                    <Typography>Vol 24H</Typography>
                  </Grid>
                  <Grid item>${props.coin.vol}T</Grid>
              </Grid>
              </Grid>
              <Grid item><Grid container>
                  <Grid item>
                    <Typography>Circulating Supply</Typography>
                  </Grid>
                  <Grid item>${props.coin.circulatinSupply}M{props.coin.symbol}</Grid>
              </Grid>
              </Grid>
              <Grid item><ButtonIcon startIcon="star" text="Add to WatchList"></ButtonIcon></Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Typography onClick={handleOverview}>Overview</Typography>
          <Typography onClick={handleWallet}>Wallet</Typography>
          {activeTab==0?<CoinOverview coin={{
            id: 0,
            icon: "",
            symbol: "",
            name: "",
            price: 0,
            change: 0,
            MarketCap: 0,
            description: ""
          }}></CoinOverview>:<Wallet coins={[]} coin={{
              name: undefined,
              price: undefined,
              symbol: undefined,
              amount: undefined,
              change: undefined,
              icon: undefined,
              balance: undefined,
              from: undefined
            }}></Wallet>}
        </Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item>
              About coin
            </Grid>
            <Grid item>
              {/* resources */}
            </Grid>
            <Grid item>
              <IconPrimary iconurl="arrowLeft"></IconPrimary>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          {/* price corelation list */}
          
        </Grid>
        
      </Grid>
    </div>
  );
}

export default CurrenyDetailPage;