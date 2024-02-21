import Image from 'next/image';
import HeaderMenu from './HeaderMenu';

const Main = () => {
  return (
    <header className="w-full bg-[url('/img/h_bg.png')] bg-cover bg-no-repeat bg-center">
      <HeaderMenu />
      <div id="wrap">
        <ul className=" w-[221px] flex justify-between mt-[360px]">
          <li className=" block w-[73px] h-[60px]">
            <Image
              className="DImg"
              src="/img/D.png"
              alt="Data"
              width={73}
              height={60}
            />
          </li>
          <li className=" block w-[73px] h-[60px]">
            <Image
              className="EImg"
              src="/img/E.png"
              alt="Experience"
              width={63}
              height={63}
            />
          </li>
          <li className=" block w-[73px] h-[60px]">
            <Image
              className="VImg"
              src="/img/V.png"
              alt="Value"
              width={56}
              height={56}
            />
          </li>
        </ul>
        <h3 className=" text-4xl mt-[41px] mb-[26px]">
          데이터로 경험을, 경험으로 가치를 만듭니다.
        </h3>
        <p className=" text-[15px] last:pb-[148px]">
          위바이브는{' '}
          <span className=" font-extrabold">
            유저의 경험 데이터가 차이를 만들어낸다고 믿습니다.
          </span>
        </p>
        <p className=" text-[15px] last:pb-[148px]">
          위바이브는 AI 기반으로 지속 발전 가능한 성장 모델을 발굴하여
        </p>
        <p className=" text-[15px] last:pb-[148px]">
          새로운 경험과 가능성을 모색합니다.
        </p>
        <input
          className=" cursor-pointer bg-[#bdc7ff] py-[16px] px-[35px] mt-[30px] mx-0 mb-[75px] text-base font-bold rounded-[8px] border-0"
          type="button"
          value="프로젝트 의뢰하기"
          //     onClick={() => {
          //     props.setRequirementsModal(true);
          //   }}
        />
      </div>
    </header>
  );
};

export default Main;
