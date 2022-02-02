import React from 'react';
import { FooterComponent } from './styled';

export default function Footer({ black }) {
  return (
    <FooterComponent>
      <p>
        Feito com
        {' '}
        <span>&#10084;</span>
        {' '}
      </p>
    </FooterComponent>
  );
}
