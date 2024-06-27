// import { useState } from 'react';
// import React from 'react';
// import styled from '@emotion/styled';
// import { useEffect } from 'react';

// const Navbar = styled('nav')(() => ({
//   backgroundColor: '#333',
//   color: '#fff',
//   width: '100%',
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   zIndex: 1000,
// }));

// const ListItem = styled('li')(() => ({
//   display: 'inline-block',
//   marginRight: '20px',
//   fontSize: '18px',
//   cursor: 'pointer',
// }));

// const Link = styled('a')(() => ({
//   color: '#fff',
//   textDecoration: 'none',

//   '&:hover': {
//     textDecoration: 'underline',
//   },
// }));
// const TopNavbar = () => {
//   return (
//     <div>
//       <Navbar>
//         <ul style={{}}>
//           <ListItem>
//             <Link href={'/'}>Home</Link>
//           </ListItem>
//           <ListItem>
//             <Link href={'/users'}>Users</Link>
//           </ListItem>
//         </ul>
//       </Navbar>
//     </div>
//   );
// };

// export default TopNavbar;







import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const Navbar = styled('nav')(({ sticky }) => ({
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
  position: sticky ? 'fixed' : 'absolute',
  top: 0,
  left: 0,
  zIndex: 1000,
  transition: 'position 0.3s ease',
}));

const ListItem = styled('li')(() => ({
  display: 'inline-block',
  marginRight: '20px',
  fontSize: '18px',
  cursor: 'pointer',
}));

const Link = styled('a')(() => ({
  color: '#fff',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const TopNavbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar sticky={sticky}>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        <ListItem>
          <Link href={'/'}>Home</Link>
        </ListItem>
        <ListItem>
          <Link href={'/users'}>Users</Link>
        </ListItem>
      </ul>
    </Navbar>
  );
};

export default TopNavbar;

