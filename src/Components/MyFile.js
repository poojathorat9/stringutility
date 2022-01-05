import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { BiRotateLeft, BiCut } from "react-icons/bi";
import { MdFormatSize } from "react-icons/md";
import { makeStyles } from "@material-ui/core";
import { FiCornerRightDown } from "react-icons/fi";

const styles = makeStyles((theme) => ({
  field: {
    borderColor: "black",
  },
}));

export default function MyFile() {
  const classes = styles();

  const [finalResult, setFinalResult] = useState("");
  const [string, setString] = useState("");

  const myStringFunc = (event) => {
    setString(event.target.value);
  };

  const lengthFunction = () => {
    const result = string.length;
    console.log(result);
    setFinalResult(result);
  };

  const upperCaseFunc = () => {
    const result = string.toUpperCase();
    console.log(result);
    setFinalResult(result);
  };

  const lowerCaseFunc = () => {
    const result = string.toLowerCase();
    console.log(result);
    setFinalResult(result);
  };

  const reverseFunc = () => {
    let final = "";
    for (let i = string.length - 1; i >= 0; i--) {
      final += string[i];
    }
    setFinalResult(final);
  };

  const removeExtraSpaceFunc = (number) => {
    let final = "";

    if (number === 0) {
      for (let i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) === " ") {
          continue;
        }
        final += string[i];
      }

      setFinalResult(final);
    } else {
      let final1 = [];

      let allStrings = string.split(" ");

      let array = [];
      for (let i = 0; i < allStrings.length; i++) {
        if (allStrings[i] !== "") {
          array.push(allStrings[i]);
        }
      }

      console.log(array.join(" "));
      setFinalResult(array.join(" "));
    }
  };

  return (
    <Grid container spacing={1}>
      <Grid container spacing={1} item xs={12}>
        {/* <h3>xs=8</h3> */}
        <Grid item xs={2}>
          {/* <p style={{fontSize:17}}>Please enter you string here :</p> */}
        </Grid>

        <Grid item xs={8}>
          <TextField
            placeholder="Enter your string here"
            variant="outlined"
            style={{
              width: "100%",
              height: "150%",
              padding: "30px",
              borderColor: "black",
            }}
            onChange={myStringFunc}
            value={string}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline,
              },
            }}
          />
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>

      <Grid container spacing={1} style={{ padding: "20px" }}>
        <Grid item xs={2}>
          <Button
            endIcon={<MdFormatSize />}
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={lengthFunction}
          >
            Length
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            endIcon={<IoIosArrowRoundUp />}
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={upperCaseFunc}
          >
            Uppercase
          </Button>
        </Grid>

        <Grid item xs={2}>
          <Button
            endIcon={<IoIosArrowRoundDown />}
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={lowerCaseFunc}
          >
            Lowercase
          </Button>
        </Grid>

        <Grid item xs={2}>
          <Button
            endIcon={<BiRotateLeft />}
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={reverseFunc}
          >
            Reverse
          </Button>
        </Grid>

        {/* <Grid item xs={2}>
        <Button endIcon={<BiCut/>} variant="contained" style={{backgroundColor: 'black',color: 'white'}} onClick={() => {removeExtraSpaceFunc(0)}}>Remove Spaces</Button>
        </Grid> */}

        <Grid item xs={3}>
          <Button
            endIcon={<BiCut />}
            variant="contained"
            style={{ backgroundColor: "black", color: "white" }}
            onClick={() => {
              removeExtraSpaceFunc(1);
            }}
          >
            Remove extra Spaces
          </Button>
        </Grid>
      </Grid>
      {/*
        <Grid item xs={2}>
        <Button onClick={myFunc}>Click me</Button>
        </Grid>  */}

      <Grid container item justifyContent="center" xs={12}>
        <p style={{ fontsize: 20 }}>
          {" "}
          <h1>
            {" "}
            Result <FiCornerRightDown />
          </h1>
        </p>
        <hr style={{ width: "100%", backgroundColor: "black" }} />
        <Grid item xs={12} padding={5}>
         
           
              <p>
                <b>
                  <h1>{finalResult}</h1>
                </b>
              </p>
           
        </Grid>
      </Grid>
    </Grid>
  );
}
