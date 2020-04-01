// here's an extremely bare bones example of an autocomplete
import React, { useEffect, useState } from 'react'
import './style.scss'
import Downshift from 'downshift'
import Loader from '../ui/Loader'
import Input from '../ui/Input'

const Items = ({ inputValue, getItemProps, highlightedIndex, selectedItem }) => {
  let [items, setItems] = useState([])
  let [loading, setLoading] = useState(false)
  useEffect(() => {
    (async () => {
      setLoading(true)
      let result = await fetch('/cdidashboard/diagnosis-autocomplete?q=' + encodeURIComponent(inputValue), {
        headers: {
          'content-type': 'application/json',
          'accept': 'application/json'
        }
      })
      let diagnoses = await result.json()
      setItems(diagnoses.results)
      setLoading(false)
    })()
  }, [inputValue])

  return <>{
    loading ? <Loader />
    :
    items.map((item, index) => {
      return <li
      {...getItemProps({
        key: item.id,
        index,
        item,
        style: {
          backgroundColor:
            highlightedIndex === index ? '#eeefff' : null,
          fontWeight: selectedItem === item ? 'bold' : 'normal',
        },
      })}
    >
      {item.text}
    </li>

    })
  }</>

}

export default ({ onSelect = () => {} }) => {
  return <Downshift
    itemToString={item => (item ? item.text : '')}
    onSelect={(item) => {
      let [,diagnosis_desc, diagosis_icd10] = item.text.match(/(.*)\s\(([A-Z0-9]+)\)$/)
      onSelect({ diagosis_icd10, diagnosis_desc })
    }}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div className="diagnosis-search">
        {/*<label {...getLabelProps()}>Add Diagnosis</label>*/}
        <Input {...getInputProps()} />
        <ul {...getMenuProps()}>
          {isOpen
            ? <Items highlightedIndex={highlightedIndex} selectedItem={selectedItem} getItemProps={getItemProps} inputValue={inputValue} />
            : null}
        </ul>
      </div>
    )}
  </Downshift>
}
