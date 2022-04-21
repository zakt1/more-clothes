import styled from "styled-components"


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.4),
    rgba(255,255,255,0.2)
    
    ), url("https://images.unsplash.com/photo-1536321116941-0fd6d4d7a23f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"), center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
`
const Title = styled.h1`
  font-size:24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;

`

const Button = styled.button`
  width: 40%;
  font-size: 15px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration:underline;
`


const Login = () => {
  return (
    <Container>
      <Wrapper>
            <Title>LOGIN</Title>
            <Form>
              <Input placeholder="username"/>
              <Input placeholder="password"/>
              <Button>LOGIN</Button>

             
            </Form>
        </Wrapper> 
    </Container>
  )
}

export default Login