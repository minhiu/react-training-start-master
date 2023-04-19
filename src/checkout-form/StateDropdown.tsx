import React, { useEffect, useState } from "react"

type State = {
    name: string,
    abbreviation: string
};
  
type StateDropdownProps = {
  name: string
  value: string,
  onChange: (event: any) => void
};

export const StateDropdown = (props: StateDropdownProps) => {
  const [usStates, setUsStates] = useState<State[]>([])

  useEffect(() => {
    fetch("http://localhost:8000/states")
      .then(res => res.json())
      .then(states => setUsStates(states));       
  }, [])

  return (
    <select className="form-control" placeholder="State" name={props.name} required value={props.value} onChange={props.onChange}>
      {usStates.map((state, index) => 
          <option key={index} value={state.name}>{state.abbreviation}</option>
      )}
    </select>
  );
}