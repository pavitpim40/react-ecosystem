import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Button variant='text'>button</Button>
      <Button variant='contained'>button</Button>
      <Button variant='contained' disabled>
        button
      </Button>
      <Button variant='outlined'>button</Button>

      <Button variant='contained' color='primary'>
        button
      </Button>
      <Button variant='contained' color='secondary'>
        button
      </Button>
      <Button variant='contained' color='success'>
        button
      </Button>
      <Button
        variant='contained'
        color='error'
        onClick={() => alert('Clicked')}
        sx={{ padding: '10px', marginTop: '20px', borderRadius: '10px' }}
      >
        button
      </Button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
