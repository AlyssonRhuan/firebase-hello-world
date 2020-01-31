import React, { useState, useEffect } from 'react';
import GlobablConfig from '../config/Global'

function Home() {
  return (
    <main className="App col-12 px-5">
      <section>
        <h1 class="display-4">Bem vindo ao {GlobablConfig.AppName}</h1>
      </section>
    </main>
  );
}

export default Home;
