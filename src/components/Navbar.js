import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div class="ui secondary menu container">
      <Link className="item" to="/">
        Home
      </Link>
      <a class="item" href="https://allenpavic.ga">
        Website
      </a>
      <a class="item" href="https://ewebdesigns.com.au">
        eWebDesigns
      </a>
      <a class="ui item" href="https://github.com/alvics">
        Githib
      </a>
    </div>
  );
}
