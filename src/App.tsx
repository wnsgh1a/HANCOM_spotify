import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Archive,
  CircleArrowDown,
  Globe,
  Home,
  Plus,
  Search,
} from "lucide-react";
import ImageInfo from "./components/ImageInfo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* whole page */}
      <div className="m-0 p-0 bg-black min-h-screen flex flex-col">
        {/* header */}
        <header className="bg-black flex h-12 p-0 fixed justify-between w-[100%] mt-2">
          {/* header__left */}
          <div className="flex items-center">
            {/* button-box */}
            <div className="flex gap-8 ml-4 mr-3">
              <button className="bg-transparent w-10 h-10 rounded-full">
                <img
                  src="spotify_logo.png"
                  alt=""
                  className="w-10 h-10 object-cover"
                />
              </button>
              <button className="bg-[#1f1f1f] w-10 h-10 rounded-full flex items-center justify-center">
                <Home className="text-white" />
              </button>
            </div>
            {/* search bar */}
            <div className="h-11 flex bg-[#1f1f1f] rounded-full w-125 gap-2 justify-between">
              {/* search bar__left */}
              <div className="flex items-center gap-2 ml-2">
                <button>
                  <Search className="text-[#b3b3b3] h-8 w-8" />
                </button>
                <input
                  type="text"
                  placeholder="어떤 콘텐츠를 감상하고 싶으세요?"
                  className="text-white flex-1 bg-transparent w-95 text-3"
                />
              </div>
              {/* search bar__right */}
              <div className="flex gap-2">
                <button>
                  <Archive className="text-[#b3b3b3] h-8 w-8 ml-4 mr-4 border-l-1 border-[#b3b3b3]" />
                </button>
              </div>
            </div>
          </div>
          {/* header__right */}
          <div className="flex gap-8 items-center">
            {/* header__right__left */}
            <div className="flex gap-4">
              <button className="text-[#b3b3b3] text-sm">Premium</button>
              <button className="text-[#b3b3b3] text-sm">지원</button>
              <button className="text-[#b3b3b3] text-sm"> 다운로드하기</button>
            </div>
            <p className="text-[#b3b3b3] text-xl">|</p>
            {/* header__right__right */}
            <div className="flex gap-4">
              <button className="text-[#b3b3b3] text-sm flex items-center justify-center">
                <CircleArrowDown className="w-4 h-4" />앱 설치하기
              </button>
              <button className="text-[#b3b3b3] text-sm">가입하기</button>
              <button className="bg-white h-10 rounded-full w-30 mr-2">
                로그인하기
              </button>
            </div>
          </div>
        </header>
        {/* page__contents */}
        <main className="w-full flex flex-1 mt-12 oveautorflow-y- pt-12 bg-black">
          {/* left-sidebar */}
          <div className="w-33/100 h-full bg-[#121212] text-white m-1 mt-2 flex flex-col rounded-lg pb-32 fixed">
            {/* 내 라이브러리 */}
            <div className="flex items-center justify-between px-5">
              <span className="text-4">내 라이브러리</span>
              <button className="p-2">
                <Plus className="w-4 h-4 text-[#b3b3b3]" />
              </button>
            </div>
            <div className="h-[136.67px] flex flex-col overflow-y-auto">
              {/* 첫번째 플래이리스트 */}
              <div className="bg-[#1f1f1f] p-1 rounded-lg mb-4 flex flex-col items-start py-4 px-5 my-2 mx-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-base">
                    첫번째 플레이리스트를 만드세요.
                  </span>
                  <span className="text-sm">
                    어렵지 않아요. 저희가 도와드릴게요.
                  </span>
                </div>
                <button className="text-sm bg-white text-black px-4 py-1 rounded-full">
                  플레이리스트 만들기
                </button>
              </div>
              {/* 팔로우할 팟캐스트 */}
              <div className="bg-[#1f1f1f] p-1 rounded-lg mb-4 flex flex-col items-start py-4 px-5 my-2 mx-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-base">
                    팔로우할 팟캐스트를 찾아보세요.
                  </span>
                  <span className="text-sm">
                    새로운 에피소드에 대한 소식을 알려드릴게요.
                  </span>
                </div>
                <button className="text-sm bg-white text-black px-4 py-1 rounded-full">
                  팟캐스트 둘러보기
                </button>
              </div>
            </div>
            {/* 정보 */}
            <div className="flex flex-col items-start my-8 px-6">
              <div>
                {/* 첫번째 줄 */}
                <div>
                  <button className="text-[11px] text-[#b3b3b3] mr-4">
                    법률정보
                  </button>
                  <button className="text-[11px] text-[#b3b3b3] mr-4">
                    안전 및 개인정보 보호 센터
                  </button>
                </div>
                {/* 두번째 줄 */}
                <div>
                  <button className="text-[11px] text-[#b3b3b3] mr-4">
                    개인정보 처리방침
                  </button>
                  <button className="text-[11px] text-[#b3b3b3] mr-4">
                    광고 상세정보
                  </button>
                  <button className="text-[11px] text-[#b3b3b3] mr-4">
                    접근성
                  </button>
                </div>
              </div>
              {/* 쿠키 */}
              <button className="text-[11px] text-white mr-4 mt-2 border-none">
                쿠키
              </button>
            </div>
            {/* 한국어 */}
            <button className="bg-transparent rounded-full border-white border-[1px] w-26 flex ml-5 px-2 py-1">
              {/* <img src="globe.svg" alt="" className="mr-3" /> */}
              <Globe className="text-white mr-3" />
              한국어
            </button>
          </div>
          {/* right_contents */}
          <div className="w-[calc(67%-12px)] h-[100%-1px] bg-[#121212] mt-2 p-4 text-white rounded-lg ml-[calc(33%+10px)] m-1 pb-[82.67px]">
            {/* 인기 상승곡 */}
            <div className="w-full flex flex-col rounded-lg mt-3">
              {/* textbox */}
              <div className="w-full justify-between flex rounded-lg mb-3">
                {/* 인기 상승곡 */}
                <span className="text-2xl rounded-lg">인기 상승곡</span>
                {/* 모두보기 */}
                <button className="text-sm text-[#b3b3b3]">모두보기</button>
              </div>
              {/* 목록 */}
              <div className="flex gap-2 overflow-x-auto">
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
                <ImageInfo />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4 mt-10">메인 콘텐츠 영역</h1>
            {/* 스크롤을 위해 더미 콘텐츠를 추가합니다. */}
            {Array.from({ length: 50 }).map((_, i) => (
              <p key={i} className="mb-2">
                이것은 페이지 콘텐츠의 {i + 1}번째 줄입니다. 스크롤을
                내려보세요!
              </p>
            ))}
          </div>
        </main>
        {/* footer */}
        <footer className="w-full h-[66.67px] bg-gradient-to-r from-[#FF0000] to-[rgb(0,0,255)] flex justify-between z-1 fixed bottom-0 left-0">
          {/* footer__textbox */}
          <div className="text-white flex flex-col">
            <span className="text-[13px]">Spotify 미리듣기</span>
            <span>
              가끔 표시되는 광고와 함꼐 곡 및 팟캐스트를 이용하려면 가입하세요.
              신용카드는 필요 없습니다.
            </span>
          </div>
          {/* footer__btn */}
          <button className="bg-white rounded-full py-[8px] px-[24px] h-[48px]">
            무료로 가입하기
          </button>
        </footer>
      </div>
    </>
  );
}

export default App;
