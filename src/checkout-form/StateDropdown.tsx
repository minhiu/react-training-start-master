import React, { ChangeEvent, useEffect, useState } from "react"

type State = {
    name: string,
    abbreviation: string
};
  
type StateDropdownProps = {
  name: string
  value: string,
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
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
      {usStates.map((state) => 
          <option key={state.abbreviation} value={state.abbreviation}>{state.name}</option>
      )}
    </select>
  );
}