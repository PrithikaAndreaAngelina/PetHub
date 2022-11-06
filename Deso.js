import React, {useState, useEffect} from 'react';
import {Box, Grid, Stack, Button, TextField} from '@mui/material';
import DesoIdentity from './libs/desoIdentity'
import DesoApi from './libs/desoApi'
const IdentityUsersKey = "identityUsersV2"

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [toUsername, setToUsername] = useState("@Prithika")
  const [message, setMessage]= useState("🐶🐱🐭🐹🐰 waiting for you to send your DM...")
  const [publicKey, setSetPublicKey] = useState(null)
  const [desoIdentity, setDesoIdentity] = useState(null)
  const [desoApi, setDesoApi] = useState(null)
  
  useEffect(() => {
    const di = new DesoIdentity()
    setDesoIdentity(di)
    const da = new DesoApi()
    setDesoApi(da)

    let user = {}
    if (localStorage.getItem(IdentityUsersKey) === 'undefined'){
      user = {}
    } else if (localStorage.getItem(IdentityUsersKey)){
      user = JSON.parse(localStorage.getItem(IdentityUsersKey) || '{}')
    }

    if(user.publicKey){
        setLoggedIn(true)
        setSetPublicKey(user.publicKey)
    }

  } , []) 

  const login = async () => {
    const user = await desoIdentity.loginAsync(4)
    setSetPublicKey(user.publicKey)
    setLoggedIn(true)
  }
  const logout = async () => {
    const result = await desoIdentity.logout(publicKey)
    setSetPublicKey(null)
    setLoggedIn(false)
  }

  const sendDm = async () => {
    //alert("I will eventually create your post")
    const body = "DM " + toUsername
    const extraData = {
      app : 'Pet Hub',
      type : 'DM',
    }
    const rtnSubmitPost = await desoApi.submitPost(publicKey,  body, extraData)
    const transactionHex = rtnSubmitPost.TransactionHex
    const signedTransactionHex = await desoIdentity.signTxAsync(transactionHex)
    const rtnSubmitTransaction = await desoApi.submitTransaction(signedTransactionHex) 

    if(rtnSubmitTransaction) {
      setMessage("🎉 DM Sent!!! 🥳")
    }

  }
 

  return (
        <>
        <div class="m-5 ">
        <iframe
        title="desoidentity"
        id="identity"
        frameBorder="0"
        src="https://identity.deso.org/embed?v=2"
        style={{height: "100vh", width: "100vw", display: "none", position: "fixed",  zIndex: 1000, left: 0, top: 0}}
    ></iframe>
    <Grid container>
      <Grid item sm={0} lg={4}></Grid>
      <Grid item sm={12} lg={4} sx={{alignItems:"center", justifyContent:"center", display:"flex"}}  >

      <Stack >
       <Box sx={{mb:2, mt:2}}>
          {
            (loggedIn) ? (
              <Button variant="contained" onClick={logout}>
                Log Out
              </Button>

            ) : (
             <Button variant="contained" onClick={login}>
               Login
              </Button>  
            )
          }
        </Box>
          {
            (loggedIn) ? (
              <>
              <Box sx={{mb:2}}>
<div class="font-bold">
                DM, PublicKey is:
                 {publicKey}
                </div>
              </Box>
              <Box sx={{mb:2}}>
                <TextField
                sx={{width:"80%",height:"100%", mb:2}}
                id="event-username"
                label="Send DM to..."
                value={toUsername}
                onChange={e => setToUsername(e.target.value)}
                />
              </Box>
              <Box sx={{mb:2}}>
                <Button variant="contained" onClick={sendDm} > Send DM </Button>
              </Box>
              <Box sx={{mb:2}}>
                {message}
              </Box>
              </>
            ) : (
              null
            )
          }
      </Stack>  

      </Grid>
      <Grid item sm={0} lg={4}></Grid>
      
    </Grid>
    </div>
     </>
    
  );
}

export default App;