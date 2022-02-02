import React from 'react';
import { HeaderComponent } from './styled';

export default function Header({ black }) {
  return (
    <HeaderComponent style={black ? { backgroundColor: '#141414' } : { backgroundColor: 'transparent' }}>
      <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt="" />
      <img className="logo-usuario" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
    </HeaderComponent>
  );
}
