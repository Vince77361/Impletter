import styled from 'styled-components';
import { useRef } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Frame from './select';
import Start from './Start';

export default function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="select" element={<Frame />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}