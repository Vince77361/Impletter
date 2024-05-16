import styled from 'styled-components';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Frame from './select';
import Start from './Start';
import Write from './write';
import Check from './check';
import Final from './final';

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/select" element={<Frame />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/check" element={<Check/>} />
        <Route path="/final" element={<Final/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}