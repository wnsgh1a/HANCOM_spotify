function ImageInfo() {
  return (
    <div>
      {/* 목록 */}
      <div>
        {/* 이미지 */}
        <img src="img.jpg" alt="" className="w-[153.72px] h-[153.72px]" />
        <div className="flex flex-col w-[153.72px]">
          {/* 제목 */}
          <span className="text-[16px]">Golden</span>
          {/* 가수 */}
          <span className="text-[13px]">
            HUNTER/X, EJAE, AUDREY NUNA, REI AMI
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageInfo;
