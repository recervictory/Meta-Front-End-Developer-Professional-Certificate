import { useState, useEffect, useRef } from "react";
import UseEffectExample from "./Components/UseEffectExample";
import UseRefExample from "./Components/UseRefExample";
import DataFetchingHookExample from "./Components/DataFetchingHookExample";
import UseReducerExample  from "./Components/UseReducerExample";
import Section from "./layouts/Section";
export default function App() {
  return (
    <div>
      <Section title="useEffect" color="red">
        <UseEffectExample />
      </Section>
      <Section title="useRef" color="green">
        <UseRefExample />
      </Section>
      <Section title="Data fetching using hooks" color="gray">
        <DataFetchingHookExample />
      </Section>
      <Section title="UseReducer" color="lime">
        <UseReducerExample />
      </Section>
    </div>
  );
}
