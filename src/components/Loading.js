import React, { useState, useEffect } from 'react';
import IconsUtils from '../utils/IconsUtils'

function Loading() {
  return (
    <main className="Loading align-middle">
      <section>
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      </section>
    </main>
  );
}

export default Loading;
