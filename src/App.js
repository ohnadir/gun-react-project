import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card/Card';
import Navbar, { NavbarIcon } from './Component/Navbar/Navbar';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleAddToCart = (selectedGun) => {
    const newCart = [...cart, selectedGun];
    setCart(newCart);
  }
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setGuns(data));
  }, [])

  
  return (
    <div>
      <Navbar cart={cart} openModal={openModal}></Navbar>
      
      
      <div className="gun">
        {
          guns.map(gun => <Card guns={gun} key={gun.id} handleAddToCart={handleAddToCart}/>)
        }
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
          <button onClick={closeModal}>Close</button>
        { <div>
          {
            cart.map(item =>  <NavbarIcon item={item} key={item.id}></NavbarIcon>)
          }
        </div> }
      </Modal>
    </div>
  );
}

export default App;
