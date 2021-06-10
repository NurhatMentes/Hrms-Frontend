import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedIn from '../signedIn/SignedIn'
import SignedOut from '../signedOut/SignedOut'
import CartSummary from '../cartSummary/CartSummary'
import { NavLink } from 'react-router-dom'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    return (
      <div>
        <div>
          <Menu inverted fixed="top">
            <Container>
              <Menu.Item as={NavLink} to="/employers" name="İş Verenler" />
              <Menu.Item
                as={NavLink}
                to="/jobadvertisements"
                name="İş Ilanları"
              />
              <Menu.Item name="İş Pozisyonları" />

              <Menu.Menu position="right">
                <CartSummary />
                {isAuthenticated ? (
                  <SignedIn SignOut={handleSignOut} />
                ) : (
                  <SignedOut SignIn={handleSignIn} />
                )}
              </Menu.Menu>
            </Container>
          </Menu>
        </div>
      </div>
    );
}
