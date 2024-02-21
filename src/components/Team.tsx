import Image from 'next/image';

const Team = () => {
  return (
    <>
      {/* Meet Our Team */}
      <div id="Team_dev">
        <h2 className="w-full m-auto text-3xl font-bold max-w-[1000px] mt-8 mb-6 lg:px-6">
          Meet Our Team
        </h2>
        <ul className="flex m-auto w-full justify-center md:flex-wrap ">
          <li>
            {' '}
            <Image
              src="/img/Alex.png"
              alt="Next.js Logo"
              width={173}
              height={50}
            />{' '}
          </li>
          <li>
            {' '}
            <Image
              src="/img/kun-woo.png"
              alt="Next.js Logo"
              width={173}
              height={50}
            />{' '}
          </li>
          <li>
            {' '}
            <Image
              src="/img/derrick.png"
              alt="Next.js Logo"
              width={173}
              height={50}
            />{' '}
          </li>
          <li>
            {' '}
            <Image
              src="/img/jay.png"
              alt="Next.js Logo"
              width={173}
              height={50}
            />{' '}
          </li>
          <li>
            {' '}
            <Image
              src="/img/cheol-gyu.png"
              alt="Next.js Logo"
              width={173}
              height={50}
            />{' '}
          </li>
          <li>
            {' '}
            <Image
              src="/img/jake.png"
              alt="Next.js Logo"
              width={173}
              height={50}
            />{' '}
          </li>
          <li>
            {' '}
            <Image
              src="/img/chan.png"
              alt="Next.js Logo"
              width={173}
              height={50}
            />{' '}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Team;
