import Head from "next/head";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Navbar from "@/components/bankofabid/Navbar";
import SliderSelect from "@/components/bankofabid/SliderSelect";
import TenureSelect from "@/components/bankofabid/TenureSelect";
import Result from "@/components/bankofabid/Result";
import {theme} from "@/components/bankofabid/theme"
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function Index() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    // monthlyPayment: 0,
  });
  return (
    <ThemeProvider theme={theme}>
    <Head>
      <title>Abid Hasan | Bank of Abid</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="lg:max-w-7xl lg:mx-auto mx-3 font-mono text-[#cbd5e1]">
      <Navbar />
      <Container maxWidth="xl" sx={{marginTop:4}}>
        {/* <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}/>
          </Grid>
        </Grid> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData}/>
          </div>
          <div>
            <Result data={data}/>
          </div>
        </div>
      </Container>
    </div>
    <CssBaseline />
    </ThemeProvider>
  )
}
