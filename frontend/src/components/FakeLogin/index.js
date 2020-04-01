import React, { useState } from 'react'
import './style.scss'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import Input from '../ui/Input'

const FakeLogin = () => {
  let [ password, setPassword ] = useState('')
  let [ error, setError ] = useState(false)
  return (
    <Grid container spacing={4} alignItems="center">
      <div className="login">
        <Grid item xs={8} sm={8}>
          <h1>Login</h1>
          <Grid container className="login-container" spacing={10}>
            <Grid item xs={12}>
              <label>
                User:
                <Input type="text" name="user" />
              </label>

              <label>
                Password:
                <Input type="password" name="pw" value={password} onChange={(e) => setPassword(e.target.value)} />
              </label>

              <Link to="/covid" onClick={e => password === 'demo123' || e.preventDefault()}>
                <Button value="Submit">Sign in</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  )
}

export default FakeLogin;
