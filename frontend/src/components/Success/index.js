import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { Icon } from '../ui/Icon'
import successGraphic from '../../assets/success-graphic.svg'

export default () => {
  return (
    <div className="query-success">
      <Container box>
        <div className="query-success-content">
          <img src={successGraphic} />
          <h1>Success!</h1>
          <p className="secondary">Now, keep at it.</p>
          <Grid container spacing={3} className="success-ctas">
            <Grid item xs={6}>
              <Link to="/list">
                <Button full secondary>
                  <Icon className="success-cta-icon" icon="arrow-left" /> Back to Dashboard
                </Button>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Link to="/workflow/next">
                <Button full>
                  Next Chart <Icon className="success-cta-icon" icon="arrow-right" />
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
