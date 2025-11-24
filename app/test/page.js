import AddLink from "@/components/addLink";
import Button from "@/components/button";
import Card from "@/components/card";
import Input from "@/components/input";
import AddModal from "@/components/modals/addModal";
import DeleteModal from "@/components/modals/deleteModal";
import EditModal from "@/components/modals/editModal";
import ShareModal from "@/components/modals/shareModal";

function Test() {
  return (
    <>
      <h1 className="p-10 font-bold text-center bg-gold-999">
        컴포넌트 실험 페이지
      </h1>
      <div className="flex flex-col justify-center py-20 bg-gray-100 min-h-screen px-auto">
        <div className="flex flex-col max-w-1040 mx-auto gap-50">
          <Button>로그인</Button>
          <Button>링크 추가하기</Button>
          <Input placeholder="내용을 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
          <AddLink />
          <Card />
          <EditModal />
          <DeleteModal />
          <ShareModal />
          <AddModal />
        </div>
      </div>
    </>
  );
}

export default Test;
