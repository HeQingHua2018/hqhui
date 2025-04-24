import { SpriteAnimation } from 'hqhui';
import React from 'react';

export default function base() {
  const config = {
    spriteImageUrl: require('@assets/sprites.png'),
    frameCount: 26,
    frameWidth: 200,
    frameHeight: 200,
  };
  return <SpriteAnimation {...config} />;
}
