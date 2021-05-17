import Link from 'next/link';

const LogoButton = () => {
  return (
    <>
    <Link href='/'>
      <img src='/assets/austin-logo.png' alt='Logo'/>

      <style jsx>
        {`
          img {
            height: 60px;
          }
        `}
      </style>
    </Link>
    </>
  );
};

export default LogoButton;