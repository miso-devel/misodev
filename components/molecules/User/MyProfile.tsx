export const MyProfile = () => {
  return (
    <div class="bg-white shadow(2xl) m-auto w-5/6  md:w-2/5  md:h-2/3 p-5 rounded-md">
      <div class="flex justify-start items-center gap-2 border-b-2 py-2">
        <img
          src="/images/dot.png"
          alt="logo"
          class="w-12 h-12 rounded-full"
        />
        <h1 class="text(3xl) font-bold">miso</h1>
      </div>
      <div class="my-5 ml-2">
        <p>現在大学3年生。主にフロントエンド。</p>
        <p>たこ焼き,ラーメン,Apexが好き</p>
      </div>
    </div>
  );
};
