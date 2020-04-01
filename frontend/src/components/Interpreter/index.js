import React, { useState, useEffect } from 'react';
import './style.scss'
import Grid from '@material-ui/core/Grid'
import Container from '../ui/Container'
import Button from '../ui/Button'
import Input from '../ui/Input'
import { Icon } from '../ui/Icon'
import Text from '../ui/Text'
import Loader from '../ui/Loader'
import Highlighter from "react-highlight-words";
import DiagnosisSearch from '../DiagnosisSearch';

const cache = {}


export default () => {
  const [ interpreterText, setInterpreterText ] = useState('30yo M with a history of diabetes, morbid obesity who presented with sepsis and hyperglycemia. Found with blood cultures positive for e. coli.')
  const [ entities, setEntities ] = useState(null)
  const [ enteringText, setEnteringText ] = useState(true)
  const [ isLoading, setLoader ] = useState(false)
  const [ currentDx, setCurrentDx ] = useState(0)
  const [ codedDxes, setCodedDxes ] = useState([])

  function Proposed(props) {
    const description = props.description;
    const code = props.code;
    const score = props.score;
    const remove = props.remove;
    const message = {"Description": description, "Code": code, "Score": 1}
    if (remove) return (
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          {description} [{code}]
        </Grid>
        <Grid item xs={3}>
          <Grid container><a>Remove</a></Grid>
        </Grid>
      </Grid>
    );

    return (
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={9}>
          {description} [{code}] <i>{score.toFixed(3)}</i>
        </Grid>
        <Grid item xs={3}>
          <Grid container><a onClick={() => setCodedDxes(state => [...state, message])}>Accept</a></Grid>
          <Grid container><a>Reject</a></Grid>
        </Grid>
      </Grid>
    )
  }

  function DxItem(props) {
    const dxList = props.dxList;
    const className = props.className;
    const remove = props.remove;
    const listItems = dxList.map((dx) =>
      <li><Proposed description={dx.Description} code={dx.Code} score={dx.Score} remove={remove} /></li>
    );
    console.log(listItems);
    return (
      <ul className={className}>{listItems}</ul>
    );
  }

  const run = async () => {
    if(!cache[interpreterText]) {
      cache[interpreterText] = await (await fetch('/analyze/text.json?text=' + encodeURI(interpreterText.replace(/;/g, '')))).json()
    }
    setEntities(cache[interpreterText])
  }

  const processText = () => {
    setLoader(true)
    run();
    setTimeout( () => {
      setEnteringText(false)
      setLoader(false)
    }, 2000)
  }

  if (isLoading) return (
    <div className="interpreter">
      <Container box>
        <Loader text="Processing text..." />
      </Container>
    </div>
  )

  return (
    <div className="interpreter">
      <Container box>
        <Grid container spacing={2}>
          { enteringText ?
            <Grid item xs={12}>
              <h3>Enter Text:</h3>
              <Text secondary>SmarterDx will process your text.</Text>
              <Input
                textarea
                value={interpreterText}
                onChange={(e) => setInterpreterText(e.target.value)}
              />
              <Button onClick={processText}>Process</Button>
            </Grid>
            :
            <Grid item xs={12} sm={12}>
              <a
                className="reset-link"
                onClick={() => setEnteringText(true)}
              ><Icon icon="arrow-left" /> Enter new text</a>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={7}>
                  <h3>Result:</h3>
                  <div className="interpretation-container">
                    <pre className="highlighter-wrapper">
                      <Highlighter
                        activeIndex={currentDx}
                        highlightClassName="highlighter-term"
                        activeClassName="active"
                        searchWords={entities ? entities.Entities.filter(a=>a.Category=="MEDICAL_CONDITION")
                                                                .filter(a=>a.Traits.length < 2)
                                                                .map(({ Text, BeginOffset, EndOffset }) => Text) : []}
                        textToHighlight={interpreterText}
                      />
                    </pre>
                  </div>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <h3>Possible Diagnoses:</h3>
                        <DxItem className="dx-list" dxList={entities ? entities.Entities.filter(a=>a.Category=="MEDICAL_CONDITION")
                                                                .filter(a=>a.Traits.length < 2)[currentDx].ICD10CMConcepts : []} remove={false} />
                      {/* <h3>Rejected Diagnoses:</h3>
                      <ul className="dx-list rejected">
                        <li>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={9}>
                              Unspecified Escherichia coli [E. coli] as the cause of diseases classified elsewhere [B96.20]
                            </Grid>
                            <Grid item xs={3}>
                              <Grid container><a>Accept</a></Grid>
                            </Grid>
                          </Grid>
                        </li>
                        <li>
                          <Grid container spacing={2} alignItems="center">
                            <Grid item xs={9}>
                              Bacteremia [R78.81]
                            </Grid>
                            <Grid item xs={3}>
                              <Grid container><a>Accept</a></Grid>
                            </Grid>
                          </Grid>
                        </li>
                      </ul> */}
                      <a className="back-link"
                          onClick={() => setCurrentDx(currentDx-1)}><Icon
                          icon="arrow-left" /> Back   </a>   <a className="next-link"
                          onClick={() => setCurrentDx(currentDx+1)}>Next group <Icon
                          icon="arrow-right" /></a>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <h3>Coded Diagnoses:</h3>
                      <DiagnosisSearch onSelect={(dx) => {
                        setCodedDxes(state => [
                          ...state, {
                            Description: dx.diagnosis_desc,
                            Code: dx.diagosis_icd10
                          }
                        ])
                      }} />
                      <DxItem className="dx-list" dxList={codedDxes} remove={true} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          }
        </Grid>
      </Container>
    </div>
  )
}
