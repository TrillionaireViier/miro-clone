import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';
import './App.css';

export default function App() {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw persistenceKey="miro-clone-board" />
    </div>
  );
}
