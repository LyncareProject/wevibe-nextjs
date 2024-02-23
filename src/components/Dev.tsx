import Image from 'next/image';

const Dev = () => {
  return (
    <div>
      <div
        id="dev"
        className=" bg-[url('/img/h_bg.png')]  w-full  max-h-fit bg-cover bg-center  bg-no-repeat top-0 py-24 lg:px-6 mt-[-152px]"
      >
        <div className="relative max-w-[1000px] m-auto top-0 align-bottom object-bottom    pt-30   ">
          <div className=" flex max-h-96 mt-80  sm:mt-40">
            <p className="px-0">
              <Image
                src="/img/D.png"
                alt="Next.js Logo"
                width={70}
                height={17}
              />
            </p>
            <p className="px-0">
              <Image
                src="/img/E.png"
                alt="Next.js Logo"
                width={63}
                height={57}
              />
            </p>
            <p className="px-2">
              <Image
                src="/img/V.png"
                alt="Next.js Logo"
                width={63}
                height={0}
              />
            </p>
          </div>

          <h2 className="mt-4 text-3xl">
            데이터로 경험을, 경험으로 가치를 만듭니다.
          </h2>
          <p className="mt-2">
            위바이브는 <span className="font-bold">유저의 경험 데이터</span>가{' '}
            <span className="font-bold">차이를 만들어낸다고 믿습니다. </span>{' '}
            <br />
            위바이브는 AI 기반으로 지속 발전 가능한 성장 모델을 발굴하여
            <br />
            새로운 경험과 가능성을 모색합니다.
          </p>
          <button className="bg-[#bdc7ff] font-bold text-l mt-6 px-6 py-4 rounded-xl ">
            프로젝트 의뢰하기
          </button>
        </div>
      </div>

      <div className="w-full">
        <p className="w-[55%] m-auto lg:w-[95%] ">
          <Image
            className="m-auto p-6 "
            src="/img/d,e,a.png"
            alt="Next.js Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />{' '}
        </p>
      </div>
    </div>
  );
};

export default Dev;