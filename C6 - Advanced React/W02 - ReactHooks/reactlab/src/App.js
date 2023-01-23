import { useState, useEffect, useRef } from "react";
import UseEffectExample from "./Components/UseEffectExample";
import UseRefExample from "./Components/UseRefExample";
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
      <Section title="useRef" color="green">
        <UseRefExample />
      </Section>
    </div>
  );
}
