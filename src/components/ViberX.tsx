import Image from 'next/image';

const ViberX = () => {
  return (
    <>
      <div id="viber_X" className="mt-16">
        <div className="bg-[url('/img/viberX_bg.png')] bg-center ">
          <div className="max-w-[1000px] m-auto lg:px-6">
            <h4 className="text-[#4ea223] pt-12 ">핵심 기술 Core Tech</h4>
            <h2 className="text-white font-medium text-7xl pt-8 pb-7">
              viber X
            </h2>
            <div>
              <ul className="text-white flex pb-16 justify-between w-[80%] md:block md:pb-10   md:w-[100%]">
                <li className=" ">
                  사용자의 취향 , 관심 스타일을
                  <br />
                  스타일 매칭 코디 AI 솔루션 , viber X
                </li>
                <li className="border-l-2 mr-4 md:border-t-2 md:my-4 md:border-l-0"></li>
                <li>
                  유저, 상품 거래 등의 데이터를 분석해
                  <br />
                  이커머스소비자와 운영자에게만족스러운 결과를 제공합니다
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="mt-16 max-w-[1000px] m-auto lg:px-6">
          <h3 className="text-3xl font-semibold ">개인화 추천</h3>
          <p className="text-xl mt-6">
            지속적으로 데이터를 수집함에 따라 사용자의 취향과 구매패턴을 파악해{' '}
            <br />
            더욱 높은 구매율을 목표로하는 추천 알고리즘이 구성됩니다
          </p>
          <ul className="flex mt-7 text-white md:flex-wrap  ">
            <li className="py-8 text-center block bg-[#5b74e1] rounded-xl w-[90px] mr-3 md:mb-3">
              ATP
            </li>
            <li className="py-8 text-center block bg-[#fcbd08] rounded-xl w-[90px] mr-3 md:mb-3">
              담기횟수
            </li>
            <li className="py-8 text-center block bg-[#f76060] rounded-xl w-[90px] mr-3 md:mb-3">
              구매율
            </li>
            <li className="py-8 text-center block bg-[#000000] rounded-xl w-[90px] mr-3 md:mb-3">
              비슷한 상품
            </li>
            <li className="py-8 text-center block bg-[#fcbd08] rounded-xl w-[90px] mr-3 md:mb-3">
              외부 데이터
            </li>
            <li className="py-8 text-center block bg-[#5b74e1] rounded-xl w-[90px] mr-3 md:mb-3">
              리뷰
            </li>
          </ul>
        </div>
        <div className="mt-16 max-w-[1000px] m-auto lg:px-6">
          <h3 className="text-3xl font-semibold ">AI 코디매칭</h3>
          <p className="text-xl mt-6">
            유사한 패턴의 구매자들이 선택한 아이템 혹은 함께 자주 담긴 아이템을
            추천해 <br />
            하나의 제품이 아닌 코디 전체를 추천하고 구매를 돕습니다.
          </p>
          <p className="mt-12">
            <Image
              src="/img/ai_coding.png"
              alt="Next.js Logo"
              width={650}
              height={50}
            />
          </p>
        </div>
        <div className="mt-16 max-w-[1000px] m-auto lg:px-6">
          <h3 className="text-3xl font-semibold ">AI 스타일링</h3>
          <p className="text-xl mt-6">
            최신 유행하는 스타일을 추천 , 사용자가 제일 선호하는 스타일링을
            추천해 줍니다.
          </p>
          <p className="mt-8">
            {' '}
            <Image
              src="/img/ai_ styling.png"
              alt="Next.js Logo"
              width={870}
              height={50}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default ViberX;
