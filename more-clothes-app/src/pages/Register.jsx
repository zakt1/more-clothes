
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255,255,255,0.4),
    rgba(255,255,255,0.2)
    
    ), url("https://images.unsplash.com/photo-1510951475896-ce8cacb1899f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"), center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`
const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
`
const Title = styled.h1`
  font-size:24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;

`
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`
const Button = styled.button`
  width: 40%;
  font-size: 15px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>REGISTER AN ACCOUNT</Title>
            <Form>
              <Input placeholder="First Name"/>
              <Input placeholder="Last Name"/>
              <Input placeholder="username"/>
              <Input placeholder="email"/>
              <Input placeholder="password"/>
              <Input placeholder="confirm password"/>
              <Agreement>
                By creating an account, I consent to the processing of my personal data in accordance with <b>More Clothes' Privacy Policy</b>
              </Agreement>
              <Button>Sign up</Button>
             
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register