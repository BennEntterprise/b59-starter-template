import React from 'react'
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Button,
  InputGroup,
} from 'react-bootstrap'
export const B59Navbar = () => {
  return (
    <div>
      <Navbar fixed='top' bg='light' expand='lg'>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#link'>Link</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline className='mr-4'>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text id='username'>@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl placeholder='Username' aria-label='Username' />
            </InputGroup>
            <InputGroup>
              <FormControl placeholder='password' aria-label='password' />
            </InputGroup>
            <Button variant='primary'>Login</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
