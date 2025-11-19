import Button from "@/components/button";

function Test() {
  return (
    <>
      <h1 className="p-10 font-bold bg-gold-999">컴포넌트 실험 페이지</h1>
      <div className="flex flex-col justify-center  bg-point min-h-screen px-auto">
        <div className="flex flex-col max-w-1040 mx-auto gap-50">
          <Button>로그인</Button>
        </div>
      </div>
    </>
  );
}

export default Test;
