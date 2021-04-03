import React,{useState} from 'react'
import {Button,ProgressBar} from 'react-bootstrap'
import styled from 'styled-components'

const Home = () => {

  const [user,setUser] = useState(true)

  const changeUser = () => setUser(!user)



  return (
    <JaredsBox>
      <div>
      <h1>This the the home</h1>
      <button style={{marginLeft:'10px'}}>Button 1</button>
      <Button onClick={changeUser}>Button 2</Button>
      <StyledButton>Button 3</StyledButton>
      <StyledBSbutton>Button 4</StyledBSbutton>
      </div>
      <div>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
      </div>
      <div>
        <StyledProgress now={80}/>
      </div>
      {user == true ? <Button>Edit Post</Button>: <h6>nothing see</h6>}
      {/* {user.id == postMessage.user_id ? <Button>Edit Post</Button>: <h6>nothing see</h6>} */}
    </JaredsBox>
  
  )
}


const JaredsBox = styled.div`
  padding:10%;
  background:yellow;
  display:flex;
`

const StyledButton = styled.button` 
margin:10px;
color:red;
background:blue;
border-radius: 15px;
`

const StyledBSbutton = styled(Button)`
margin:10px;
background:purple;
&:hover{
  background:red;
}
`
const StyledProgress = styled(ProgressBar)`
margin:10px;
.progress-bar{
  background-color: purple;
}
`



export default Home
