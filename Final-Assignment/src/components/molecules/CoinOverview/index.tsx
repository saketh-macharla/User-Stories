

import { Grid } from "@mui/material";
import React from "react";
import GraphPrimary from "../../atoms/GraphPrimary";
import IconPrimary from "../../atoms/Icon";

interface Props {
  coin: {
    id: number;
    icon: string;
    symbol: string;
    name: string;
    price: number;
    change: number;
    MarketCap: number;
    description: string;
  };
}
const CoinOverview = (props: Props) => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <Grid item>
            Current value
            {/* history Tab */}
          </Grid>
          <Grid item>${props.coin.price}</Grid>
          <Grid item>
            <IconPrimary iconurl="arrowIcon"></IconPrimary>
            {props.coin.change}%
          </Grid>
          <Grid item>
            <GraphPrimary value={props.coin.price}></GraphPrimary>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item xs={8}>
            <Grid item xs={4}>
              About {props.coin.name}
              {props.coin.description}
            </Grid>

            <Grid item xs={4}>
              Resources
              <IconPrimary iconurl="websiteIcon"></IconPrimary>
              {/* resourcr url */}
            </Grid>
          </Grid>
          <Grid item xs={4}>
            Price correlation with
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CoinOverview;