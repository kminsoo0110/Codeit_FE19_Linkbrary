import Button from "@/components/button";
import Input from "@/components/input";

function Test() {
  return (
    <>
      <h1 className="p-10 font-bold text-center bg-gold-999">
        컴포넌트 실험 페이지
      </h1>
      <div className="flex flex-col justify-center  bg-gray-300 min-h-screen px-auto">
        <div className="flex flex-col max-w-1040 mx-auto gap-50">
          <Button>로그인</Button>
          <Button version="white">링크 추가하기</Button>
          <Input />
        </div>
      </div>
    </>
  );
}

export default Test;
