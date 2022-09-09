import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import IconPrimary from "../../atoms/Icon";
import MyPortfolioCoinsList from "../../molecules/MyPortfolioCoinsList";
import MyWallet from "../../molecules/MyWallet";
import Header from "../../organisms/Header";
import SideBar from "../../organisms/Sidebar";
import WatchList from "../../organisms/WatchList";
import axios from 'axios';
import MyPortfolio from "../../molecules/MyPortfolio";


const HomePage = () => {
  const [data, setData] = React.useState<any>();
  useEffect(()=>{
    axios.get('dataurl').then((res: any)=>{setData(res)}).catch((err: any) => console.log('Error :', err));
  }, []);
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
              <WatchList coins={[]}></WatchList>
            </Grid>
            <Grid item>
              <MyPortfolio
                total={0}
                coin={data}
              ></MyPortfolio>
            </Grid>
            <Grid item>
              <IconPrimary iconurl="arrowLeft"></IconPrimary>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
            <Grid item>
                <MyPortfolioCoinsList coins={data}
                ></MyPortfolioCoinsList>
            </Grid>
            <Grid item>
                <MyWallet coins={data}></MyWallet>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;